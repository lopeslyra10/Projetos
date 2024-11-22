"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImgEnergia from "@/Img/energia.png";
import { api } from "@/../../service/api";

interface DispositivoStatus {
  id: number;
  nome: string;
  ativo: boolean;
  consumoMedio: number;
}

export default function ModoEconomia() {
  const [modoEconomiaAtivo, setModoEconomiaAtivo] = useState(false);
  const [dispositivos, setDispositivos] = useState<DispositivoStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Busca o status inicial dos dispositivos
  useEffect(() => {
    buscarStatusDispositivos();
  }, []);

  const buscarStatusDispositivos = async () => {
    try {
      const response = await api.get("/dispositivos/status");
      setDispositivos(response.data);
    } catch (error) {
      setErro("Erro ao carregar status dos dispositivos");
      console.error(error);
    }
  };

  const toggleModoEconomia = async () => {
    try {
      setLoading(true);
      setErro(null);

      const response = await api.post("/modo-economia/toggle", {
        ativar: !modoEconomiaAtivo,
      });

      setModoEconomiaAtivo(response.data.ativo);
      setDispositivos(response.data.dispositivos);
    } catch (error) {
      setErro("Erro ao alterar modo economia");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-green-100 p-8 pb-32 min-h-full">
      <h1 className="text-4xl font-bold text-green-800 mb-8 animate-fade-in pt-8">
        Modo Economia de Energia
      </h1>

      <div className="w-full max-w-3xl">
        <div
          className={`
          relative overflow-hidden
          bg-white rounded-xl p-8
          transform transition-all duration-300
          hover:shadow-2xl
          border-2 border-green-200
        `}
        >
          <div className="relative z-10">
            <div className="relative mb-6 transform transition-transform duration-300 hover:scale-110">
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <Image
                src={ImgEnergia}
                alt="Ícone de energia"
                width={80}
                height={80}
                className="mx-auto relative z-10"
              />
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <button
                  onClick={toggleModoEconomia}
                  disabled={loading}
                  className={`
                    px-8 py-4 rounded-full
                    transform transition-all duration-300
                    ${
                      modoEconomiaAtivo
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }
                    text-white font-bold text-lg
                    hover:scale-105
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-4 focus:ring-green-300
                  `}
                >
                  {loading
                    ? "Processando..."
                    : modoEconomiaAtivo
                    ? "Desativar Modo Economia"
                    : "Ativar Modo Economia"}
                </button>

                <p className="mt-4 text-green-700">
                  {modoEconomiaAtivo
                    ? "Modo economia ativo: Seus dispositivos serão gerenciados automaticamente"
                    : "Ative o modo economia para otimizar o consumo de energia"}
                </p>
              </div>

              {erro && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                  {erro}
                </div>
              )}

              <div className="mt-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Status dos Dispositivos
                </h3>

                <div className="space-y-4">
                  {dispositivos.map((dispositivo) => (
                    <div
                      key={dispositivo.id}
                      className={`
                        p-4 rounded-lg border-2
                        ${
                          dispositivo.ativo
                            ? "border-green-200 bg-green-50"
                            : "border-gray-200 bg-gray-50"
                        }
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-green-800">
                            {dispositivo.nome}
                          </h4>
                          <p className="text-sm text-green-600">
                            Consumo médio: {dispositivo.consumoMedio}kWh
                          </p>
                        </div>
                        <div
                          className={`
                          w-3 h-3 rounded-full
                          ${dispositivo.ativo ? "bg-green-500" : "bg-gray-400"}
                        `}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

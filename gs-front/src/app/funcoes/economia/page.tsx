'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import ImgEnergia from "@/Img/energia.png";
import { automacaoService, DispositivoStatus } from "../../../../service/automacaoservice";

export default function Economia() {
    const [modoEconomiaAtivo, setModoEconomiaAtivo] = useState(false);
    const [dispositivos, setDispositivos] = useState<DispositivoStatus[]>([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        carregarDispositivos();
    }, []);

    const carregarDispositivos = async () => {
        try {
            const dados = await automacaoService.getDispositivos();
            setDispositivos(dados);
        } catch (error) {
            setErro("Erro ao carregar dispositivos");
            console.error("Erro:", error);
        }
    };

    const toggleModoEconomia = async () => {
        try {
            setLoading(true);
            setErro(null);
            
            // Simula um delay para dar feedback visual
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Inverte o estado atual
            const novoEstado = !modoEconomiaAtivo;
            setModoEconomiaAtivo(novoEstado);
            
            // Atualiza o status dos dispositivos baseado no modo economia
            if (novoEstado) {
                // Se ativou o modo economia, verifica todos os dispositivos
                const dispositivosAtualizados = await Promise.all(
                    dispositivos.map(async (dispositivo) => {
                        const resultado = await automacaoService.verificarConsumo(dispositivo);
                        return { ...dispositivo, status: resultado.acao };
                    })
                );
                setDispositivos(dispositivosAtualizados);
            }
        } catch (error) {
            setErro("Erro ao alterar modo economia");
            console.error("Erro:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-green-100 p-8 pb-32 min-h-full">
            <h1 className="text-4xl font-bold text-green-800 mb-8 animate-fade-in pt-8">
                Modo Economia de Energia
            </h1>

            <div className="w-full max-w-3xl mb-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative mb-6 transform transition-transform duration-300 hover:scale-110">
                            <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                            <Image 
                                src={ImgEnergia} 
                                alt="Ícone de energia" 
                                width={80} 
                                height={80} 
                                className="relative z-10"
                            />
                        </div>

                        <button
                            onClick={toggleModoEconomia}
                            disabled={loading}
                            className={`
                                px-8 py-4 rounded-full
                                transform transition-all duration-300
                                ${modoEconomiaAtivo 
                                    ? 'bg-red-500 hover:bg-red-600' 
                                    : 'bg-green-500 hover:bg-green-600'
                                }
                                text-white font-bold text-lg
                                hover:scale-105
                                disabled:opacity-50 disabled:cursor-not-allowed
                                focus:outline-none focus:ring-4 focus:ring-green-300
                            `}
                        >
                            {loading ? 'Processando...' : (
                                modoEconomiaAtivo ? 'Desativar Modo Economia' : 'Ativar Modo Economia'
                            )}
                        </button>

                        <p className={`text-lg ${modoEconomiaAtivo ? 'text-green-600' : 'text-gray-600'}`}>
                            {modoEconomiaAtivo 
                                ? 'Modo economia ativo: Seus dispositivos estão sendo gerenciados automaticamente'
                                : 'Ative o modo economia para otimizar o consumo de energia'}
                        </p>
                    </div>
                </div>
            </div>

            {erro && (
                <div className="w-full max-w-3xl mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    {erro}
                </div>
            )}

            <div className="w-full max-w-3xl grid gap-6">
                {dispositivos.map((dispositivo) => (
                    <div 
                        key={dispositivo.id}
                        className={`
                            bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all
                            ${modoEconomiaAtivo ? 'border-l-4 border-green-500' : ''}
                        `}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-green-800">
                                    {dispositivo.nome}
                                </h3>
                                <p className={`
                                    ${dispositivo.status === 'Desligar' 
                                        ? 'text-red-600' 
                                        : dispositivo.status === 'Atenção'
                                            ? 'text-yellow-600'
                                            : 'text-green-600'
                                    }
                                `}>
                                    Status: {dispositivo.status}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Consumo: {dispositivo.nivelConsumo}W
                                </p>
                            </div>
                            {!modoEconomiaAtivo && (
                                <button
                                    onClick={() => automacaoService.verificarConsumo(dispositivo)}
                                    disabled={loading}
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 
                                             disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Verificar
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
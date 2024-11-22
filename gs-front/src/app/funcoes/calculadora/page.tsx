'use client';
import { useState } from "react";
import Image from "next/image";
import ImgCalculadora from "@/Img/calculadora.png";

export default function Calculadora() {
  const [consumo, setConsumo] = useState<number>(0);
  const [resultado, setResultado] = useState<{
    valorEmReais: number;
    consumoAlto: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const calcularConsumo = () => {
    setLoading(true);

    
    setTimeout(() => {
    
      const valorPorKwh = 0.92;
      
      
      const valorTotal = consumo * valorPorKwh;
      
      
      const consumoAlto = consumo > 220;

      setResultado({
        valorEmReais: valorTotal,
        consumoAlto: consumoAlto
      });

      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-green-100 p-8 pb-32 min-h-full">
      <h1 className="text-4xl font-bold text-green-800 mb-8 animate-fade-in pt-8">
        Calculadora de Consumo
      </h1>

      <div className="w-full max-w-2xl">
        <div className={`
          relative overflow-hidden
          bg-white rounded-xl p-8
          transform transition-all duration-300
          hover:shadow-2xl
          border-2 border-green-200
        `}>
          <div className="relative z-10">
            <div className="relative mb-6 transform transition-transform duration-300 hover:scale-110">
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <Image 
                src={ImgCalculadora} 
                alt="Ícone de energia" 
                width={80} 
                height={80} 
                className="mx-auto relative z-10"
              />
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="consumo" className="block text-lg font-medium text-green-800 mb-2">
                  Consumo mensal (kWh)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="consumo"
                    value={consumo || ''}
                    onChange={(e) => setConsumo(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-200"
                    placeholder="Digite seu consumo em kWh"
                    min="0"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 font-medium">
                    kWh
                  </span>
                </div>
                <p className="mt-2 text-sm text-green-600">
                  Você pode encontrar este valor na sua conta de energia
                </p>
              </div>

              <button
                onClick={calcularConsumo}
                disabled={loading || consumo <= 0}
                className={`
                  w-full py-3 px-6 rounded-lg
                  bg-green-500 hover:bg-green-600
                  text-white font-semibold
                  transform transition-all duration-200
                  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${loading ? 'animate-pulse' : ''}
                `}
              >
                {loading ? 'Calculando...' : 'Calcular Consumo'}
              </button>

              {resultado && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg border-2 border-green-200 animate-fade-in">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    Resultado da Análise
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-green-700">
                      <span className="font-semibold">Valor estimado:</span>{' '}
                      R$ {resultado.valorEmReais.toFixed(2)}
                    </p>
                    
                    <div className={`p-4 rounded-lg ${
                      resultado.consumoAlto 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {resultado.consumoAlto 
                        ? 'Seu consumo está acima da média! Considere nossas dicas de economia.'
                        : 'Seu consumo está dentro do esperado. Continue economizando!'}
                    </div>

                    {resultado.consumoAlto && (
                      <p className="text-sm text-red-600">
                        💡 Dica: Confira nossa página de dicas para reduzir seu consumo de energia!
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200 to-transparent transform translate-x-[-200%] transition-transform duration-1000 animate-shine"></div>
        </div>
      </div>
    </div>
  );
}
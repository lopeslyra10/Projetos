'use client';
import ImgEnergia from "@/Img/energia.png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Dicas de Consumo de Energia",
      description: "Aqui pode se encontrar dicas de como diminuir o consumo de energia na sua casa",
    },
    {
      id: 2,
      title: "Modo Economia de Energia",
      description: "Esse sistema é desenvolvido para que você possa escolher ativar o modo Economia de Energia, onde caso o seu consumo de energia mensal esteja muito alto, isso fará com que desligue automaticamente todos os seu aparelhos eletrônicos em horário de pico",
    },
    {
      id: 3,
      title: "Cálculo do Consumo",
      description: "Uma calculadora desenvolvida para calcular o seu consumo de energia mensal onde com o resultado você pode descobrir se seu consumo é considerado alto",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-8 pb-16">
      <h1 className="text-4xl font-bold text-green-800 mb-12 animate-fade-in relative">
        Funções
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h1>

      <div className="grid gap-8 max-w-6xl w-full md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              relative overflow-hidden
              bg-white rounded-xl p-6
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl
              border-2 border-green-200
              ${hoveredCard === card.id ? 'bg-green-50' : ''}
            `}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10">
              <div className="relative mb-6 transform transition-transform duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                <Image 
                  src={ImgEnergia} 
                  alt="Ícone de energia" 
                  width={100} 
                  height={100} 
                  className="mx-auto relative z-10"
                />
              </div>

              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {card.title}
              </h3>

              <p className="text-green-700 mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Efeito de brilho no hover */}
            <div className={`
              absolute inset-0 
              bg-gradient-to-r from-transparent via-green-200 to-transparent
              transform translate-x-[-200%]
              transition-transform duration-1000
              ${hoveredCard === card.id ? 'animate-shine' : ''}
            `}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
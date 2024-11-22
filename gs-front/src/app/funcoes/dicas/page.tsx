'use client';
import Image from "next/image";
import { useState } from "react";
import ImgAjuda from "@/Img/ajuda.png";

export default function Dicas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const dicas = [
    {
      id: 1,
      title: "Aparelhos em Standby",
      description: "Desligue aparelhos que não estão em uso, evitando o consumo em modo standby",
      icon: ImgAjuda,
    },
    {
      id: 2,
      title: "Iluminação Eficiente",
      description: "Use lâmpadas LED, que consomem menos energia e têm maior durabilidade",
      icon: ImgAjuda,
    },
    {
      id: 3,
      title: "Horário de Pico",
      description: "Evite usar múltiplos aparelhos em horário de pico (17h-21h)",
      icon: ImgAjuda,
    },
    {
      id: 4,
      title: "Manutenção Regular",
      description: "Mantenha a manutenção dos eletrodomésticos em dia para garantir eficiência",
      icon: ImgAjuda,
    },
    {
      id: 5,
      title: "Temperatura Ideal",
      description: "Configure a temperatura ideal do ar condicionado (23°C-24°C)",
      icon: ImgAjuda,
    },
    {
      id: 6,
      title: "Luz Natural",
      description: "Aproveite a luz natural durante o dia, reduzindo o uso de iluminação artificial",
      icon: ImgAjuda,
    },
    {
      id: 7,
      title: "Cores das Paredes",
      description: "Use cores claras nas paredes para melhor reflexão da luz",
      icon: ImgAjuda,
    },
    {
      id: 8,
      title: "Uso da Geladeira",
      description: "Evite abrir a geladeira desnecessariamente para manter a eficiência",
      icon: ImgAjuda,
    },
    {
      id: 9,
      title: "Lavagem Eficiente",
      description: "Acumule roupas para usar a máquina de lavar com carga completa",
      icon: ImgAjuda,
    },
    {
      id: 10,
      title: "Timer do Ar Condicionado",
      description: "Utilize o timer do ar condicionado para desligar automaticamente",
      icon: ImgAjuda,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-green-100 p-8 pb-32 min-h-full">
      <h1 className="text-4xl font-bold text-green-800 mb-8 animate-fade-in pt-8">
        Dicas de Economia de Energia
      </h1>
      
      <p className="text-green-700 text-lg mb-12 max-w-2xl text-center">
        Pequenas mudanças nos hábitos diários podem fazer uma grande diferença no consumo de energia.
      </p>

      <div className="grid gap-6 max-w-7xl w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
        {dicas.map((dica) => (
          <div
            key={dica.id}
            className={`
              relative overflow-hidden
              bg-white rounded-xl p-6
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl
              border-2 border-green-200
              ${hoveredCard === dica.id ? 'bg-green-50' : ''}
            `}
            onMouseEnter={() => setHoveredCard(dica.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10">
              <div className="relative mb-4 transform transition-transform duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                <Image 
                  src={dica.icon} 
                  alt={`Ícone ${dica.title}`} 
                  width={60} 
                  height={60} 
                  className="mx-auto relative z-10"
                />
              </div>

              <h3 className="text-xl font-bold text-green-800 mb-2">
                {dica.title}
              </h3>

              <p className="text-green-700 text-sm leading-relaxed">
                {dica.description}
              </p>
            </div>

            <div className={`
              absolute inset-0 
              bg-gradient-to-r from-transparent via-green-200 to-transparent
              transform translate-x-[-200%]
              transition-transform duration-1000
              ${hoveredCard === dica.id ? 'animate-shine' : ''}
            `}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
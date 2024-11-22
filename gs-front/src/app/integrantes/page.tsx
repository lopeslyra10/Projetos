'use client';
import imgLucas from "@/Img/foto-lucas.jpeg";
import imgAugusto from "@/Img/foto-augusto.jpeg";
import Image from "next/image";
import { useState } from "react";

export default function Integrantes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-8">
            <h1 className="text-4xl font-bold mb-4 text-green-800 animate-fade-in">
                Turma 1TDSPY
            </h1>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 animate-slide-down">
                Integrantes do Grupo
            </h2>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Card do Augusto */}
                <div 
                    className={`
                        bg-white rounded-xl p-6 
                        transform transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-2xl
                        border-2 border-green-200
                        ${hoveredCard === 1 ? 'bg-green-50' : ''}
                    `}
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Augusto Lopes Lyra</h3>
                    <div className="space-y-3 mb-4">
                        <p className="text-green-700"><span className="font-semibold">RM:</span> 555592</p>
                        <div className="flex flex-col space-y-2">
                            <a 
                                href="https://github.com/lopeslyra10" 
                                target="_blank" 
                                className="text-green-600 hover:text-green-800 transition-colors duration-200 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-100"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/augusto-lopes-lyra/" 
                                target="_blank" 
                                className="text-green-600 hover:text-green-800 transition-colors duration-200 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-100"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <Image 
                        src={imgAugusto} 
                        alt="Foto do Augusto" 
                        width={300} 
                        height={300} 
                        className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105" 
                    />
                </div>

                {/* Card do Lucas */}
                <div 
                    className={`
                        bg-white rounded-xl p-6 
                        transform transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-2xl
                        border-2 border-green-200
                        ${hoveredCard === 2 ? 'bg-green-50' : ''}
                    `}
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Lucas Barreto Consentino</h3>
                    <div className="space-y-3 mb-4">
                        <p className="text-green-700"><span className="font-semibold">RM:</span> 5557107</p>
                        <div className="flex flex-col space-y-2">
                            <a 
                                href="https://github.com/Coutinh00" 
                                target="_blank" 
                                className="text-green-600 hover:text-green-800 transition-colors duration-200 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-100"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/lucas-barreto-consentino-849528232/" 
                                target="_blank" 
                                className="text-green-600 hover:text-green-800 transition-colors duration-200 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-100"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <Image 
                        src={imgLucas} 
                        alt="Foto do Lucas" 
                        width={300} 
                        height={300} 
                        className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105" 
                    />
                </div>
            </div>
        </div>
    );
}
import ImgEnergia from "@/Img/energia.png";
import Image from "next/image";

 
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 pb-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Funções</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl w-full text-center">
        <Image src={ImgEnergia} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">Dicas de Consumo de Energia</h3>
        <p className="text-gray-600 mt-2">
          Aqui pode se encontrar dicas de como diminuir o consumo de energia na sua casa
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl w-full text-center">
        <Image src={ImgEnergia} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">Modo Economia de Energia</h3>
        <p className="text-gray-600 mt-2">
          Esse sistema é desenvolvido para que você possa escolher ativar o modo Economia de Energia, onde caso o seu consumo de energia mensal esteja muito alto, isso fará com que desligue automaticamente todos os seu aparelhos eletrônicos em horário de pico
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full text-center">
        <Image src={ImgEnergia} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">Cálculo do Consumo</h3>
        <p className="text-gray-600 mt-2">
          Uma calculadora desenvolvida para calcular o seu consumo de energia mensalonde com o resultado você pode descobrir se seu sonsumo é considerado alto
        </p>
      </div>


    </div>
  );
}
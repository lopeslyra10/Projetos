import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/Components/Cabecalho/Cabecalho";
import Rodape from "@/Components/Rodape/Rodape";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "light"
}

export const metadata: Metadata = {
  title: "TechVerde",
  description: "Solução para um mundo sustentável criada por TechVerde",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  

  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
          {children}
        <Rodape />
       </body>
    </html>
  );
}

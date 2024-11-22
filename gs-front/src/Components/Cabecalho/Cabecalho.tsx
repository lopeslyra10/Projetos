import Image from "next/image";
import imgLogo from "@/Img/logo_planta.png";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <Image src={imgLogo} alt="logo-planta" width={100} height={100} />
            <Menu />
        </header>
    )
}
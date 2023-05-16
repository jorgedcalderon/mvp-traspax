import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero.webp";

export default function Home() {

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Traspax" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 backdrop-blur-sm">
        <p>La solución de SAAS con inteligencia artificial para administrar agencias de turismo en San Pedro de Atacama en minutos. Registre pasajeros y obtenga recomendaciones sin sacrificar su tiempo.</p>
        <Link href="/dashboard" className="btn my-2">Comienza</Link>
      </div>
    </div>
  );
}
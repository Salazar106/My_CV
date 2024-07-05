import { SectionInformation } from "./ui/aboutMe/aboutMe";
import Acordeon from "./ui/aboutMe/acordeon";
import dataAcordeon from "@/app/lib/skillsData";
import {experienceData} from "./lib/experienceData";
import { motion } from "framer-motion";

export default function Home() {
 

  return (
    <main className="flex flex-col h-full items-center  ">
      <SectionInformation/>
      <div
        
        className="flex w-full h-full flex-wrap md:flex-nowrap  justify-center  "
      >

        <div className="w-full md:w-1/2 h-full p-3">
          <h1 className="text-start text-2xl font-bold mb-3">Habilidades de Programador</h1>
          <Acordeon dataAcordeon={dataAcordeon}/>
        </div>

        <div className="w-full md:w-1/2 h-full p-3">
          <h1 className="text-start text-2xl font-bold mb-3">Experiencia Laboral</h1>
          <Acordeon dataAcordeon={experienceData}/>
        </div>
          

      </div>
    </main>
  );
}

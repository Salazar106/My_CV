import React from "react";
import Porcent from "./knob";
import { Divider } from 'primereact/divider';

export const SectionInformation=()=>{
    const aboutMe=`Como desarrollador junior con experiencia en la creación 
    y mantenimiento de aplicaciones de software utilizando JavaScript y TypeScript,
     así como en el manejo de los frameworks Node.js y Next.js 
     tanto en el desarrollo de front-end como de back-end, he liderado equipos de desarrollo 
     y participado activamente en la planificación y coordinación de actividades relacionadas 
     con el ciclo de vida del desarrollo de software. Además de mis habilidades técnicas, destaco 
     por mi capacidad para realizar análisis exhaustivos de proyectos, lo que me permite comprender
      completamente los requisitos y desafíos, y tomar decisiones informadas para alcanzar los objetivos 
      del proyecto. Esta combinación de habilidades técnicas y de liderazgo me ha permitido contribuir de
       manera significativa al éxito de múltiples proyectos de software.`
    return(
        <div className="flex flex-col items-center justify-center bg-gray-600 w-screen min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-black">About me</h1>
            <div className="flex flex-nowrap items-center justify-center w-full p-10">
                <p>dasd</p>
                <Divider layout="vertical" />
                <p className="p-10 text-black text-justify">{aboutMe}</p>

            </div>
            <Porcent/>
        </div>
    )
}

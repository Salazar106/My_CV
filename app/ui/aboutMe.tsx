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
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-white">About me</h1>
            <div className="flex flex-nowrap items-center justify-center w-full px-10">
                <div className="flex flex-col gap-5 h-full w-full">
                    <h1>hola mundo</h1>
                    <h1>hola mundo</h1>
                    <h1>hola mundp</h1>
                </div>
                <Divider layout="vertical"/>   
                <p className="border-l-2 border-dashed border-gray-500 p-10 text-gray-300 text-justify">{aboutMe}</p>
            </div>
            <Porcent/>
        </div>
    )
}

import React from "react";
import Porcent from "./knob";
import { Divider } from 'primereact/divider';
import { FaEnvelope, FaIdCard } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CopyText } from "../general/clickToCopy";
import Image from "next/image";

export const SectionInformation = () => {
    const aboutMe = `Como desarrollador junior con experiencia en la creación 
        y mantenimiento de aplicaciones de software utilizando JavaScript y TypeScript,
        así como en el manejo de los frameworks Node.js y Next.js 
        tanto en el desarrollo de front-end como de back-end, he liderado equipos de desarrollo 
        y participado activamente en la planificación y coordinación de actividades relacionadas 
        con el ciclo de vida del desarrollo de software. Además de mis habilidades técnicas, destaco 
        por mi capacidad para realizar análisis exhaustivos de proyectos, lo que me permite comprender
        completamente los requisitos y desafíos, y tomar decisiones informadas para alcanzar los objetivos 
        del proyecto. Esta combinación de habilidades técnicas y de liderazgo me ha permitido contribuir de
        manera significativa al éxito de múltiples proyectos de software.`

    const informationDescription = [
        {
            icon: <Image src="/imgs/idCard.png" alt="ID" width={50} height={50} />,
            title: "Cedula de ciudadanía",
            value: <strong><CopyText text="1037632160" /></strong>
        },
        {
            icon:<Image src="/imgs/locate.png" alt="ID" width={50} height={50} />,
            title: "Dirección",
            value: <strong><CopyText text="Calle 37 sur # 33 - 77 Envigado Antioquia" /></strong>
        },
        {
            icon: <Image src="/imgs/telefono.png" alt="ID" width={50} height={50} />,
            title: "Número de teléfono",
            value: <strong>+57<CopyText text="3006483858" /></strong>
        },
        {
            icon: <Image src="/imgs/mail.png" alt="ID" width={50} height={50} />,
            title: "Correo electrónico",
            value: <strong><CopyText text="jdps106@hotmail.com" /></strong>
        }
    ]

    return (
        <div className="flex flex-col items-center   py-10">
            <div className="flex flex-wrap items-center justify-center w-full px-10">

                <div className="flex flex-col text-center gap-4 h-full w-full flex-wrap md:w-[40%] md:pr-10">
                    <h1 className="text-2xl font-bold mb-4">Informcion Personal</h1>

                    <div className="flex flex-wrap sm:flex-nowrap md:flex-wrap items-center justify-center w-full pr-2">
                        {informationDescription.map((item) => (
                            <div key={item.title} className="flex flex-col w-full md:w-1/2 items-center flex-wrap text-center ">
                                <div className="text-[40px]">{item.icon}</div>
                                <p className="text-gray-300 text-sm">{item.title} </p>
                                <p className="text-gray-300 text-sm">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-[60%]">
                    <h1 className="text-3xl font-bold mb-4 text-white">Sobre Mi...</h1>

                    <p className="md:border-l-2 md:border-dashed border-gray-500 p-2 md:p-10 text-gray-300 text-justify">{aboutMe}</p>
                </div>

            </div>
        </div>
    )
}

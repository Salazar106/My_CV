
import NextImage from "next/image";
import AcordeonExperienceContecnt from "../ui/aboutMe/acordeonExperienceContecnt";


const tigo={
    fecha:"Octubre 2021 a Octubre 2022",
    cargo:"Desarrollador Junior",
    descripcion:`lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
     mollit anim id est laborum.`
}

const Disruptive={
    fecha:"Octubre 2021 a Octubre 2022",
    cargo:"Front-End Developer",
    descripcion:`lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
     mollit anim id est laborum.`
}

export const experienceData = [
    {
      key: "1",
      label: "Tigo-Une",
      startContent: <NextImage  src="/imgs/tigo.png" alt="Front_End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonExperienceContecnt data={tigo} />
    },
    {
      key: "2",
      label: "Disruptive Information Technologies",
      startContent: <NextImage  src="/imgs/disruptive.jpeg" alt="Back-End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonExperienceContecnt data={Disruptive} />
    },
  ]
;





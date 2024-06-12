"use client"

import { FC } from 'react';
import Image from 'next/image';
import TabBar from '@/app/ui/tabBar.jsx';
import { Button, Card, CardBody, Link, Tab, Tabs } from '@nextui-org/react';

export const Header: FC = () => {
  let tabs = [
    {
      id: "skills",
      label: "Skills",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
      id: "music",
      label: "Music",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "videos",
      label: "Videos",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
  return (
    <div className='flex flex-col'>
      <div className='min-h-44 md:h-56 lg:h-64 bg-gradient-to-t from-[#03151c] to-[#045356] w-screen flex flex-wrap-reverse justify-center md:justify-between items-center'>
        <div className='flex flex-col items-start px-10'>
          <p className='text-sm text-white'>Software Deveoper</p>
          <h1 className='text-2xl text-white font-bold'>Jefersson Daniel</h1>
          <h1 className='text-2xl text-white font-bold'>Peña Salazar</h1>

        </div>
        
        <div>
          <Image src="/imgs/profile.png" alt="Descripción de la imagen" width={200} height={300}/>
        </div>
        <div className='hidden md:block w-[30%] px-10 text-justify bordert-2  '>
          <p>Soy desarrollador con dos años de experiencia en las TI, apaacionado por las nuevas tecnologías y la automatización de procesos</p>
        </div>
      </div>
    </div>
    
  );
};

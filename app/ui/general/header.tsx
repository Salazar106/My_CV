"use client"

import { FC } from 'react';
import Image from 'next/image';
import { Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { socialLinks, navLinks } from "../../lib/data";
import { motion } from 'framer-motion';

export const Header: FC = () => {

  const pathname = usePathname()


  let tabs = [
    {
      id: "about",
      label: "Sobre Mi",
      link:'/',
    },
    {
      id: "skills",
      label: "Habilidades",
      link:'/skills',
    },
    {
      id: "contact",
      label: <h1 className="flex items-center">Contacto</h1>,
      link:'/contacts',

    }
  ];
  return (
    <div className='flex flex-col'>
      <div className='min-h-44 md:h-56 lg:h-64 bg-gradient-to-t from-[#03151c] to-[#045356] w-full  flex flex-wrap-reverse justify-center md:justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-start px-10 md:w-[33.33%]'
        >
          <p className='text-sm text-white'>Full Stact Deveoper</p>
          <h1 className='text-2xl text-white font-bold'>Jefersson Daniel</h1>
          <h1 className='text-2xl text-white font-bold'>Peña Salazar</h1>
        </motion.div>
        
        <div className='w-[33.33% flex justify-center'>
          <Image
            src="/imgs/profile.png" alt="Foto" width={200} height={300}/>
        </div>
        <div className='hidden md:block w-[33.33%] px-10 text-justify bordert-2  '>
          <p>Desarrollador con <strong>2 años</strong> de experiencia en las TI, apacionado por las nuevas tecnologías y la automatización de procesos</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-between gap-5 items-center w-full h-20 bg-gradient-to-t from-[#03151c] to-[#045356] ">
        <div className="flex px-10 gap-5 items-center   ">
          {navLinks.map((item: any, index: number) => (
              <Link key={index} href={item.link} className={`flex h-[48px] grow  items-center text-gray-500 justify-center gap-2  text-sm  font-large hover:text-white md:flex-none md:justify-center md:p-2 md:px-3
              ${pathname === item.link ? ' text-white shadow-gray-400 font-bold ':''}
              `}>
                {item.label}
              </Link> 
          ))}
        </div>
        <div className='hidden gap-5 items-center px-10  md:flex'>
          {socialLinks.map((item:any, index: number) => (
              <Link key={index} href={item.link} target='_blank' className='text-white text-lg font-bold' >{item.label}</Link>
          ))}
        </div>      
      </div>
    </div>
    
  );
};

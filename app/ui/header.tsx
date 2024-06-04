import { FC } from 'react';
import { Button } from 'primereact/button';

export const Header: FC = () => {
  return (
    <div className='h-44 md:h-56 lg:h-64 bg-[#293746] w-screen flex justify-between items-center'>
      <div className='flex flex-col items-start px-10'>
        <p className='text-sm text-white'>Software Deveoper</p>
        <h1 className='text-2xl text-white font-bold'>Jefersson Daniel</h1>
        <h1 className='text-2xl text-white font-bold'>Peña Salazar</h1>
      </div>
      
      <div>
        <Button label="Check" icon="pi pi-check" color='primary' />
      </div>
      <div className='w-[30%] p-2 bordert-2 '>
        <p>soy un desarrollador de software apacionado por la tecnologia...</p>
      </div>
    </div>
  );
};

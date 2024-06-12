"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { SectionInformation } from "./aboutMe";
import { FaIdCard } from "react-icons/fa";

export const RaizComponent = () => {

  let tabs = [
    {
      id: "photos",
      label: "Sobre Mi",
      link:'/',
    },
    {
      id: "music",
      label: "Habilidades",
      link:'/',
    },
    {
      id: "videos",
      label: <h1 className="flex items-center"><FaIdCard/>Contacto</h1>,
      link:'/',

    }
  ];

  return (
    <div>
      <div className="flex justify-center gap-5 items-center w-screen h-20 bg-gradient-to-t from-[#03151c] to-[#045356] ">
          <Tabs  variant='underlined' items={tabs} aria-label="Dynamic tabs">
            {(item) => (
              <Tab key={item.id} title={item.label} href="/skills">
                
              </Tab>
            )}
            </Tabs>
      </div>
            
      <SectionInformation />
    </div>
  );
};

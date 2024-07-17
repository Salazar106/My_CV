'use client';
import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Acordeon({dataAcordeon}: any) {
  const itemClasses = {
    base: "py-0 w-full",
    title: "text-large text-white font-bold",
    trigger: "px-2 py-0 data-[hover=true]:bg-[#044e51] rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small w-full",
    subtitle: "before:text-white before:text-xl before:absolute",
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full p-5 bg-[#03151c] shadow-large rounded-lg">
      <Accordion itemClasses={itemClasses}>
        {dataAcordeon && dataAcordeon.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            startContent={item.startContent}
            subtitle={item.title}
            title={item.label}
          >

            <div>
              {item.content}
            </div>
          </AccordionItem>
        ))}

      </Accordion>
    </motion.div>

  );
}

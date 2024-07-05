'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { InputNumber } from "./inputNumber";
import { FaCartPlus, FaEye } from "react-icons/fa";

export const SellCard = ({ data }: any) => {
    const [quantities, setQuantities] = useState(data.map(() => 1));

    const handleValueChange = (index: number, newValue: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newValue;
        setQuantities(newQuantities);
    };

    const handleSubmit = (index: number) => {
        console.log(`${data[index].title}:`, quantities[index]);
        setQuantities(quantities.map(() => 1));
    };

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {data.map((item: any, index: number) => (
                <Card key={item.id} className="py-4 bg-sky-500">
                    <CardBody className="overflow-visible py-2">
                        <Image
                            isZoomed
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                    <CardHeader className="w-full pb-0 pt-2 px-4 flex-col items-start cursor-default">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-tiny uppercase font-bold">{item.title}</p>
                            <Button isIconOnly className="bg-transparent text-white">
                                <FaEye />
                            </Button>
                        </div>
                        <small className="text-default-500 ">{item.description}</small>
                        <div className="flex w-full h-20 justify-between items-center">
                            <div>
                                <p className="text-large"><strong>Valor Unitario</strong></p>
                                <p>${item.precio}</p>
                            </div>
                            <InputNumber 
                                onValueChange={(newValue:any) => handleValueChange(index, newValue)} 
                                value={quantities[index]} 
                            />
                        </div>
                        <Button 
                            className="w-full" 
                            color="primary" 
                            endContent={<FaCartPlus />}
                            onClick={() => handleSubmit(index)}
                        >
                            Agregar al carrito 
                        </Button>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

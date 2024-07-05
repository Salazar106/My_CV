'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image, Input, Button } from "@nextui-org/react";
import { InputNumber } from "./inputNumber";
import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";


export const SellCard = ({ data }: any) => {
    const [value, setValue] = useState<number>(1);

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {data.map((item: any) => (
                <Card key={item.id} className="py-4 bg-slate-600">
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
                            <InputNumber />

                        </div>
                        <Button className="w-full" color="primary" endContent={<FaCartPlus />}>Agregar al carrito </Button>
                    </CardHeader>
                </Card>
            ))}
        </div>


    );
}

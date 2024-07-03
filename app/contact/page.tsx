import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function ContactsPage() {
    return (

        <div className="relative h-[150px] w-[150px] p-5">
            <Image
                alt="Woman listing to music"
                className="object-cover opacity-20"
                height={150}
                src="/imgs/js.png"
                width={1500}
            />
            <div className="justify-between bg-gray-400 bg-opacity-50  border-white/20 border-2 overflow-hidden  absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] h-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="flex items-center bg-[#034f52] rounded-[20px] h-[50px] w-full py-4 px-2">
                    <h1>dsdd</h1>            
                </div>
                <h1>JavaScript</h1>
            </div>
        </div>


    );
}

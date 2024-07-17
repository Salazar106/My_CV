import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import ContactMeForm from "../ui/contactMe/form";
import { motion } from "framer-motion"
import { Duru_Sans } from "next/font/google";
import { AnimateDiv } from "../ui/contactMe/animateDiv";

export default function ContactsPage() {
    return (

        <div className="flex w-full h-full">
            {/* <div className="contact-form w-[500px]">
                <p>sapiente praesentium officia explicabo incidunt, quam perferendis maiores porro? Cumque placeat quas perferendis repudiandae. Eligendi!</p>
            </div> */}
            <ContactMeForm/>
            {/* <AnimateDiv/> */}
        </div>


    );
}

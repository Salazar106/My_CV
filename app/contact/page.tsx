import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import ContactMeForm from "../ui/contactMe/form";
import { motion } from "framer-motion"
import { Duru_Sans } from "next/font/google";
import { AnimateDiv } from "../ui/contactMe/animateDiv";

export default function ContactsPage() {
    return (

        <div className="w-full h-full">
            <ContactMeForm/>
            <AnimateDiv/>
        </div>


    );
}

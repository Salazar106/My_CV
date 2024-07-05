

'use client';

import { Button, Checkbox, Link } from "@nextui-org/react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Asul } from "next/font/google";
import { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import * as Yup from 'yup';
import { motion } from "framer-motion"
import { FaTextHeight } from "react-icons/fa";
import { LuPenTool } from "react-icons/lu";


interface LoginFormValues {
    email: string;
    asunto: string;
    description: string;
}

const initialValues: LoginFormValues = {
    email: '',
    asunto: '',
    description: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('El Email es requerido'),
    asunto: Yup.string().required('El Asunto es requerido'),
    description: Yup.string().required('La descripcion es requerida'),
});

export default function ContactMeForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const handleSubmit = async (
        values: LoginFormValues,
    ) => {
        console.log(values);

    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-[calc(100%-20px)] md:w-[60%] p-5 h-auto bg-white rounded-lg shadow-md dark:bg-my-gray"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="w-full px-1 md:px-10">
                    <div className="w-full flex flex-col justify-center gap-3">
                        <div className='flex flex-col h-14'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <IoIosMail />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`}
                                    type="email"
                                    title="Email"
                                    name="email"
                                    placeholder="Email"
                                    maxLength="255"
                                /><br />
                            </div>
                            <ErrorMessage name="email" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className="flex flex-col h-14">
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 cursor-pointer bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <LuPenTool />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type='text'
                                    title="Asunto"
                                    name="asunto"
                                    placeholder="Asunto"
                                    maxLength="200"
                                />
                            </div>
                            <ErrorMessage name="asunto" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className="flex flex-col h-14">
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 cursor-pointer bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaTextHeight />
                                </span>
                                <Field
                                    as='textarea'
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    // type='text'
                                    title="Descripcion"
                                    name="description"
                                    placeholder="Descripcion"
                                    
                                />
                            </div>
                            <ErrorMessage name="description" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className="flex w-full justify-end">
                            <Button type="submit" size="md" className="w-full mt-6">Enviar</Button>
                        </div>
                    </div>
                    {errorMessage && (
                        <div className="flex h-8 items-end space-x-1 mt-2" aria-live="polite" aria-atomic="true">
                            <FaLock className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </div>
                    )}
                </Form>
            </Formik>
        </motion.div>

    );
}

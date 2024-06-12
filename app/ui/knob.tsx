'use client'
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function Porcent({values}:number) {
    const [value, setValue] = useState(values);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} readOnly strokeWidth={5} />
        </div>
    )
}
'use client'
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function Porcent({values}:any) {
    const [value, setValue] = useState(values);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} valueColor="#044e51" textColor='white' rangeColor='white' readOnly strokeWidth={5} />
        </div>
    )
}
'use client'

import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

export const CopyText = ({ text }: { text: string }) => {
  
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 500); // Reset copied state after 1.5 seconds
          })
          .catch((err) => {
            console.error('Error al copiar el texto: ', err);
          });
      };
    


  return (
    <Tooltip
        classNames={{
            base: [
            "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
            "py-2 px-4 shadow-xl",
            "text-black bg-gradient-to-br from-gray-200 to-neutral-700",
            ],
        }}
        placement="bottom"
        content={
            <div className="px-1 py-2">
            <p>Click para copiar el texto</p>
            </div>
        }
    >
        
        <span
            className="font-bold text-wite"
            style={{ cursor: 'pointer', textDecoration: copied ? 'underline' : 'none' }}
            onClick={copyToClipboard}
        >
        {copied ? 'Copied!' : text}
        </span>
    </Tooltip>
  );
};
'use client'
import { motion,useMotionValue,useTransform } from "framer-motion"

export const AnimateDiv = () => {
    const x = useMotionValue(0)

    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#04363b", "white"]
      )
    return (
    
        <motion.div
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["30%", "20%", "50%", "50%", "20%"],
                background: ['#042d32', '#04363b'],
              }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            className='w-40 h-40 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md'
        ></motion.div>
    )
}
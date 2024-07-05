import { useMotionValue, useTransform } from "framer-motion"


const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className="relative flex items-center justify-center"
      >
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] 
                     rounded-full overflow-hidden bg-primary relative flex items-center justify-center
                     " 
        >
          <Image 
            src="/www.jpg"
            alt="Arif Photo"
            priority
            quality={100}
            fill
            className="object-cover"
          />
        </motion.div>

        
        <motion.svg
          className="w-[320px] h-[320px] xl:w-[440px] xl:h-[440px] absolute"
          fill="transparent"
          viewBox="0 0 586 586"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <motion.circle 
            cx="293"
            cy="293"
            r="270"
            stroke="#14b8a6"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24,10,0,0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo;

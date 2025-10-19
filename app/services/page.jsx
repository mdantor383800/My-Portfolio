"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I design fast, responsive websites using modern tech—perfect for businesses, portfolios, or e-commerce needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI Design",
    description: "I create visually appealing and user-friendly UI. My designs focus on clarity, aesthetics, and seamless user experience to ensure your product is both engaging and easy to navigate.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description: "Explore the portfolio of a creative web developer spcializing in React, Next.js and Tailwind CSS.Building fast, SEO-optimized,and user-friendly websites for business and brands.",
    href: "",
  }
]

import { motion } from "framer-motion"

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center mx-4 mt-8 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px] group"
        >
          {services.map((service, index) => {
            return <div key={index}>
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-teal-500 cursor-pointer">{service.num}</div>
                <Link href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white/90 group-hover:bg-teal-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-black text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white/95 group-hover:text-teal-500 transition-all duration-500 my-4">{service.title}</h2>
              <p className="text-[18px] text-white/65">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
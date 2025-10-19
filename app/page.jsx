"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";





export default function Home() {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between xl:pt-8 xl:pb-24 text-center xl:text-left">
          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}

            className="order-2 xl:order-none text-[24px]"><span>Front-end Web Developer</span>
            <h1 className="h1">Hello I'm <br /><span className="text-teal-500">Md Arif</span></h1>
            <p className="max-w-[500px] mb-9 text-[20px] text-white/80">I excel at crafting elegant digital experiences and I am proficient in various languages and technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                asChild
                className="border border-teal-500 text-xl hover:text-white cursor-pointer"
              >
                <a
                  href="/arif.pdf"
                  download="arif.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    Download CV
                    <FiDownload />
                  </span>
                </a>
              </Button>

              <div><Socials /></div>
            </div>
          </motion.div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="pt-6"><Stats /></div>
      </div>
    </section>
  );
}

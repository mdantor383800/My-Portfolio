"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  BsArrowUpRight,
  BsGithub,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "tic-tac-to",
    title: "project 1",
    description:
      "A classic Tic Tac Toe game built using vanilla JavaScript and modern CSS styling. The game features a clean, responsive design where two players can compete on the same device.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/tac.png",
    live: "",
    github: "https://github.com/mdantor383800/Tic-Tac-To",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "A modern and user-friendly web application for buying and managing books online. Users can browse, view, and add to cart.",
    stack: [{ name: "TailwindCSS" }, { name: "React.js" }],
    image: "/salaad.png",
    live: "https://salaad-cart.vercel.app/",
    github: "https://github.com/mdantor383800/Salaad-Cart",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Another modern and user-friendly web application for managing books.",
    stack: [{ name: "TailwindCSS" }, { name: "React.js" }],
    image: "/book2.png",
    live: "https://my-shopping-cart-lzv7eyg64-md-arifs-projects-cf6398a8.vercel.app/",
    github: "https://github.com/mdantor383800/MyShoppingCart",
  },
  {
    num: "04",
    category: "weather-app",
    title: "project 4",
    description:
      "A modern and responsive Weather App built with Next.js that displays real-time weather data.",
    stack: [{ name: "TailwindCSS" }, { name: "Next.js" }],
    image: "/Weather.jpg",
    live: "",
    github: "https://github.com/mdantor383800/Weather-Dashboard",
  },
];

const ProjectPage = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSliderChange = (swiper) => {

    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-fit flex flex-col justify-center py-12 xl:px-0 relative"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          <div className="mx-4 md:mx-0 w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px] h-[50%]">
              <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none py-6 text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-[18px]">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="my-6 text-xl text-teal-500">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20 mt-2"></div>

              <div className="flex flex-col md:flex-row gap-4">

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="mt-5 w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-teal-500" />
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>


                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="mt-5 w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-teal-500" />
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>


          <div className="w-full xl:w-[50%] relative">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSliderChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#071e36] hover:bg-teal-500 text-white rounded-full p-3"
            >
              <BsArrowLeft className="text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#082039] hover:bg-teal-500 text-white rounded-full p-3"
            >
              <BsArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectPage;

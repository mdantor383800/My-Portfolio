"use client"


import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"



const about = {
  title: "About me",
  description: "Front-End Developer skilled in React.js, Next.js, Tailwind CSS, and JavaScript. I build clean, responsive, and high-performance websites focused on user experience and modern design. Always eager to collaborate and learn new technologies.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Md.Arif"
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801639255302"
    },
    {
      fieldName: "Experience",
      fieldValue: "01 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "mdantor383800@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Bangla, English, Hindi"
    },
    {
      fieldName: "Gender",
      fieldValue: "Male"
    },
  ]

};

const education = {
  icon: "/asset/resume/cap.svg",
  title: "My Education",
  description: "I completed my degree in Economics, where I developed strong analytical and problem-solving skills. Along the way, I discovered my passion for web development and started combining logic, creativity, and data-driven thinking to build modern digital experiences.",

  items: [
    {

      degree: "Front-end Web Development",
      institution: "Online YouTube Course",
      duration: "2024 - present"

    },
    {

      degree: "React.js",
      institution: "Learn With Sumit",
      duration: "2025"

    },
    {

      degree: "Next.js",
      institution: "Learn With Sumit",
      duration: "2025"

    },

    {
      degree: "BSS in Economics",
      institution: "Ananda Mohon University College",
      duration: "2014 - 2018"
    },

  ]
};

const skills = {
  title: "My Skills",
  description: "Combining problem-solving skills with modern tools like React.js, Next.js, Tailwind CSS, and JavaScript, I enjoy creating efficient, scalable, and visually appealing web solutions that deliver real results.",

  skillList: [
    {
      icon: <FaHtml5 color="#E34F26" />,
      name: "HTML5",
      level: 95,
      color: "#E34F26"
    },
    {
      icon: <FaCss3 color="#1572B6" />,
      name: "CSS3",
      level: 90,
      color: "#1572B6"
    },
    {
      icon: <SiTailwindcss color="#38BDF8" />,
      name: "TailwindCSS",
      level: 92,
      color: "#38BDF8"
    },
    {
      icon: <FaJs color="#F7DF1E" />,
      name: "Javascript",
      level: 80,
      color: "#F7DF1E"
    },
    {
      icon: <FaReact color="#61DBFB" />,
      name: "React",
      level: 90,
      color: "#61DBFB"
    },

    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next",
      level: 85,
      color: "#000000"
    },
    {
      icon: <FaGithub color="#FF7F50" />,
      name: "Github",
      level: 80,
      color: "#FF7F50"
    },
  ]
};
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mt-6 xl:mt-12">
        <Tabs defaultValue="education" className="flex flex-col justify-center xl:flex-row w-full gap-8">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            < TabsTrigger value="education">Education</ TabsTrigger>
            < TabsTrigger value="skills">Skills</ TabsTrigger>
            < TabsTrigger value="about">About me</ TabsTrigger>
          </TabsList >
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className={`text-[20px] text-white/60 mx-auto xl:mx-0`}>
                  {education.description}
                </p>
              </div>
              <ScrollArea className="h-[500px] mt-8">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                  {education.items.map((item, index) => {
                    return <li key={index} className="bg-[#0e2a48] w-full rounded-xl flex flex-col justify-center items-center py-6 px-10  xl:items-start gap-1 xl:mx-0">
                      <span className="text-teal-500 text-[25px]">{item.duration}</span>
                      <h3 className="text-[27px]">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></span>
                        <p className="text-[20px] text-white/70 ">{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="text-[22px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ScrollArea className="h-[400px] overflow-x-auto xl:overflow-hidden mt-6">
                <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {skills.skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * index, duration: 0.4 } }}
                      whileHover={{
                        scale: 1.05,
                        x: [0, -2, 2, -2, 2, 0],
                        transition: { duration: 0.4 }
                      }}
                      className="bg-[#0e2a48] rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300"
                    >

                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="text-6xl cursor-pointer">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#1f1f27] text-white rounded-md px-3 py-1 text-sm">
                            <p>{skill.name} - {skill.level}%</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <div className="flex justify-between w-full">
                        <h4 className="text-[20px] font-medium text-white/80">{skill.name}</h4>
                        <h3 className="text-[18px] font-medium text-white/70">{skill.level}%</h3>
                      </div>

                      <div className="w-full bg-[#2c2c35] rounded-full h-2 mt-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            transition: { duration: 1.2, ease: "easeIn" },
                          }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center items-baseline xl:text-left">
              <div className="flex flex-col gap-8 xl:gap-10">

                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                <p className="text-[20px] text-white/70 leading-relaxed mx-auto xl:mx-0">
                  {about.description}
                </p>


                <ul className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-20  mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row sm:items-center md:justify-start gap-20 xl:gap-4"
                    >
                      <span className="text-[22px] text-white/60">{item.fieldName}</span>
                      <span className="text-[22px] font-medium text-white/90">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+8801733902327",
  },

  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "+8801639255302",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mdantor383800@gamil.com",
  },
];

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#0d2e4e] rounded-xl">
              <h3 className="text-4xl text-teal-500">Let's work together</h3>
              <p className="text-white/60 text-[18px]">Have a project in mind or want to collaborate? I'm currently available for freelance work and exciting opportunities. Reach out—I'd love to hear from you!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Firstname" className=" bg-[#071e36] placeholder:text-[18px]" />
                <Input type="lastname" placeholder="Lastname"
                  className="bg-[#071e36] placeholder:text-[18px]" />
                <Input type="email" placeholder="Email address"
                  className="bg-[#071e36] placeholder:text-[18px]" />
                <Input type="phone" placeholder="Phone number"
                  className="bg-[#071e36] placeholder:text-[18px]" />
              </div>
              <Select>
                <SelectTrigger className="bg-[#071e36] w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-[#0e2e50] border border-[#0e2e50]">
                    <SelectLabel className="text-[14px] text-white/70">services</SelectLabel>
                    <SelectItem value="web" className="text-[16px]">Web Development</SelectItem>
                    <SelectItem value="ui" className="text-[16px]">UI Design</SelectItem>
                    <SelectItem value="seo" className="text-[16px]">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="bg-[#071e36] h-[200px] placeholder:text-[18px]"
                placeholder="Type your message here" />
              <Button size="md" className="text-[16px] max-w-40 border border-white/20 hover:border-none hover:text-white/80">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center order-1 xl:justify-start xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-[40px]">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#0d2e4e] text-teal-500 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-[20px]">{item.title}</p>
                    <h3 className="text-[22px]">{item.description}</h3>
                  </div>

                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
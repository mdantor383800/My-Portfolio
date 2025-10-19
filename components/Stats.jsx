"use client"
import CountUp from "react-countup"

const stats = [
  { num: 1, text: "Years of experience" },
  { num: 4, text: "Projects completed" },
  { num: 7, text: "Technologies mastered" },
  { num: 200, text: "Code commits" },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0">
      <div className="container mx-auto">
        <div className="
          grid 
          grid-cols-2          
          lg:flex
          justify-center 
          lg:justify-between 
          gap-6 lg:gap-12 xl:gap-16 
          max-w-[80vw] mx-auto xl:max-w-none
        ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 lg:gap-4 w-full"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[120px]" : "max-w-[180px]"
                } leading-snug text-white/80 text-[20px] xl:text-2xl`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

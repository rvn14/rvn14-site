"use client"
import  { useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Experience = () => {

  const [selected, setselected] = useState(null)
  const data = [
    
    
    {
        year : "2022",
        until: "2023",
        title: "STACKNET",
        description: "Joined as a full-stack developer for a startup.",
        hidden: "Just for fun and experience.",
        
    },
    {
      year : "2022",
      until: "ongoing",
      title: "UNIVERSITY OF KELANIYA",
      description: "Bachelor of Science in Computer Science (Hons.) Degree.",
      hidden: "Still an undergraduate student.",
    },
    {
      year : "2017",
      until: "2021",
      title: "RITS",
      description: "Member of the Richmond College IT Society",
      hidden: "Where it all started with CS.",
    },
    {
      year : "2008",
      until: "2021",
      title: "RICHMOND COLLEGE GALLE",
      description: "Completed GCE. A/Ls in Maths Stream.",
      hidden: "The beginning of a journey.",
    },
    
]


    

  return (
   
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2}}
      transition={{ duration: 0.8, ease: "easeOut" }} 
    className="exp container relative flex bg-[#0B0C0E] w-full min-h-144 rounded-xl overflow-clip select-none">
      <div className='w-full z-2 absolute'>

      <div className='exp flex flex-col justify-center w-full h-full text-lavender-100 '>
          {data.map((item, index) => (
            <div className='flex items-center justify-between h-36 px-8 md:px-16 border-b-[1px] border-b-lavender-100/10 last:border-b-0' key={index}
            onMouseOver={() => setselected(index)}
              onMouseLeave={() => setselected(null)}
            >
              <div className='flex flex-col items-start justify-center'>
                <div className='exp-year text-4xl md:text-5xl pr-4 font-outfit font-extrabold'>{item.year}</div>
                <div className='exp-until text-xs md:text-base font-outfit font-light'>{item.until}</div>
              </div>
              <div className='text-right flex flex-col items-end justify-center'>
                <div className='text-2xl md:text-3xl font-outfit font-black '
                  
                >{item.title}
                </div>
                <div className='exp-description text-xs md:text-base font-poppins font-light text-lavender-100/50'>{item.description}</div>
                </div>
            </div>
          ))}
        </div>

        <div className='exp flex flex-col justify-center w-full h-full descriptions text-[#0B0C0E] '>
          {data.map((item, index) => (
            <div className='flex items-center justify-between h-36 px-8 md:px-16 bg-lavender-500 description border-b-2 border-b-lavender-500 last:border-b-0' key={index}
            style={{clipPath: selected === index ? "inset(0 0 0)" : "inset(50% 0 50%"}}
            onMouseOver={() => setselected(index)}
                onMouseLeave={() => setselected(null)}
            >
              <div className='flex flex-col items-start justify-center'>
                <div className='exp-year text-4xl md:text-5xl pr-4 font-outfit font-extrabold'>{item.year}</div>
                <div className='exp-until text-xs md:text-base font-outfit font-light'>{item.until}</div>
              </div>
              <div className='text-right flex flex-col items-end'>
              <div className='text-2xl md:text-3xl font-outfit font-black'
                
              >{item.title}
              </div>
              <div className='exp-description text-m font-poppins font-light '>{item.hidden}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </motion.div>
  )
}

export default Experience
"use client"
import About from "@/components/About";
import AnimatedTitle from "@/components/AnimatedTitle";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import LoopText from "@/components/LoopText";
import Projects from "@/components/Projects";
import ShinyText from "@/components/ShinyText";
import Waves from "@/components/Waves";
import { Element } from "react-scroll";
import Image from "next/image";
import AnimatedIntro from "@/components/AnimatedIntro";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

const imageRef = useRef(null);
const imageContRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageContRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      scale: 1.15,
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <main className="w-full min-h-dvh bg-black">
      {/* HERO SECTION */}
      <Element name="home" className="relative h-dvh flex flex-col items-center justify-center overflow-hidden">
        
        <video
          src="/video/video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover object-bottom w-full  h-dvh scale-103 z-0 mix-blend-screen"
        />

        {/* Waves Overlay */}
        <div className="absolute w-full inset-0 z-1 opacity-5 pointer-events-none">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="font-outfit  font-extrabold text-[60px] sm:text-[64px] md:text-[96px] lg:text-[128px] text-white z-10 flex flex-col items-center justify-center leading-[0.8] px-2 sm:px-0 select-none mt-10 md:-mt-10 mix-blend-hard-light w-full h-fit">
          <p className="text-lavender-200 bg-gradient-to-r from-transparent via-lavender-100/10 to-transparent tracking-widest z-10 text-center text-xs md:text-base font-light mt-4 mb-4 py-1 px-3 shadow-lg backdrop-blur-xs rounded-4xl ">
            “Turning creative ideas into digital experiences.”
          </p>
          <h1 className="bg-gradient-to-r from-transparent via-lavender-300 to-transparent bg-clip-text text-transparent backdrop-blur-[2px]">
            IMAGINE
          </h1>
          <h1 className="bg-gradient-to-r from-lavender-400/30 via-lavender-200 to-lavender-400/30 bg-clip-text text-transparent backdrop-blur-[2px]">
            DESIGN
          </h1>
          <h1 className="bg-gradient-to-r from-transparent via-lavender-300 to-transparent bg-clip-text text-transparent backdrop-blur-[2px]">
            {'<DEVELOP/>'}
          </h1>
          
        </div>
      </Element>

      {/* ABOUT/INFO SECTION */}
      <section  className="flex flex-col items-center text-lavender-100 relative px-2 md:px-32 pb-6">


        {/* --- MAIN CARD --- */}
        <div className="w-full max-w-6xl  min-h-100 bg-[#0B0C0E] md:rounded-2xl z-10  md:shadow-[0px_-5px_40px_6px_rgba(204,182,247,0.25)] flex flex-col items-center px-2 pt-2 md:p-4 relative">
          <div className="absolute -bottom-8 w-screen h-2/3 bg-gradient-to-t from-black via-black to-transparent pointer-events-none z-10"></div>
          <div className="z-10 w-full flex items-center text-center justify-center mb-2 md:mb-4 select-none">
            <ShinyText
              text="Welcome to My Portfolio!"
              disabled={false}
              speed={5}
              className="font-general text-xs md:text-sm uppercase md:text-[12px] text-center"
            />

          </div>
          <div ref={imageContRef} className="flex flex-col items-center inset-0 z-10 w-full rounded-2xl md:relative">
            <div className="flex flex-col items-center justify-center rounded-xl overflow-hidden z-10">
              <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black via-black to-transparent pointer-events-none z-10"></div>
              <Image ref={imageRef}
                  src="/images/aboutbg2.jpg"
                  alt=""
                  width={3000}
                  height={1500}
                  className="scale-102 w-full h-auto"
                  priority
                />
              <div className="absolute bottom-0 z-30 flex flex-col items-center justify-center w-full">
                <AnimatedTitle
                  title="<b>DIGIT</b>AL <b>DES</b>IGNER<br />A<b>N</b>D CR<b>E</b>A<b>T</b>IVE D<b>E</b>V<b>E</b>L<b>OPER</b>"
                  containerClass="mt-2 text-lavender-100! font-light text-center text-3xl md:text-7xl"
                />
                <AnimatedIntro/>
              </div>
            </div>
          </div>
        </div>

        <div  className="container mx-auto w-full my-8 pt-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center font-outfit text-lavender-100 uppercase">
            {/* Card 1 */}
            <div className="bg-[#0B0C0E] p-4 sm:p-6 w-full  h-auto rounded-2xl shadow-md flex flex-col items-center ">
              <div className="w-full aspect-[6/5] rounded-xl overflow-hidden mb-6">
                <Image unoptimized src="/images/gif1.gif" alt="" width={400} height={333} className="w-full h-full object-cover" />
              </div>
              <LoopText text="Creative" className="text-3xl tracking-widest font-semibold mt-2 text-center"/>
              <LoopText text="Designer" className="text-2xl tracking-widest font-semibold text-center" stagger={3}/>
            </div>
            {/* Card 2 */}
            <div className="bg-[#0B0C0E] p-4 sm:p-6 w-full  h-auto rounded-2xl shadow-md flex flex-col items-center ">
              <div className="w-full aspect-[6/5] rounded-xl overflow-hidden mb-6">
                <Image unoptimized src="/images/gif2.gif" alt="" width={400} height={333} className="w-full h-full object-cover" />
              </div>
              <LoopText text="Analytical" className="text-3xl tracking-widest font-semibold mt-2 text-center"/>
              <LoopText text="Thinker" className="text-2xl tracking-widest font-semibold text-center" stagger={3}/>
            </div>
            {/* Card 3 */}
            <div className="bg-[#0B0C0E] p-4 sm:p-6 w-full  h-auto rounded-2xl shadow-md flex flex-col items-center ">
              <div className="w-full aspect-[6/5] rounded-xl overflow-hidden mb-6">
                <Image unoptimized src="/images/gif3.gif" alt="" width={400} height={333} className="w-full h-full object-cover" />
              </div>
              <LoopText text="Fullstack" className="text-3xl tracking-widest font-semibold mt-2 text-center"/>
              <LoopText text="Developer" className="text-2xl tracking-widest font-semibold text-center" stagger={3}/>
            </div>
          </motion.div>
        </div>

        <div className="container w-full  mx-auto mb-8 flex flex-col items-center">
          <ShinyText
            text="What shaped me"
            disabled={false}
            speed={5}
            className="font-general text-xs md:text-sm uppercase md:text-[12px] text-center mb-8"
          />
          <Experience />
        </div>
      </section>

      <section className="md:px-30">
        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </section>
    </main>
  );
};

export default Home;

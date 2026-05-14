"use client";

import { motion } from "framer-motion";
import { FaImage, FaMedal, FaTrophy } from "react-icons/fa6";
import ShinyText from "./ShinyText";
import { image } from "framer-motion/client";
import Image from "next/image";

const achievements = [
  {
    title: (
      <>
        TE<b>C</b>H T<b>RI</b>ATH<b>L</b>ON
      </>
    ),
    event: "Tech-Triathlon 2025 - Rootcode",
    result: "2nd Runners Up",
    team: "Team Vertex",
    type: "Hackathon",
    description:
      "Became 2nd runners up with Team Vertex after building, refining, and pitching a complete solution through a high-pressure hackathon journey.",
    icon: FaTrophy,
    image: "/images/tri.jpg",
  },
  {
    title: (
      <>
        I<b>X</b>25
      </>
    ),
    event: "Designathon - IEEE of IIT",
    result: "Silver Award",
    team: "Team Vertex",
    type: "AR Challenge",
    description:
      "Won silver at IX25 while exploring the World of AR with Team Vertex, turning shared ideas into a focused prototype and final presentation.",
    icon: FaMedal,
    image: "/images/IX.jpg",
  },
];

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;
  const isRightAligned = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.08 }}
      className="relative grid gap-5 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8"
    >
      <div className="relative hidden md:block">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
        <div className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-full border border-lavender-200/20 bg-black text-lavender-300 shadow-[0_0_30px_rgba(153,99,239,0.26)]">
          <Icon className="text-2xl" />
        </div>
        <p className="mt-5 text-center font-general text-xs uppercase tracking-[0.35em] text-lavender-100/35">
          0{index + 1}
        </p>
      </div>

      <div
        className={`group relative overflow-hidden rounded-md border-hsla bg-charcoal ${
          isRightAligned ? "md:mt-20" : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lavender-300/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(153,99,239,0.16),transparent_32%),repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_34px)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        <div className={`relative grid gap-0 ${
            isRightAligned
              ? "md:grid-cols-[minmax(0,1fr)_minmax(0,0.74fr)]"
              : "md:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]"
          }`}>
          <div
            className={`relative min-h-72 overflow-hidden border-b border-white/10 bg-black/55 md:border-b-0 ${
              isRightAligned ? "md:order-2 md:border-l" : "md:border-r"
            } border-white/10`}
          >
            <div className="absolute inset-5 border border-dashed border-lavender-200/20" />
            <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-lavender-300/55" />
            <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-lavender-200/45" />

            <div className="relative flex min-h-72 flex-col items-center justify-center gap-4 px-8 py-8 text-center">
              <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={600}
                    height={400}
                    className="object-cover object-center opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
            </div>
          </div>

          <div className="flex min-h-72 flex-col justify-between gap-10 p-6 text-lavender-100 md:p-8">
            <div>

              <h3 className="bento-title special-font max-w-3xl text-lavender-100">
                {achievement.title}
              </h3>
              <p className="mt-4 font-general text-sm uppercase tracking-[0.28em] text-lavender-100/50">
                {achievement.event}
              </p>
              <ShinyText className="mt-7 max-w-xl font-general text-sm leading-6 text-lavender-100/70 md:text-base" text={achievement.description}>
              </ShinyText>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/10 pt-5">
              <div>
                <p className="font-general text-xs uppercase tracking-[0.26em] text-lavender-100/40">
                  Team
                </p>
                <p className="mt-2 font-general text-sm uppercase tracking-[0.18em] text-lavender-100">
                  {achievement.team}
                </p>
              </div>
              <Icon className="text-4xl text-lavender-300/80" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Achievements = () => {
  return (
    <section className="relative w-full bg-black pb-16 pt-8">
      <div className="container mx-auto px-2 md:px-0">
        <div className="px-20 pb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-zentry special-font text-4xl text-lavender-100 md:text-9xl"
          >
            A<b>C</b>HIEVEMENTS
          </motion.p>

        </div>

        <div className="space-y-10">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.event}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

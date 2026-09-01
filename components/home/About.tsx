"use client";

import { motion } from "framer-motion";

const animationEase = [0.16, 0.8, 0.2, 1] as const;

export default function About() {
  const animationDuration = 0.85;

  return (
    <section className="about section-screen">
      {/* BACKGROUND POWER RUSH */}
      <div className="about-ghost">
        POWER
        <br />
        RUSH
      </div>

      <div className="about-inner">
        {/* ABOUT US */}
        <motion.div
          className="
    font-dm-mono
    !text-[38px]
    !font-medium
    !leading-none
    !tracking-[0.02em]
    !text-[#888888]
    mb-[34px]
  "
          initial={{
            opacity: 0,
            y: -120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.45,
          }}
          transition={{
            duration: animationDuration,
            ease: animationEase,
          }}
        >
          ABOUT US
        </motion.div>

        {/* H2 */}
        <motion.h2
          className="
    font-barlow-condensed
    text-[31vw]
    font-normal
    leading-[1.25]
    tracking-[0.01em]
  "
          initial={{
            opacity: 0,
            x: -220,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.45,
          }}
          transition={{
            duration: animationDuration,
            ease: animationEase,
          }}
        >
          WE’RE FOCUSED ON CREATING PERFORMANCE-DRIVEN PRODUCTS THAT FIT INTO
          REAL TRAINING, REAL ROUTINES, AND REAL GOALS. FROM INTENSE GYM
          SESSIONS TO THE FINAL REP, OUR FORMULAS ARE DESIGNED FOR PEOPLE WHO
          SHOW UP, PUT IN THE WORK, AND KEEP PUSHING WHEN THINGS GET DIFFICULT.
        </motion.h2>

        {/* READ MORE
            BOTTOM → CENTER
        */}
        <motion.button
          className="
    relative
  mx-auto
  mt-[55px]
  flex
  h-[52px]
  w-[220px]
  items-center
  justify-center
  bg-[#f4f4f4]
  px-0
  text-[22px]
  font-normal
  tracking-[0.08em]
  text-[#111]
  font-tactic-reg
  "
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.45,
          }}
          transition={{
            duration: animationDuration,
            ease: animationEase,
          }}
        >
          <i
            className="
    absolute
    left-[-58px]
    top-0
    h-[52px]
    w-[52px]
    border
    border-white
    bg-black
    p-0
    font-sans
    text-[38px]
    font-normal
    not-italic
    leading-none
    text-white
  "
          >
            <span
              className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-[68%]
    "
            >
              →
            </span>
          </i>
          READ MORE
        </motion.button>
      </div>
    </section>
  );
}


"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PowerRushProductShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <section
  ref={sectionRef}
  className="
    relative
    isolate
    w-full
    overflow-hidden
    bg-black

    h-[540px]

    min-[380px]:h-[570px]

    min-[480px]:h-[600px]

    sm:h-[650px]

    md:h-[750px]

    lg:h-[850px]

    xl:h-[950px]

    2xl:h-[1050px]
  "
>
      {/* =====================================================
          BLACK BASE
      ====================================================== */}

      {/* <div className="absolute inset-0 z-0 bg-black" /> */}

      {/* =====================================================
          ROCK BACKGROUND
      ====================================================== */}

  <img
  src="/images/Frame1168.png"
  alt=""
  className="
    absolute
    inset-0
    z-[1]
    w-full
    h-full
    object-cover
    object-center
    select-none
  "
/>

      {/* =====================================================
          CENTER POWER RUSH BOX

          ANIMATION VALUES UNCHANGED
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2

          top-[20%]

          z-[10]
          -translate-x-1/2

          min-[380px]:top-[20%]

          min-[480px]:top-[19%]

          sm:top-[18%]

          md:top-[17%]

          lg:top-[16.5%]
        "
        initial={{
          opacity: 0,
          y: 550,
          scale: 0.82,
          rotate: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }
            : {
                opacity: 0,
                y: 550,
                scale: 0.82,
                rotate: 0,
              }
        }
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/prsticks.png"
          alt="Power Rush box"
          className="
            block
            h-auto
            w-[285px]
            max-w-[72vw]
            object-contain
            select-none

            min-[380px]:w-[310px]
            min-[380px]:max-w-[70vw]

            min-[480px]:w-[340px]
            min-[480px]:max-w-[68vw]

            sm:w-[400px]
            sm:max-w-[62vw]

            md:w-[480px]
            md:max-w-[58vw]

            lg:w-[560px]
            lg:max-w-[56vw]

            xl:w-[680px]
            xl:max-w-none

            2xl:w-[720px]
          "
        />
      </motion.div>

      {/* =====================================================
          SMALL POWER RUSH STICK

          RESPONSIVE POSITION
          ANIMATION VALUES UNCHANGED
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-[5%]
          top-[27%]
          z-[11]

          min-[380px]:left-[6%]
          min-[380px]:top-[27%]

          min-[480px]:left-[8%]
          min-[480px]:top-[26%]

          sm:left-[12%]
          sm:top-[25%]

          md:left-[17%]
          md:top-[23%]

          lg:left-[24%]
          lg:top-[20%]

          xl:left-[28.5%]
          xl:top-[19%]
        "
        initial={{
          opacity: 0,
          x: -180,
          y: 180,
          scale: 0.75,
          rotate: -10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 1,
              }
            : {
                opacity: 0,
                x: -180,
                y: 180,
                scale: 0.75,
                rotate: -10,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/powoe 1.png"
          alt="Power Rush stick"
          className="
            block
            h-auto
            w-[110px]
            max-w-[28vw]
            object-contain
            select-none

            min-[380px]:w-[120px]

            min-[480px]:w-[135px]

            sm:w-[185px]

            md:w-[180px]

            lg:w-[210px]

            xl:w-[230px]

            2xl:w-[250px]
          "
        />
      </motion.div>

      {/* =====================================================
          RIGHT FOREGROUND ROCK

          CLIP PATH PRESERVED
      ====================================================== */}

   

      {/* =====================================================
          BOTTOM FOREGROUND ROCKS

          CLIP PATH PRESERVED
      ====================================================== */}


      {/* =====================================================
          EXTRA BOTTOM BLEND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[22]

          h-[12%]

          bg-gradient-to-b
          from-transparent
          via-black/50
          to-black

          min-[380px]:h-[13%]

          min-[480px]:h-[14%]

          sm:h-[15%]

          md:h-[16%]

          lg:h-[18%]
        "
      />
    </section>
  );
}

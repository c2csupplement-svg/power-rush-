
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
        min-h-[100dvh]
        h-[100dvh]
        w-full
        overflow-hidden
        bg-black

        min-[380px]:min-h-[540px]
        min-[480px]:min-h-[570px]

        sm:min-h-[600px]

        md:min-h-[650px]

        lg:min-h-[680px]

        xl:min-h-[700px]
      "
    >
      {/* =====================================================
          BLACK BASE
      ====================================================== */}

      <div className="absolute inset-0 z-0 bg-black" />

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
          h-full
          w-full
          object-cover
          object-center
          select-none

          max-[600px]:object-[center_center]
        "
      />

      {/* =====================================================
          BOTTOM BLACK BLEND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]

          h-[28%]

          bg-gradient-to-b
          from-transparent
          via-black/65
          to-black

          min-[380px]:h-[30%]

          min-[480px]:h-[32%]

          sm:h-[34%]

          md:h-[36%]

          lg:h-[38%]
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

            sm:w-[155px]

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

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[20]
          overflow-hidden
        "
      >
        <img
          src="/images/Frame1168.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            select-none
          "
          style={{
            clipPath:
              "polygon(74% 7%, 80% 4%, 86% 2%, 92% 0%, 100% 0%, 100% 100%, 54% 100%, 55% 82%, 58% 72%, 61% 63%, 64% 54%, 67% 45%, 70% 35%, 72% 25%, 73% 16%)",
          }}
        />
      </div>

      {/* =====================================================
          BOTTOM FOREGROUND ROCKS

          CLIP PATH PRESERVED
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[21]
          overflow-hidden
        "
      >
        <img
          src="/images/Frame1168.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            select-none
          "
          style={{
            clipPath:
              "polygon(0% 59%, 7% 58%, 13% 58%, 19% 59%, 24% 63%, 27% 70%, 30% 78%, 34% 84%, 38% 86%, 44% 84%, 49% 82%, 54% 83%, 59% 87%, 63% 93%, 67% 100%, 0% 100%)",
          }}
        />
      </div>

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

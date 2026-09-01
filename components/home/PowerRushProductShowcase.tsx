"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PowerRushProductShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        h-screen
        min-h-[700px]
        w-full
        overflow-hidden
        bg-black
      "
    >

      {/* =====================================================
          1. BLACK BASE
      ===================================================== */}

      <div className="absolute inset-0 z-0 bg-black" />


      {/* =====================================================
          2. FULL ROCK BACKGROUND
      ===================================================== */}

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
        "
      />


      {/* =====================================================
          3. MAIN POWER RUSH BOX

          Section viewport mein aate hi:
          Bottom/back se → final position

          Animation complete hone ke baad STOP
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[49%]
          top-[16.5%]
          z-[10]
          -translate-x-1/2
        "
        initial={{
          opacity: 0,
          y: 550,
          scale: 0.7,
          rotate: -3,
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
                scale: 0.7,
                rotate: -3,
              }
        }
        transition={{
          duration: 0.85,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <img
          src="/images/prsticks.png"
          alt="Power Rush box"
          className="
            block
            h-auto
            w-[520px]
            object-contain
            select-none
            xl:w-[680px]
            2xl:w-[720px]
          "
        />
      </motion.div>


      {/* =====================================================
          4. SMALL POWER RUSH STICK

          SAME TIME animation

          Bottom/back se → final position
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[28.5%]
          top-[19%]
          z-[11]
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
                rotate: -3,
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
          duration: 0.85,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <img
          src="/images/powoe 1.png"
          alt="Power Rush stick"
          className="
            block
            h-auto
            w-[170px]
            object-contain
            select-none
            xl:w-[230px]
            2xl:w-[250px]
          "
        />
      </motion.div>


      {/* =====================================================
          5. RIGHT FOREGROUND ROCK

          Product ke upar rock rahega
      ===================================================== */}

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
          6. BOTTOM FOREGROUND ROCKS

          Product ka bottom part rock ke peeche rahega
      ===================================================== */}

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

    </section>
  );
}
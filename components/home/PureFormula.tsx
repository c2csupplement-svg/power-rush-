
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PureFormulaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        min-h-[100dvh]
        w-full
        overflow-hidden
        bg-black
        px-6
        pt-[150px]
        pb-[120px]

        sm:px-6
        sm:pt-[155px]
        sm:pb-[120px]

        md:px-8
        md:pt-[165px]
        md:pb-[120px]

        lg:px-10
        lg:pt-[175px]
        lg:pb-[120px]

        xl:px-6
        xl:pt-[185px]
        xl:pb-[120px]
      "
    >
      {/* ================= HEADER ================= */}

      <motion.div
        className="
          relative
          z-30
          mx-auto
          flex
          max-w-[900px]
          flex-col
          items-center
          text-center
        "
        initial={{ opacity: 0, y: -45 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -45,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <h2
          className="
            whitespace-nowrap
            text-center
            font-tactic-exd
            text-[18px]
            font-normal
            uppercase
            leading-none
            tracking-[-0.02em]
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent

            sm:text-[23px]
            md:text-[30px]
            lg:text-[38px]
            xl:text-[44px]

            max-[600px]:text-[15px]
            max-[480px]:text-[13px]
            max-[380px]:text-[11px]
          "
        >
          PURE FORMULA PROVEN PERFORMANCE
        </h2>

        <p
          className="
            mt-[14px]
            w-full
            max-w-[570px]
            text-center
            font-sf
            text-[15px]
            font-[510]
            leading-[1.45]
            text-white

            sm:max-w-[600px]
            md:max-w-[650px]
            lg:max-w-[680px]

            max-[600px]:max-w-[500px]
            max-[600px]:text-[13px]
            max-[480px]:max-w-[390px]
            max-[480px]:text-[12px]
            max-[380px]:max-w-[340px]
            max-[380px]:text-[11px]
          "
        >
          Precision-crafted formulas. Premium ingredients. Performance you can
          feel.
          <br />
          No unnecessary fillers—just clean, effective nutrition built to
          support your goals and help you perform at your best.
        </p>
      </motion.div>

      {/* ================= MAIN AREA ================= */}

      <div
        className="
          relative
          mx-auto
          mt-[18px]
          h-[520px]
          w-full
          max-w-[1050px]

          sm:mt-[20px]
          sm:h-[540px]

          md:mt-[25px]
          md:h-[560px]

          lg:mt-[30px]
          lg:h-[590px]

          xl:h-[610px]

          max-[600px]:mt-[30px]
          max-[600px]:h-[500px]

          max-[480px]:mt-[35px]
          max-[480px]:h-[470px]

          max-[380px]:h-[440px]
        "
      >
        {/* =================================================
            TOP LEFT CONNECTOR
        ================================================= */}

        <svg
          className="
            pointer-events-none
            absolute
            left-[7%]
            top-[23%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible

            max-[900px]:left-[4%]
            max-[900px]:w-[34%]

            max-[600px]:left-[1%]
            max-[600px]:top-[24%]
            max-[600px]:h-[75px]
            max-[600px]:w-[31%]

            max-[480px]:top-[25%]
            max-[480px]:h-[65px]
            max-[480px]:w-[29%]

            max-[380px]:top-[26%]
            max-[380px]:h-[55px]
            max-[380px]:w-[27%]
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M360 68
              H105
              L45 18
              L56 23
              M45 18
              L51 30
            "
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* =================================================
            TOP RIGHT CONNECTOR
        ================================================= */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[23%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible

            max-[900px]:right-[4%]
            max-[900px]:w-[34%]

            max-[600px]:right-[1%]
            max-[600px]:top-[24%]
            max-[600px]:h-[75px]
            max-[600px]:w-[31%]

            max-[480px]:top-[25%]
            max-[480px]:h-[65px]
            max-[480px]:w-[29%]

            max-[380px]:top-[26%]
            max-[380px]:h-[55px]
            max-[380px]:w-[27%]
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M0 68
              H255
              L315 18
              L304 23
              M315 18
              L309 30
            "
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* =================================================
            BOTTOM LEFT CONNECTOR
        ================================================= */}

        <svg
          className="
            pointer-events-none
            absolute
            left-[7%]
            top-[61%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible

            max-[900px]:left-[4%]
            max-[900px]:w-[34%]

            max-[600px]:left-[1%]
            max-[600px]:top-[62%]
            max-[600px]:h-[75px]
            max-[600px]:w-[31%]

            max-[480px]:top-[63%]
            max-[480px]:h-[65px]
            max-[480px]:w-[29%]

            max-[380px]:top-[64%]
            max-[380px]:h-[55px]
            max-[380px]:w-[27%]
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M360 32
              H105
              L45 82
              L56 77
              M45 82
              L51 70
            "
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.1,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* =================================================
            BOTTOM RIGHT CONNECTOR
        ================================================= */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[61%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible

            max-[900px]:right-[4%]
            max-[900px]:w-[34%]

            max-[600px]:right-[1%]
            max-[600px]:top-[62%]
            max-[600px]:h-[75px]
            max-[600px]:w-[31%]

            max-[480px]:top-[63%]
            max-[480px]:h-[65px]
            max-[480px]:w-[29%]

            max-[380px]:top-[64%]
            max-[380px]:h-[55px]
            max-[380px]:w-[27%]
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M0 32
              H255
              L315 82
              L304 77
              M315 82
              L309 70
            "
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.1,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* =================================================
            PRODUCT
        ================================================= */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[66%]
            z-[15]
            -translate-x-1/2
            -translate-y-1/2
          "
          initial={{
            opacity: 0,
            y: 260,
            scale: 0.55,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 260,
            scale: isInView ? 1 : 0.55,
          }}
          transition={{
            duration: 1.35,
            delay: 0.45,
            ease: [0.16, 0.8, 0.2, 1],
          }}
        >
          <img
            src="/images/powoe2.png"
            alt="Power Rush"
            className="
              block
              h-auto
              w-[175px]
              object-contain
              select-none

              sm:w-[185px]
              md:w-[200px]
              lg:w-[220px]
              xl:w-[235px]

              max-[600px]:w-[155px]
              max-[480px]:w-[140px]
              max-[380px]:w-[125px]
            "
          />
        </motion.div>

        {/* =================================================
            LABEL 1
        ================================================= */}

        <motion.div
          className="
            absolute
            left-[2%]
            top-[20%]
            z-20
            font-tactic-exd
            text-[21.42px]
            font-normal
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap

            max-[900px]:text-[17px]

            max-[600px]:left-[2%]
            max-[600px]:top-[20%]
            max-[600px]:text-[13px]

            max-[480px]:left-[1%]
            max-[480px]:top-[21%]
            max-[480px]:text-[11px]

            max-[380px]:text-[9px]
          "
          initial={{ opacity: 0, x: -25 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -25,
          }}
          transition={{
            duration: 0.6,
            delay: 1.15,
            ease: "easeOut",
          }}
        >
          MICRONIZED FORMULA
        </motion.div>

        {/* =================================================
            LABEL 2
        ================================================= */}

        <motion.div
          className="
            absolute
            right-[1%]
            top-[20%]
            z-20
            font-tactic-exd
            text-[19.42px]
            font-normal
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap

            max-[900px]:text-[16px]

            max-[600px]:right-[2%]
            max-[600px]:top-[20%]
            max-[600px]:text-[12px]

            max-[480px]:right-[1%]
            max-[480px]:top-[21%]
            max-[480px]:text-[10px]

            max-[380px]:text-[8px]
          "
          initial={{ opacity: 0, x: 25 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 25,
          }}
          transition={{
            duration: 0.6,
            delay: 1.15,
            ease: "easeOut",
          }}
        >
          RESEARCH SPOTED
        </motion.div>

        {/* =================================================
            LABEL 3
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-[20%]
            left-[3%]
            z-20
            font-tactic-exd
            text-[21.42px]
            font-normal
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap

            max-[900px]:text-[17px]

            max-[600px]:left-[2%]
            max-[600px]:bottom-[20%]
            max-[600px]:text-[13px]

            max-[480px]:left-[1%]
            max-[480px]:bottom-[21%]
            max-[480px]:text-[11px]

            max-[380px]:text-[9px]
          "
          initial={{ opacity: 0, x: -25 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -25,
          }}
          transition={{
            duration: 0.6,
            delay: 1.25,
            ease: "easeOut",
          }}
        >
          99.9% PURE
        </motion.div>

        {/* =================================================
            LABEL 4
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-[20%]
            right-[1%]
            z-20
            font-tactic-exd
            text-[21.42px]
            font-normal
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap

            max-[900px]:text-[17px]

            max-[600px]:right-[2%]
            max-[600px]:bottom-[20%]
            max-[600px]:text-[13px]

            max-[480px]:right-[1%]
            max-[480px]:bottom-[21%]
            max-[480px]:text-[11px]

            max-[380px]:text-[9px]
          "
          initial={{ opacity: 0, x: 25 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 25,
          }}
          transition={{
            duration: 0.6,
            delay: 1.25,
            ease: "easeOut",
          }}
        >
          DAILY PERFORMANCE
        </motion.div>
      </div>
    </section>
  );
}


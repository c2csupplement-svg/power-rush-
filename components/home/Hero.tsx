"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* =====================================================
          LEFT ROCK
      ===================================================== */}

 <motion.div
  className="
    absolute
    left-0
    top-0
    z-[20]
    h-full
    w-[20vw]
    overflow-hidden
  "
>
  <motion.img
    src="/images/image415.png"
    alt=""
    className="
      absolute
      top-0
      left-0
      h-full
      w-full
      object-cover
      object-right
    "
    initial={{
      x: "-100%",
    }}
    animate={{
      x: "0%",
    }}
    transition={{
      duration: 2.8,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
  />
</motion.div>

      {/* =====================================================
          RIGHT ROCK
      ===================================================== */}

  <motion.div
  className="
    absolute
    right-0
    top-0
    z-[20]
    h-full
    w-[20vw]
    overflow-hidden
  "
>
  <motion.img
    src="/images/image415.png"
    alt=""
    className="
      absolute
      top-0
      right-0
      h-full
      w-full
      scale-x-[-1]
      object-cover
      object-left
    "
    initial={{
      x: "-100%",
    }}
    animate={{
      x: "0%",
    }}
    transition={{
      duration: 2.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
  />
</motion.div>

      {/* =====================================================
          LEFT DESCRIPTION
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[2.8%]
          top-[29%]
          z-[50]
          w-[190px]
          text-[13px]
          font-medium
          leading-[1.05]
          tracking-[-0.01em]
          text-white
          sm:w-[220px]
          sm:text-[14px]
          md:w-[250px]
          md:text-[15px]
          lg:w-[285px]
          lg:text-[17px]
        "
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.9,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        Power Rush is built for those who
        <br />
        take their training seriously. Each
        <br />
        single-serving stick combines
        <br />
        Creatine Monohydrate, Caffeine,
        <br />
        and Taurine
      </motion.div>


      {/* =====================================================
          RIGHT DESCRIPTION
      ===================================================== */}

      <motion.div
        className="
          absolute
          right-[2.8%]
          top-[65%]
          z-[50]
          w-[190px]
          text-right
          text-[13px]
          font-medium
          leading-[1.05]
          tracking-[-0.01em]
          text-white
          sm:w-[220px]
          sm:text-[14px]
          md:w-[250px]
          md:text-[15px]
          lg:w-[285px]
          lg:text-[17px]
        "
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.25,
          duration: 0.9,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        Power Rush is built for those who
        <br />
        take their training seriously. Each
        <br />
        single-serving stick combines
        <br />
        Creatine Monohydrate, Caffeine,
        <br />
        and Taurine
      </motion.div>


      {/* =====================================================
          CENTER MARQUEE
          ROCK KE NICHE
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-0
          top-1/2
          z-[5]
          w-full
          -translate-y-1/2
          overflow-hidden
          pointer-events-none
        "
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <motion.div
          className="
            flex
            w-max
            whitespace-nowrap
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="
              shrink-0
              px-4
              text-[clamp(70px,8vw,140px)]
              font-black
              uppercase
              leading-none
              tracking-[-0.07em]
              text-white
            "
          >
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
          </span>

          <span
            className="
              shrink-0
              px-4
              text-[clamp(70px,8vw,140px)]
              font-black
              uppercase
              leading-none
              tracking-[-0.07em]
              text-white
            "
          >
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
            POWER RUSH&nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </motion.div>


      {/* =====================================================
          CENTER PRODUCT
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          z-[30]
          -translate-x-1/2
          -translate-y-1/2
        "
        initial={{
          opacity: 0,
          scale: 0.35,
          y: 130,
          rotate: -26,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: -12,
        }}
        transition={{
          delay: 0.65,
          duration: 1.15,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0, 6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/powoe1.png"
            alt="Power Rush product"
            className="
              h-[390px]
              w-[215px]
              object-contain
              sm:h-[420px]
              sm:w-[235px]
              md:h-[480px]
              md:w-[270px]
              lg:h-[560px]
              lg:w-[350px]
            "
          />
        </motion.div>
      </motion.div>


      {/* =====================================================
          LEFT STAT
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-[7%]
          left-[2.8%]
          z-[40]
          flex
          flex-col
          text-white
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
        }}
      >
        <b
          className="
            text-[14px]
            leading-none
            md:text-[17px]
          "
        >
          3G
        </b>

        <span
          className="
            text-[12px]
            tracking-wider
            md:text-[16px]
          "
        >
          CREATINE MONOHYDRATE
        </span>
      </motion.div>


      {/* =====================================================
          CENTER STAT
      ===================================================== */}

      <motion.div
       className="
  absolute
  left-[30px]
  top-0
  z-[10]
  h-full
  w-[19vw]
  min-w-[190px]
  max-w-[340px]
  overflow-hidden
"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.6,
        }}
      >
        <b
          className="
            text-[14px]
            leading-none
            md:text-[17px]
          "
        >
          125 MG
        </b>

        <span
          className="
            text-[12px]
            tracking-wider
            md:text-[16px]
          "
        >
          CAFFEINE
        </span>
      </motion.div>


      {/* =====================================================
          RIGHT STAT
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-[7%]
          right-[2.8%]
          z-[40]
          flex
          flex-col
          text-right
          text-white
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.7,
        }}
      >
        <b
          className="
            text-[14px]
            leading-none
            md:text-[17px]
          "
        >
          500MG
        </b>

        <span
          className="
            text-[12px]
            tracking-wider
            md:text-[16px]
          "
        >
          BETA-ALANINE
        </span>
      </motion.div>


      {/* =====================================================
          SCROLL
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-5
          left-1/2
          z-[50]
          -translate-x-1/2
          text-xs
          tracking-[0.3em]
          text-white
        "
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        SCROLL ↓
      </motion.div>

    </section>
  );
}
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
    w-[23vw]
    overflow-hidden
  "
      >
        <motion.img
          src="/images/image415.png"
          alt=""
          className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
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
    w-[23vw]
    overflow-hidden
  "
      >
        <motion.img
          src="/images/image415.png"
          alt=""
          className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
      scale-x-[-1]
    "
          initial={{
            x: "100%",
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
          LEFT DESCRIPTION
      ===================================================== */}

      <motion.div
        className="
    absolute
    left-[2.8%]
    top-[22%]
    z-[50]
    w-[190px]
    font-sf
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
    top-[60%]
    z-[50]
    w-[190px]
    text-right
    font-sf
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
          scale: 0.45,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
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
        font-tactic
        uppercase
        leading-none
        tracking-[0.01em]
        text-transparent
        bg-clip-text
        [-webkit-background-clip:text]
        [-webkit-text-fill-color:transparent]
        bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
      "
          >
            POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp; POWER
            RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp;
          </span>

          <span
            className="
        shrink-0
        px-4
        text-[clamp(70px,8vw,140px)]
        font-tactic
        uppercase
        leading-none
        tracking-[0.01em]
        text-transparent
        bg-clip-text
        [-webkit-background-clip:text]
        [-webkit-text-fill-color:transparent]
        bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
      "
          >
            POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp; POWER
            RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp;
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
    bottom-0
    z-[10]
    -translate-x-1/2
  "
        initial={{
          opacity: 0,
          scale: 0.72,
          y: 500,
          rotate: -26,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: -200,
          rotate: -12,
        }}
        transition={{
          delay: 0.65,
          duration: 0.85,
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
            src="/images/power1.png"
            alt="Power Rush product"
            className="
        h-[430px]
        w-[235px]
        object-contain
        sm:h-[460px]
        sm:w-[255px]
        md:h-[525px]
        md:w-[295px]
        lg:h-[610px]
        lg:w-[380px]
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
    bottom-[30px]
    left-1/2
    -translate-x-1/2
    z-[10]
    flex
    flex-col
    items-center
    justify-center
    whitespace-nowrap
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
    </section>
  );
}

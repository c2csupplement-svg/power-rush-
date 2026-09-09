"use client";

import { motion } from "framer-motion";

const animationEase = [0.16, 0.8, 0.2, 1] as const;

export default function About() {
  const animationDuration = 0.85;

  return (
    <section
      className="
        relative
        min-h-[100dvh]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/image423.png"
          alt=""
          className="
            h-full
            w-full
            select-none
            object-cover
            object-center
          "
        />

        {/* TOP BLACK BLEND */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[100px]
            w-full
            bg-gradient-to-b
            from-black
            via-black/70
            to-transparent

            sm:h-[120px]
            md:h-[145px]
            lg:h-[170px]
            xl:h-[180px]
            2xl:h-[200px]
          "
        />

        {/* BOTTOM BLACK BLEND */}
       <div
  className="
    absolute
    inset-0
    bg-black/50
    z-[1]
  "
/>

<div
  className="
    absolute
    bottom-0
    left-0
    h-[90px]
    w-full
    bg-gradient-to-t
    from-black
    via-black/40
    to-transparent
    z-[2]

    sm:h-[110px]
    md:h-[130px]
    lg:h-[150px]
  "
/>
      </div>

      {/* =====================================================
          ABOUT US
      ====================================================== */}
      <motion.div
        className="
          absolute
          left-0
          z-20
          w-full
          text-center
          font-dm-mono
          !font-medium
          !leading-none
          !tracking-[0.02em]
          !text-[#888888]

          /* PHONE */
          top-[15%]
          !text-[22px]

          /* SMALL PHONE */
          min-[380px]:top-[16%]
          min-[380px]:!text-[24px]

          /* TABLET */
          sm:top-[18%]
          sm:!text-[28px]

          /* iPAD */
          md:top-[20%]
          md:!text-[31px]

          /* LAPTOP */
          lg:top-[22%]
          lg:!text-[34px]

          /* DESKTOP */
          xl:top-[24%]
          xl:!text-[38px]

          /* LARGE DESKTOP */
          2xl:top-[24%]
          2xl:!text-[38px]
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

      {/* =====================================================
          MAIN DESCRIPTION
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          z-20
          flex
          w-full
          justify-center
          px-[16px]

          /* PHONE */
          top-[34%]

          /* SMALL PHONE */
          min-[380px]:top-[35%]

          /* TABLET */
          sm:top-[32%]
          sm:px-[30px]

          /* iPAD */
          md:top-[32%]
          md:px-[45px]

          /* LAPTOP */
          lg:top-[32%]
          lg:px-[60px]

          /* DESKTOP */
          xl:top-[32%]
          xl:px-[80px]

          /* LARGE DESKTOP */
          2xl:top-[32%]
          2xl:px-[100px]
        "
      >
        <motion.h2
          className="
            m-0
            w-full
            text-center
            font-[TacticSans-Med]
            !font-normal
            !tracking-[0.01em]

            /* ================= PHONE ================= */
            max-w-[350px]
            !text-[12px]
            !leading-[1.42]

            /* ================= SMALL PHONE ================= */
            min-[380px]:max-w-[370px]
            min-[380px]:!text-[13px]

            /* ================= TABLET ================= */
            sm:max-w-[600px]
            sm:!text-[14px]
            sm:!leading-[1.38]

            /* ================= iPAD ================= */
            md:max-w-[800px]
            md:!text-[16px]
            md:!leading-[1.32]

            /* ================= LAPTOP ================= */
            lg:max-w-[1000px]
            lg:!text-[18px]
            lg:!leading-[1.28]

            /* ================= DESKTOP ================= */
            xl:max-w-[1250px]
            xl:!text-[21px]
            xl:!leading-[1.25]

            /* ================= LARGE DESKTOP ================= */
            2xl:max-w-[1400px]
            2xl:!text-[21px]
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
          {/* MOBILE / TABLET NATURAL WRAP */}
          <span className="block">
            WE’RE FOCUSED ON CREATING PERFORMANCE-DRIVEN PRODUCTS THAT FIT
            INTO REAL
          </span>
           <span className="mt-[4px] block">
            TRAINING, REAL ROUTINES, AND REAL GOALS. FROM INTENSE GYM SESSIONS TO THE 
          </span>

          <span className="mt-[4px] block">
            FINAL REP, OUR FORMULAS ARE DESIGNED FOR PEOPLE WHO SHOW UP, PUT IN THE 
          </span>

          <span className="mt-[4px] block">
            WORK, AND KEEP PUSHING WHEN THINGS GET DIFFICULT.
          </span>
        </motion.h2>
      </div>

      {/* =====================================================
          READ MORE BUTTON
      ====================================================== */}
      <motion.button
        className="
          absolute
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          justify-center
          bg-[#f4f4f4]
          font-tactic-reg
          font-normal
          tracking-[0.08em]
          text-[#111]

          /* ================= PHONE ================= */
          top-[58%]
          h-[43px]
          w-[165px]
          !text-[15px]

          /* ================= SMALL PHONE ================= */
          min-[380px]:top-[59%]
          min-[380px]:h-[46px]
          min-[380px]:w-[180px]
          min-[380px]:!text-[16px]

          /* ================= TABLET ================= */
          sm:top-[57%]
          sm:h-[48px]
          sm:w-[195px]
          sm:!text-[18px]

          /* ================= iPAD ================= */
          md:top-[56%]
          md:h-[50px]
          md:w-[205px]
          md:!text-[20px]

          /* ================= LAPTOP ================= */
          lg:top-[55%]
          lg:h-[51px]
          lg:w-[215px]
          lg:!text-[21px]

          /* ================= DESKTOP ================= */
          xl:top-[54.5%]
          xl:h-[52px]
          xl:w-[220px]
          xl:!text-[22px]

          /* ================= LARGE DESKTOP ================= */
          2xl:top-[54.5%]
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
        {/* =================================================
            ARROW BOX
        ================================================== */}
        <i
          className="
            absolute
            top-0
            flex
            items-center
            justify-center
            border
            border-white
            bg-black
            p-0
            font-sans
            font-normal
            not-italic
            leading-none
            text-white

            /* PHONE */
            left-[-43px]
            h-[43px]
            w-[43px]
            !text-[28px]

            /* SMALL PHONE */
            min-[380px]:left-[-46px]
            min-[380px]:h-[46px]
            min-[380px]:w-[46px]
            min-[380px]:!text-[30px]

            /* TABLET */
            sm:left-[-48px]
            sm:h-[48px]
            sm:w-[48px]
            sm:!text-[32px]

            /* iPAD */
            md:left-[-50px]
            md:h-[50px]
            md:w-[50px]
            md:!text-[34px]

            /* LAPTOP */
            lg:left-[-52px]
            lg:h-[51px]
            lg:w-[51px]
            lg:!text-[35px]

            /* DESKTOP */
            xl:left-[-58px]
            xl:h-[52px]
            xl:w-[52px]
            xl:!text-[38px]
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
    </section>
  );
}
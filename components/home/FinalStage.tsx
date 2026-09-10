"use client";

import { motion } from "framer-motion";

export default function FinalStage() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          FOOTER BACKGROUND IMAGE
          ORIGINAL IMAGE RATIO MAINTAINED
          RESPONSIVE POSITIONING / SCALING ONLY
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          w-full
          overflow-visible
        "
      >
        <img
          src="/images/footer.png"
          alt=""
          className="
            block
            h-auto
            w-full
            max-w-none
            object-contain

            /* =================================================
               320px
            ================================================== */
            max-[374px]:w-[125%]
            max-[374px]:-ml-[12.5%]

            /* =================================================
               375px
            ================================================== */
            min-[375px]:w-[125%]
            min-[375px]:-ml-[12.5%]

            /* =================================================
               425px
            ================================================== */
            min-[425px]:w-[122%]
            min-[425px]:-ml-[11%]

            /* =================================================
               768px
            ================================================== */
            sm:w-[115%]
            sm:-ml-[7.5%]

            /* =================================================
               1024px
            ================================================== */
            md:w-[110%]
            md:-ml-[5%]

            /* =================================================
               1440px
            ================================================== */
            lg:w-full
            lg:ml-0

            /* =================================================
               LARGE DESKTOP
            ================================================== */
            xl:w-full
            xl:ml-0

            /* =================================================
               2560px / 4K
            ================================================== */
            2xl:w-full
            2xl:ml-0
          "
        />
      </div>

      {/* =====================================================
          TOP BLEND
          SAME VISUAL IDEA AS BOTTOM BLEND
          BENEFITS → FINAL STAGE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10

          h-[95px]

          bg-gradient-to-b
          from-black
          via-black/45
          to-transparent

          /* 375px */
          min-[375px]:h-[105px]

          /* 425px */
          min-[425px]:h-[120px]

          /* 768px */
          sm:h-[140px]

          /* 1024px */
          md:h-[165px]

          /* 1440px */
          lg:h-[190px]

          /* LARGE DESKTOP */
          xl:h-[220px]

          /* 2560px / 4K */
          2xl:h-[250px]
        "
      />

      {/* =====================================================
          EXTRA SOFT ENVIRONMENT TRANSITION
          KEEPS THE IMAGE FROM LOOKING PASTED
          WITHOUT REMOVING THE DARK FIGMA LOOK
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[9]

          h-[150px]

          bg-gradient-to-b
          from-black
          via-black/65
          to-transparent

          /* 375px */
          min-[375px]:h-[165px]

          /* 425px */
          min-[425px]:h-[180px]

          /* 768px */
          sm:h-[205px]

          /* 1024px */
          md:h-[240px]

          /* 1440px */
          lg:h-[275px]

          /* LARGE DESKTOP */
          xl:h-[310px]

          /* 2560px / 4K */
          2xl:h-[350px]
        "
      />

      {/* =====================================================
          BOTTOM BLEND
          SAME AS EXISTING DESIGN
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[55px]

          sm:h-[65px]
          md:h-[80px]
          lg:h-[100px]
          xl:h-[120px]
          2xl:h-[150px]

          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

      {/* =====================================================
          CENTER PRODUCT
          UNCHANGED
      ====================================================== */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[45%]
          z-20
          -translate-x-1/2
          -translate-y-1/2
        "
        initial={{
          opacity: 0,
          y: 180,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.img
          src="/images/powoe 1.png"
          alt="Power Rush"
          className="
            block
            w-[160px]
            max-w-[55vw]
            object-contain

            sm:w-[180px]
            md:w-[220px]
            lg:w-[260px]
            xl:w-[290px]
            2xl:w-[320px]
          "
          animate={{
            y: [-14, 14, -14],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
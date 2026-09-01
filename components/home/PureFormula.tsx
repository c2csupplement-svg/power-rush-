"use client";

import { motion } from "framer-motion";

export default function PureFormulaSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20">
      {/* ================= HEADER ================= */}

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center text-center">
        <h2
          className="
    relative
    z-20
    whitespace-nowrap
    text-center
    font-tactic
    text-[20px]
    font-medium
    uppercase
    leading-none
    tracking-[-0.02em]

    sm:text-[26px]
    md:text-[34px]
    lg:text-[42px]
    xl:text-[48px]
  "
          style={{
            background:
              "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PURE FORMULA PROVEN PERFORMANCE
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
            ease: [0.16, 0.8, 0.2, 1],
          }}
          className="
    relative
    z-20
    mx-auto
    mt-[18px]
    w-full
    max-w-[560px]
    text-center
    font-sf
    text-[9px]
    font-normal
    leading-[1.45]
    tracking-[0]
    text-white

    sm:max-w-[600px]
    sm:text-[10px]

    md:max-w-[650px]
    md:text-[11px]

    lg:max-w-[680px]
    lg:text-[12px]
  "
        >
          Precision-crafted formulas. Premium ingredients. Performance you can
          feel.
          <br />
          No unnecessary fillers—just clean, effective nutrition built to
          support your goals and help you perform at your best.
        </motion.p>
      </div>

      {/* ================= MAIN AREA ================= */}

      <div
        className="
          relative
          mx-auto
          mt-12
          h-[500px]
          w-full
          max-w-[1000px]
          md:mt-16
          lg:h-[560px]
        "
      >
        {/* ================= PRODUCT IMAGE ================= */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[58%]
            z-[10]
            -translate-x-1/2
            -translate-y-1/2
          "
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 0.8, 0.2, 1],
          }}
        >
          <img
            src="/images/powoe2.png"
            alt="Power Rush"
            className="
              block
              h-auto
              w-[170px]
              object-contain
              md:w-[200px]
              lg:w-[225px]
            "
          />
        </motion.div>

        {/* =====================================================
            TOP LEFT CONNECTOR
        ===================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            left-[7%]
            top-[25%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <path
            d="M360 70 H105 L45 28"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Image-side small connector */}
          <path
            d="M360 64 V76"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Outer end */}
          <path
            d="M45 28 L38 28 L43 34"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =====================================================
            TOP RIGHT CONNECTOR
        ===================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[25%]
            z-[5]
            h-[100px]
            w-[36%]
            overflow-visible
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 70 H255 L315 28"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Image-side small connector */}
          <path
            d="M0 64 V76"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Outer end */}
          <path
            d="M315 28 L322 28 L317 34"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =====================================================
            BOTTOM LEFT CONNECTOR
        ===================================================== */}

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
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <path
            d="M360 25 H105 L45 67"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Image-side small connector */}
          <path
            d="M360 19 V31"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Outer end */}
          <path
            d="M45 67 L38 67 L43 61"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =====================================================
            BOTTOM RIGHT CONNECTOR
        ===================================================== */}

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
          "
          viewBox="0 0 360 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 25 H255 L315 67"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Image-side small connector */}
          <path
            d="M0 19 V31"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Outer end */}
          <path
            d="M315 67 L322 67 L317 61"
            fill="none"
            stroke="#777"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* ================= LABELS ================= */}

        <div
          className="
            absolute
            left-[2%]
            top-[21%]
            z-20
            font-tactic
            text-[10px]
            uppercase
            md:text-[12px]
          "
          style={{
            background:
              "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MICRONIZED FORMULA
        </div>

        <div
          className="
            absolute
            right-[1%]
            top-[21%]
            z-20
            font-tactic
            text-[10px]
            uppercase
            md:text-[12px]
          "
          style={{
            background:
              "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RESEARCH SPOTED
        </div>

        <div
          className="
            absolute
            bottom-[23%]
            left-[3%]
            z-20
            font-tactic
            text-[10px]
            uppercase
            md:text-[12px]
          "
          style={{
            background:
              "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          99.9% PURE
        </div>

        <div
          className="
            absolute
            bottom-[23%]
            right-[1%]
            z-20
            font-tactic
            text-[10px]
            uppercase
            md:text-[12px]
          "
          style={{
            background:
              "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DAILY PERFORMANCE
        </div>
      </div>
    </section>
  );
}

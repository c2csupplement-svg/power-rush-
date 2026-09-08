"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BenefitCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        benefit-card
        !relative
        !box-border
        !border-[1px]
        !border-solid
        !border-[#353535]
        !w-full
        !min-w-0
      "
      animate={{ y: hover ? -5 : 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* =========================
          INNER CORNER SHAPES
      ========================== */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-[9px]
          z-[20]
          transition-opacity
          duration-200

          sm:inset-[11px]
          md:inset-[15px]

          ${hover ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* TOP LEFT */}
        <span
          className="
            absolute
            left-0
            top-0
            h-[20px]
            w-[20px]
            border-l-[2px]
            border-t-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        {/* TOP RIGHT */}
        <span
          className="
            absolute
            right-0
            top-0
            h-[20px]
            w-[20px]
            border-r-[2px]
            border-t-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        {/* BOTTOM LEFT */}
        <span
          className="
            absolute
            bottom-0
            left-0
            h-[20px]
            w-[20px]
            border-b-[2px]
            border-l-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        {/* BOTTOM RIGHT */}
        <span
          className="
            absolute
            bottom-0
            right-0
            h-[20px]
            w-[20px]
            border-b-[2px]
            border-r-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />
      </div>

      {/* =========================
          NUMBER
      ========================== */}
      <div
        className="
          benefit-number
          !text-[13px]

          sm:!text-[15px]

          md:!text-[17px]

          lg:!text-[18px]
        "
      >
        {number}
      </div>

      {/* =========================
          TITLE
      ========================== */}
      <h3
        className="
          !font-tactic-exd
          !text-[18px]
          !font-normal
          !uppercase
          !leading-[1]
          !tracking-[0%]
          !text-[#606060]

          sm:!text-[20px]

          md:!text-[23px]

          lg:!text-[25px]
        "
      >
        {title}
      </h3>

      {/* =========================
          DESCRIPTION
      ========================== */}
      <p
        className="
          !font-sf
          !text-[13px]
          !font-normal
          !leading-[115%]
          !tracking-[0%]
          !text-[#606060]

          sm:!text-[14px]

          md:!text-[16px]

          lg:!text-[18px]
          lg:!leading-[104%]
        "
      >
        {body}
      </p>
    </motion.article>
  );
}
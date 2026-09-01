"use client";

import { motion } from "framer-motion";

export default function MountainMarquee() {
  return (
    <section
      className="
    relative
    mt-8
    h-[260px]
    w-full
    overflow-hidden
    bg-black
    m-0
    p-0
  "
    >
      {/* MARQUEE TEXT — IMAGE KE PICHE */}
      <motion.div
        className="
    absolute
          left-0
          top-[42%]
          z-[1]
          flex
          w-max
          -translate-y-1/2
          whitespace-nowrap
  "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="
      shrink-0
            px-4
            font-tactic
            text-[134.81px]
            font-normal
            leading-[78%]
            tracking-[0%]
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
          "
        >
          POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH
        </span>

        <span
          className="
       shrink-0
            px-4
            font-tactic
            text-[134.81px]
            font-normal
            leading-[78%]
            tracking-[0%]
            uppercase
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            text-transparent
          "
        >
          POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH
        </span>
      </motion.div>

      {/* MOUNTAIN IMAGE — TEXT KE UPAR */}
      <img
        src="/images/mount.png"
        alt="Mountain texture"
        className="
    absolute
    bottom-0
    left-[-120px]
    z-[2]
    m-0
    block
    h-auto
    w-[calc(100%+120px)]
    max-w-none
  "
      />
    </section>
  );
}

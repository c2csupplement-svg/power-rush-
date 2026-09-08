
"use client";

import { motion } from "framer-motion";

export default function MountainMarquee() {
  return (
    <section
      className="
        relative
        mt-[120px]
        md:mt-[150px]
        lg:mt-[180px]
        xl:mt-[200px]
        h-[360px]
        md:h-[390px]
        lg:h-[420px]
        w-full
        overflow-x-clip
        overflow-y-visible
        bg-black
        p-0
        z-[30]
      "
    >
      {/* =========================
          MARQUEE TEXT
      ========================= */}
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
            font-tactic-exd
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
            rush-marquee-text
            shrink-0
            px-4
            font-tactic-exd
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

      {/* =========================
          MOUNTAIN
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          bottom-0
          z-[20]
          h-[300px]
          md:h-[330px]
          lg:h-[360px]
          w-full
          overflow-visible
        "
      >
        {/* SOLID BLACK MOUNTAIN SHAPE */}
        <div
          className="
            absolute
            left-[-120px]
            bottom-0
            z-[1]
            block
            h-auto
            w-[calc(100%+120px)]
            max-w-none
            bg-black
            [mask-image:url('/images/mount.png')]
            [mask-repeat:no-repeat]
            [mask-position:left_bottom]
            [mask-size:100%_auto]
            [-webkit-mask-image:url('/images/mount.png')]
            [-webkit-mask-repeat:no-repeat]
            [-webkit-mask-position:left_bottom]
            [-webkit-mask-size:100%_auto]
          "
        />

        {/* ACTUAL MOUNTAIN TEXTURE */}
        <img
          src="/images/mount.png"
          alt="Mountain texture"
          className="
            absolute
            left-[-120px]
            bottom-0
            z-[2]
            block
            h-auto
            w-[calc(100%+120px)]
            max-w-none
          "
        />

        {/* BOTTOM BLEND */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-1px]
            left-0
            z-[30]
            h-[170px]
            w-full
            bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.05)_12%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.72)_68%,rgba(0,0,0,0.94)_88%,#000_100%)]
            md:h-[190px]
            lg:h-[210px]
          "
        />
      </div>

      {/* EXTRA BLACK TRANSITION */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-[25]
          h-[90px]
          w-full
          bg-[linear-gradient(to_bottom,transparent_0%,#000_100%)]
        "
      />
    </section>
  );
}

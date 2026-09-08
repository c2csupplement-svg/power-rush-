
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DisciplineSection() {
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
      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            h-full
            w-full
          "
        >
          <Image
            src="/images/ag 1.png"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="
              object-contain
              object-center
            "
          />
        </div>
      </motion.div>

      {/* TOP NATURAL BLEND */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-[2]
          h-[100px]
          bg-gradient-to-b
          from-black
          via-black/70
          to-transparent

          min-[380px]:h-[115px]

          sm:h-[135px]

          md:h-[155px]

          lg:h-[180px]

          xl:h-[200px]

          2xl:h-[220px]
        "
      />

      {/* BOTTOM NATURAL BLEND */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-[2]
          h-[125px]
          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent

          min-[380px]:h-[145px]

          sm:h-[165px]

          md:h-[190px]

          lg:h-[220px]

          xl:h-[240px]

          2xl:h-[260px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100dvh]
          w-full
          max-w-[1500px]
          items-end
          px-[16px]
          pb-[45px]

          min-[380px]:px-[18px]
          min-[380px]:pb-[50px]

          min-[480px]:px-[22px]
          min-[480px]:pb-[55px]

          sm:px-[30px]
          sm:pb-[60px]

          md:px-[45px]
          md:pb-[70px]

          lg:px-[65px]
          lg:pb-[80px]

          xl:px-[80px]
          xl:pb-[90px]

          2xl:px-[100px]
          2xl:pb-[100px]
        "
      >
        {/* Future content can be placed here */}
      </div>
    </section>
  );
}

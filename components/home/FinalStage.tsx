"use client";

import { motion } from "framer-motion";
import {
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FinalStage() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: 'url("/images/footer.png")',
      }}
    >

      {/* =========================
          TOP NATURAL BLEND
          PREVIOUS SECTION → FOOTER
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[100]
          h-[220px]
          bg-gradient-to-b
          from-black
          via-black/45
          to-transparent
        "
      />

      {/* =========================
          CENTER PRODUCT
          ANIMATION SAME
      ========================== */}
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
            w-[200px]
            md:w-[250px]
            lg:w-[300px]
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
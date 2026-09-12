"use client";

import Link from "next/link";

import BlogPosts from "@/components/BlogPage/BlogPosts";
import FinalStage from "@/components/home/FinalStage";
import Footer from "@/components/home/Footer ";

export default function ReadMorePage() {
  return (
    <main 
    className="
    min-h-screen
    w-full
    overflow-hidden
    bg-black
    text-white
    pt-[90px]
    sm:pt-[95px]
    md:pt-[100px]
    lg:pt-[105px]

      ">

  {/* =====================================================
      TOP TSX COMPONENT - BELOW NAVBAR
  ====================================================== */}
  <div className="pt-[80px]">
    <BlogPosts />
  </div>

  {/* =====================================================
      HERO
  ====================================================== */}
  <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-20">

    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

    <div className="relative z-10 mx-auto w-full max-w-[1300px] text-center">

      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">
        RUSH POWER
      </p>

      <h1
        className="
          mx-auto
          max-w-[1100px]
          text-[48px]
          font-black
          uppercase
          leading-[0.9]
          tracking-[-0.04em]
          sm:text-[70px]
          md:text-[90px]
          lg:text-[115px]
          xl:text-[135px]
        "
      >
        Built For
        <span className="block text-neutral-500">
          The Rush.
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-[700px] text-sm leading-7 text-neutral-400 sm:text-base md:text-lg">
        Rush Power is created for people who refuse to slow down.
        Every formula, every ingredient and every detail is designed
        around performance, energy and the mindset to keep pushing.
      </p>

    </div>
  </section>

  <FinalStage/>
  <Footer/>

  {/* =====================================================
      REST OF YOUR CODE
  ====================================================== */}

</main>
  );
}
"use client";

import Link from "next/link";

import BlogPosts from "@/components/BlogPage/BlogPosts";

export default function ReadMorePage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-black text-white">

      {/* =====================================================
          TOP TSX COMPONENT
      ====================================================== */}
       <BlogPosts/>

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

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="w-full border-t border-white/10 px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto grid w-full max-w-[1300px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              01 / THE BRAND
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              More Than
              <span className="block text-neutral-500">
                A Supplement.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-neutral-400 sm:text-base md:text-lg">

            <p>
              Rush Power is built around a simple idea — your performance
              should never be limited by hesitation.
            </p>

            <p>
              From intense training sessions to demanding everyday goals,
              our products are designed to support the mindset of people
              who want to perform at their highest level.
            </p>

            <p>
              We focus on purposeful formulas, clean presentation and a
              performance-first approach so that every serving has a reason
              to be there.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ====================================================== */}
      <section className="relative w-full bg-[#080808] px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto w-full max-w-[1300px]">

          <div className="mb-14 max-w-[700px]">

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              02 / PERFORMANCE
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
              Designed To
              <span className="block text-neutral-500">
                Perform.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-neutral-400 sm:text-base">
              Performance is not just about working harder. It is about
              having the right foundation, consistency and focus to keep
              moving forward.
            </p>

          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: "01",
                title: "Performance",
                text: "Formulas created with training and performance in mind.",
              },
              {
                number: "02",
                title: "Consistency",
                text: "Built to become part of your everyday performance routine.",
              },
              {
                number: "03",
                title: "Focus",
                text: "Stay locked in on the goal and keep moving forward.",
              },
              {
                number: "04",
                title: "Quality",
                text: "Every detail matters when you are serious about performance.",
              },
              {
                number: "05",
                title: "Energy",
                text: "Fuel your sessions and approach every challenge with intensity.",
              },
              {
                number: "06",
                title: "Progress",
                text: "Small improvements become bigger results when you stay consistent.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  group
                  min-h-[230px]
                  bg-[#080808]
                  p-7
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                  sm:p-9
                "
              >
                <div className="flex h-full flex-col justify-between">

                  <span className="text-xs tracking-[0.2em] text-neutral-600 group-hover:text-neutral-500">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-neutral-500 group-hover:text-neutral-600">
                      {item.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          RUSH MINDSET
      ====================================================== */}
      <section className="relative flex min-h-[65vh] items-center justify-center px-5 py-24 sm:px-8 md:px-12 lg:px-20">

        <div className="mx-auto w-full max-w-[1200px] text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            03 / THE MINDSET
          </p>

          <h2
            className="
              mt-6
              text-[45px]
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.04em]
              sm:text-[65px]
              md:text-[90px]
              lg:text-[115px]
            "
          >
            No Excuses.
            <span className="block text-neutral-500">
              Just Rush.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[700px] text-sm leading-7 text-neutral-400 sm:text-base md:text-lg">
            The Rush Power mindset is about showing up when it matters.
            Push through the difficult sessions, stay committed to the
            process and keep chasing the next level.
          </p>

        </div>

      </section>

      {/* =====================================================
          PRODUCT PHILOSOPHY
      ====================================================== */}
      <section className="w-full border-y border-white/10 px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto grid w-full max-w-[1300px] gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              04 / OUR APPROACH
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] sm:text-5xl md:text-7xl">
              Keep It
              <span className="block text-neutral-500">
                Simple.
              </span>
            </h2>

          </div>

          <div className="space-y-8">

            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-bold uppercase">
                Purposeful Ingredients
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Ingredients should have a purpose. Our approach focuses
                on formulas where every component contributes to the
                overall product experience.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-bold uppercase">
                Performance First
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                The goal is simple — create products that fit naturally
                into the routine of people who take their performance
                seriously.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-bold uppercase">
                Built To Push
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Whether you are training, competing or simply trying to
                become better than yesterday, Rush Power is built around
                forward momentum.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 md:px-12 lg:px-20 lg:py-36">

        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-10 border border-white/10 bg-[#080808] p-8 text-center sm:p-12 md:p-16 lg:flex-row lg:text-left">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              RUSH POWER
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              Ready For
              <span className="block text-neutral-500">
                The Next Level?
              </span>
            </h2>

          </div>

          <Link
            href="/"
            className="
              inline-flex
              min-w-[180px]
              items-center
              justify-center
              border
              border-white
              px-8
              py-4
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Back To Home
          </Link>

        </div>

      </section>

    </main>
  );
}
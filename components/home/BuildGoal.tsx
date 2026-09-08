"use client";

import Reveal from "./Reveal";

export default function BuildGoal() {
  return (
    <section
      className="
        relative
        z-[20]
        -mt-[45px]
        w-full
        overflow-visible
        bg-black

        min-[380px]:-mt-[55px]

        sm:-mt-[70px]

        md:-mt-[90px]

        lg:-mt-[110px]

        xl:-mt-[120px]

        2xl:-mt-[120px]
      "
    >
      {/* =====================================================
          GYM IMAGE
      ====================================================== */}
      <div
        className="
          relative
          z-[5]
          w-full
          pt-[35px]

          min-[380px]:pt-[45px]

          sm:pt-[65px]

          md:pt-[90px]

          lg:pt-[125px]

          xl:pt-[150px]

          2xl:pt-[160px]
        "
      >
        <div className="relative w-full overflow-hidden">
          <img
            src="/images/SAHETD 1.png"
            alt="Build for every goal"
            className="
              block
              h-auto
              w-full
              max-w-none
              object-contain
            "
          />

          {/* =================================================
              TOP BLEND
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-[10]
              h-[80px]
              w-full
              bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.94)_25%,rgba(0,0,0,0.68)_48%,rgba(0,0,0,0.25)_72%,transparent_100%)]

              min-[380px]:h-[95px]

              sm:h-[130px]

              md:h-[190px]

              lg:h-[250px]

              xl:h-[290px]

              2xl:h-[320px]
            "
          />

          {/* =================================================
              BOTTOM BLEND
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-[10]
              h-[90px]
              w-full
              bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.08)_15%,rgba(0,0,0,0.28)_35%,rgba(0,0,0,0.62)_62%,rgba(0,0,0,0.92)_82%,#000_100%)]

              min-[380px]:h-[110px]

              sm:h-[145px]

              md:h-[220px]

              lg:h-[290px]

              xl:h-[340px]

              2xl:h-[370px]
            "
          />
        </div>
      </div>

      {/* =====================================================
          BUILD CONTENT
      ====================================================== */}
      <div
        className="
          absolute
          left-0
          z-[30]
          w-full

          /* ================= PHONE ================= */
          top-[120px]
          px-[16px]

          /* ================= SMALL PHONE ================= */
          min-[380px]:top-[135px]
          min-[380px]:px-[18px]

          /* ================= TABLET ================= */
          sm:top-[180px]
          sm:px-[28px]

          /* ================= iPAD ================= */
          md:top-[260px]
          md:px-[45px]

          /* ================= LAPTOP ================= */
          lg:top-[300px]
          lg:px-[70px]

          /* ================= DESKTOP ================= */
          xl:top-[330px]
          xl:px-[100px]

          /* ================= LARGE DESKTOP ================= */
          2xl:top-[350px]
          2xl:px-[120px]
        "
      >
        <Reveal>
          {/* =================================================
              HEADING
          ================================================== */}
          <h2
            className="
              max-w-full
              !font-tactic-exd
              !font-normal
              !leading-[89%]
              !tracking-[0%]
              !uppercase
              !bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              !bg-clip-text
              !text-transparent

              /* PHONE */
              !text-[25px]

              /* SMALL PHONE */
              min-[380px]:!text-[28px]

              /* TABLET */
              sm:!text-[34px]

              /* iPAD */
              md:!text-[48px]

              /* LAPTOP */
              lg:!text-[54px]

              /* DESKTOP */
              xl:!text-[58px]

              /* LARGE DESKTOP */
              2xl:!text-[60px]
            "
          >
            BUILD FOR
            <br />

            <span
              className="
                !font-tactic-exd
                !font-normal
                !leading-[89%]

                /* PHONE */
                !text-[31px]

                /* SMALL PHONE */
                min-[380px]:!text-[34px]

                /* TABLET */
                sm:!text-[42px]

                /* iPAD */
                md:!text-[55px]

                /* LAPTOP */
                lg:!text-[61px]

                /* DESKTOP */
                xl:!text-[66px]

                /* LARGE DESKTOP */
                2xl:!text-[68px]
              "
            >
              EVERY GOAL
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p
            className="
              !mt-[10px]
              !w-full
              !max-w-[330px]
              !font-sf
              !font-[510]
              !leading-[1.35]
              !tracking-normal
              !text-white

              /* PHONE */
              !text-[12px]

              /* SMALL PHONE */
              min-[380px]:!mt-[12px]
              min-[380px]:!max-w-[350px]
              min-[380px]:!text-[13px]

              /* TABLET */
              sm:!mt-[15px]
              sm:!max-w-[420px]
              sm:!text-[15px]

              /* iPAD */
              md:!mt-[20px]
              md:!max-w-[560px]
              md:!text-[18px]

              /* LAPTOP */
              lg:!mt-[22px]
              lg:!max-w-[620px]
              lg:!text-[20px]

              /* DESKTOP */
              xl:!mt-[24px]
              xl:!max-w-[650px]
              xl:!text-[22px]

              /* LARGE DESKTOP */
              2xl:!max-w-[680px]
            "
          >
            Whatever you’re working toward—strength, performance, recovery,
            endurance, or everyday energy—Power Rush is designed to fit your
            routine.
          </p>
        </Reveal>
      </div>

      {/* =====================================================
          BOTTOM SPACE
      ====================================================== */}
      <div
        className="
          h-[3px]
          w-full

          sm:h-[6px]

          md:h-[12px]

          lg:h-[20px]

          xl:h-[25px]

          2xl:h-[30px]
        "
      />
    </section>
  );
}
"use client";

import FinalStage from "@/components/home/FinalStage";
import Footer from "@/components/home/Footer ";

export default function Newsletter() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      {/* =====================================================
          START YOUR PROGRESS / NEWSLETTER
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-black">
        <div
          className="
            relative
            z-[30]
            mt-[75px]
            flex
            w-full
            flex-col
            items-center
            px-[12px]
            text-center

            min-[380px]:mt-[85px]
            min-[380px]:px-[14px]

            min-[480px]:mt-[95px]
            min-[480px]:px-[16px]

            sm:mt-[105px]
            sm:px-[24px]

            md:mt-[115px]
            md:px-[40px]

            lg:mt-[120px]
            lg:px-[50px]

            xl:mt-[120px]
            xl:px-[80px]

            2xl:px-[100px]
          "
        >
          {/* =========================
              HEADING
          ========================== */}
      <h2
  className="
    w-full
    max-w-full
    overflow-visible
    whitespace-nowrap

    bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
    bg-clip-text

    font-tactic-exd
    font-normal
    uppercase
    leading-[89%]
    tracking-[0%]
    text-transparent

    /* MOBILE */
    text-[21px]

    /* 375px */
    min-[375px]:text-[22px]

    /* 425px */
    min-[425px]:text-[25px]

    /* 480px */
    min-[480px]:text-[32px]

    /* TABLET */
    sm:text-[36px]
    md:text-[42px]

    /* LAPTOP / DESKTOP — same as before */
    lg:text-[58px]
    xl:text-[75.92px]
    2xl:text-[80px]
  "
>
  START YOUR PROGRESS
</h2>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <p
            className="
              mt-[14px]
              w-full
              max-w-[290px]

              font-sf
              text-[12px]
              font-[510]
              leading-[112%]
              tracking-[0]
              text-center
              text-[#CECECE]

              min-[375px]:mt-[15px]
              min-[375px]:max-w-[335px]
              min-[375px]:text-[12.5px]

              min-[480px]:mt-[16px]
              min-[480px]:max-w-[410px]
              min-[480px]:text-[14px]

              sm:mt-[17px]
              sm:max-w-[520px]
              sm:text-[16px]
              sm:leading-[106%]

              md:mt-[18px]
              md:max-w-[620px]
              md:text-[18px]

              lg:max-w-[680px]
              lg:text-[20px]

              xl:max-w-[700px]
              xl:text-[23.2px]
              xl:leading-[104%]
            "
          >
            Join the{" "}
            <span className="font-sf font-bold text-white">
              POWER RUSH
            </span>{" "}
            community for exclusive offers, product updates, and early access
            to future releases.
          </p>

          {/* =========================
              EMAIL FORM
          ========================== */}
          <div
            className="
              mt-[22px]
              flex
              h-[44px]
              w-full
              max-w-[290px]
              overflow-hidden

              min-[375px]:mt-[23px]
              min-[375px]:h-[45px]
              min-[375px]:max-w-[340px]

              min-[480px]:mt-[24px]
              min-[480px]:h-[48px]
              min-[480px]:max-w-[410px]

              sm:mt-[25px]
              sm:h-[52px]
              sm:max-w-[470px]

              md:mt-[26px]
              md:h-[54px]
              md:max-w-[500px]

              lg:mt-[27px]
              lg:h-[55px]
              lg:max-w-[480px]

              xl:mt-[28px]
              xl:h-[58px]
              xl:max-w-[500px]
            "
          >
            {/* =========================
                EMAIL INPUT
            ========================== */}
            <input
              type="email"
              placeholder="Enter your email"
              className="
                h-full
                min-w-0
                flex-1

                border
                border-[#5A5A5A]
                bg-[#000000]

                px-[9px]

                font-sf
                text-[10px]
                font-normal
                leading-[104%]
                tracking-[0]

                text-[#CECECE]
                outline-none
                placeholder:text-[#CECECE]

                min-[375px]:px-[10px]
                min-[375px]:text-[10.5px]

                min-[480px]:px-[13px]
                min-[480px]:text-[12px]

                sm:px-[17px]
                sm:text-[14px]

                md:px-[18px]
                md:text-[15px]

                lg:px-[16px]
                lg:text-[14px]

                xl:px-[20px]
                xl:text-[16px]
              "
            />

            {/* =========================
                JOIN BUTTON
            ========================== */}
            <button
              type="button"
              className="
                h-full
                shrink-0

                border
                border-white
                bg-white

                px-[5px]

                font-tactic-reg
                font-normal
                leading-[88%]
                tracking-[0]
                text-center
                uppercase
                whitespace-nowrap
                text-[#000000]

                /* ================= 320px ================= */
                w-[105px]
                !text-[11px]

                /* ================= 375px ================= */
                min-[375px]:w-[120px]
                min-[375px]:!text-[12px]

                /* ================= 480px ================= */
                min-[480px]:w-[140px]
                min-[480px]:!text-[13px]

                /* ================= TABLET ================= */
                sm:w-[165px]
                sm:px-[8px]
                sm:!text-[16px]

                /* ================= iPAD ================= */
                md:w-[175px]
                md:!text-[18px]

                /* ================= 1024 LAPTOP ================= */
                lg:w-[190px]
                lg:px-[8px]
                lg:!text-[20px]

                /* ================= DESKTOP ================= */
                xl:w-[230px]
                xl:px-[15px]
                xl:!text-[35px]
              "
            >
              JOIN POWER RUSH
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STAGE
      ====================================================== */}
      <FinalStage />

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />
    </main>
  );
}
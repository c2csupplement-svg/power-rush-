"use client";

import FinalStage from "@/components/home/FinalStage";
import Footer from "@/components/home/Footer ";

export default function Newsletter() {
  return (
    <main className="w-full bg-black">
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
            px-[16px]
            text-center

            min-[380px]:mt-[85px]
            min-[480px]:mt-[95px]

            sm:mt-[105px]
            sm:px-[24px]

            md:mt-[115px]
            md:px-[40px]

            lg:mt-[120px]
            lg:px-[60px]

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
    whitespace-nowrap

    bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
    bg-clip-text

    font-tactic-exd
    font-normal
    uppercase
    leading-[89%]
    tracking-[0%]
    text-transparent

    text-[32px]

    min-[380px]:text-[35px]
    min-[480px]:text-[40px]
    sm:text-[46px]
    md:text-[55px]
    lg:text-[64px]
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
              max-w-[390px]

              font-sf
              text-[13px]
              font-[510]
              leading-[110%]
              tracking-[0%]
              text-center
              text-[#CECECE]

              min-[380px]:mt-[15px]
              min-[380px]:text-[13.5px]

              min-[480px]:mt-[16px]
              min-[480px]:max-w-[430px]
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
              h-[48px]
              w-full
              max-w-[390px]
              overflow-hidden

              min-[380px]:mt-[23px]
              min-[380px]:h-[49px]

              min-[480px]:mt-[24px]
              min-[480px]:h-[50px]
              min-[480px]:max-w-[430px]

              sm:mt-[25px]
              sm:h-[52px]
              sm:max-w-[470px]

              md:mt-[26px]
              md:h-[54px]
              md:max-w-[500px]

              lg:mt-[27px]
              lg:h-[56px]

              xl:mt-[28px]
              xl:h-[58px]
              xl:max-w-[500px]
            "
          >
            {/* EMAIL INPUT */}
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

                px-[12px]

                font-sf
                text-[12px]
                font-normal
                leading-[104%]
                tracking-[0%]

                text-[#CECECE]
                outline-none
                placeholder:text-[#CECECE]

                min-[380px]:px-[14px]
                min-[380px]:text-[12.5px]

                min-[480px]:px-[16px]
                min-[480px]:text-[13px]

                sm:px-[17px]
                sm:text-[14px]

                md:px-[18px]
                md:text-[15px]

                lg:px-[19px]

                xl:px-[20px]
                xl:text-[16px]
              "
            />

            {/* JOIN BUTTON */}
            <button
              type="button"
              className="
                h-full
                w-[135px]
                shrink-0

                border
                border-white
                bg-white

                px-[8px]

                font-tactic-reg
                text-[14px]
                font-normal
                leading-[88%]
                tracking-[0%]
                text-center
                uppercase
                whitespace-nowrap
                text-[#000000]

                min-[380px]:w-[145px]
                min-[380px]:text-[15px]

                min-[480px]:w-[155px]
                min-[480px]:text-[16px]

                sm:w-[170px]
                sm:px-[10px]
                sm:text-[18px]

                md:w-[185px]
                md:text-[21px]

                lg:w-[205px]
                lg:text-[25px]

                xl:w-[230px]
                xl:px-[15px]
                xl:text-[35px]
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
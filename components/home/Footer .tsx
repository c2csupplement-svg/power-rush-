"use client";

import {
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="
        relative
        z-30
        w-full
        bg-black
      "
    >
      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}
      <div
        className="
          flex
          w-full
          flex-col

          px-[15px]
          pb-[24px]

          min-[380px]:px-[18px]
          min-[380px]:pb-[28px]

          sm:px-[28px]
          sm:pb-[34px]

          md:px-[40px]
          md:pb-[42px]

          lg:px-[45px]
          lg:pb-[45px]

          xl:px-[55px]
          xl:pb-[48px]

          2xl:px-[70px]
          2xl:pb-[52px]
        "
      >
        {/* =================================================
            TOP FOOTER ROW
        ================================================== */}
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-[15px]

            min-[380px]:gap-[20px]

            sm:gap-[30px]

            md:gap-[40px]

            lg:gap-[50px]

            xl:gap-[60px]
          "
        >
          {/* =================================================
              RUSH POWER
          ================================================== */}
          <div
            className="
              min-w-0
              whitespace-nowrap
              font-tactic-exd
              font-normal
              uppercase
              leading-none
              tracking-[0%]
              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              bg-clip-text
              text-transparent

              /* PHONE */
              text-[20px]

              /* SMALL PHONE */
              min-[380px]:text-[23px]

              /* TABLET */
              sm:text-[28px]

              /* iPAD */
              md:text-[34px]

              /* LAPTOP */
              lg:text-[42px]

              /* DESKTOP */
              xl:text-[53.5px]

              /* LARGE DESKTOP */
              2xl:text-[53.5px]
            "
          >
            #RUSH POWER
          </div>

          {/* =================================================
              SOCIAL ICONS
          ================================================== */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-[9px]
              text-white

              min-[380px]:gap-[11px]

              sm:gap-[16px]

              md:gap-[22px]

              lg:gap-[28px]

              xl:gap-[28px]
            "
          >
            {/* PINTEREST */}
            <a
              href="#"
              aria-label="Pinterest"
              className="
                flex
                items-center
                justify-center
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              <FaPinterestP
                className="
                  h-[16px]
                  w-[16px]

                  min-[380px]:h-[18px]
                  min-[380px]:w-[18px]

                  sm:h-[19px]
                  sm:w-[19px]

                  md:h-[21px]
                  md:w-[21px]

                  lg:h-[22px]
                  lg:w-[22px]
                "
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                items-center
                justify-center
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              <FaInstagram
                className="
                  h-[17px]
                  w-[17px]

                  min-[380px]:h-[19px]
                  min-[380px]:w-[19px]

                  sm:h-[20px]
                  sm:w-[20px]

                  md:h-[22px]
                  md:w-[22px]

                  lg:h-[23px]
                  lg:w-[23px]
                "
              />
            </a>

            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="
                flex
                items-center
                justify-center
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              <FaXTwitter
                className="
                  h-[17px]
                  w-[17px]

                  min-[380px]:h-[19px]
                  min-[380px]:w-[19px]

                  sm:h-[20px]
                  sm:w-[20px]

                  md:h-[22px]
                  md:w-[22px]

                  lg:h-[23px]
                  lg:w-[23px]
                "
              />
            </a>

            {/* YOUTUBE */}
            <a
              href="#"
              aria-label="YouTube"
              className="
                flex
                items-center
                justify-center
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              <FaYoutube
                className="
                  h-[17px]
                  w-[20px]

                  min-[380px]:h-[19px]
                  min-[380px]:w-[22px]

                  sm:h-[20px]
                  sm:w-[23px]

                  md:h-[22px]
                  md:w-[25px]

                  lg:h-[23px]
                  lg:w-[26px]
                "
              />
            </a>
          </div>
        </div>

        {/* =================================================
            BOTTOM FOOTER ROW
        ================================================== */}
        <div
          className="
            mt-[20px]
            flex
            w-full
            flex-col
            items-start
            gap-[10px]

            min-[380px]:mt-[22px]

            sm:mt-[25px]

            md:mt-[30px]
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-[20px]

            lg:mt-[38px]

            xl:mt-[38px]
          "
        >
          {/* =================================================
              COPYRIGHT
          ================================================== */}
          <p
            className="
              m-0
              max-w-full
              font-sf
              font-[510]
              leading-[1.4]
              tracking-[0%]
              text-[#959595]

              /* PHONE */
              text-[10px]

              /* SMALL PHONE */
              min-[380px]:text-[11px]

              /* TABLET */
              sm:text-[13px]

              /* iPAD */
              md:text-[15px]

              /* LAPTOP */
              lg:text-[17px]

              /* DESKTOP */
              xl:text-[21px]

              2xl:text-[21px]
            "
          >
            Copyright © 2025 the creatine company - All Rights Reserved
          </p>

          {/* =================================================
              PRIVACY POLICY
          ================================================== */}
          <button
            className="
              shrink-0
              p-0
              font-sf
              font-[510]
              leading-[1.3]
              tracking-[0%]
              text-[#959595]
              transition-colors
              duration-200
              hover:text-white

              /* PHONE */
              text-[13px]

              /* SMALL PHONE */
              min-[380px]:text-[14px]

              /* TABLET */
              sm:text-[16px]

              /* iPAD */
              md:text-[20px]

              /* LAPTOP */
              lg:text-[24px]

              /* DESKTOP */
              xl:text-[30px]

              2xl:text-[30px]
            "
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
"use client";

import {
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <footer
  className="
    relative
    z-30
    w-full
    bg-black

    before:pointer-events-none
    before:absolute
    before:left-0
    before:right-0
    before:top-[-70px]
    before:z-[-1]
    before:h-[70px]
    before:bg-gradient-to-b
    before:from-transparent
    before:via-black/35
    before:to-black

    min-[375px]:before:top-[-80px]
    min-[375px]:before:h-[80px]

    min-[425px]:before:top-[-90px]
    min-[425px]:before:h-[90px]

    sm:before:top-[-105px]
    sm:before:h-[105px]

    md:before:top-[-125px]
    md:before:h-[125px]

    lg:before:top-[-145px]
    lg:before:h-[145px]

    xl:before:top-[-165px]
    xl:before:h-[165px]

    2xl:before:top-[-185px]
    2xl:before:h-[185px]
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

              text-[20px]
              min-[380px]:text-[23px]
              sm:text-[28px]
              md:text-[34px]
              lg:text-[42px]
              xl:text-[53.5px]
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
                  h-[16px] w-[16px]
                  min-[380px]:h-[18px] min-[380px]:w-[18px]
                  sm:h-[19px] sm:w-[19px]
                  md:h-[21px] md:w-[21px]
                  lg:h-[22px] lg:w-[22px]
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
                  h-[17px] w-[17px]
                  min-[380px]:h-[19px] min-[380px]:w-[19px]
                  sm:h-[20px] sm:w-[20px]
                  md:h-[22px] md:w-[22px]
                  lg:h-[23px] lg:w-[23px]
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
                  h-[17px] w-[17px]
                  min-[380px]:h-[19px] min-[380px]:w-[19px]
                  sm:h-[20px] sm:w-[20px]
                  md:h-[22px] md:w-[22px]
                  lg:h-[23px] lg:w-[23px]
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
                  h-[17px] w-[20px]
                  min-[380px]:h-[19px] min-[380px]:w-[22px]
                  sm:h-[20px] sm:w-[23px]
                  md:h-[22px] md:w-[25px]
                  lg:h-[23px] lg:w-[26px]
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
            gap-[16px]

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

              text-[10px]
              min-[380px]:text-[11px]
              sm:text-[13px]
              md:text-[15px]
              lg:text-[17px]
              xl:text-[21px]
              2xl:text-[21px]
            "
          >
            Copyright © 2025 the creatine company - All Rights Reserved
          </p>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div
            className="
              flex
              w-full
              items-center
              justify-between
              gap-[18px]

              md:w-auto
              md:justify-end
            "
          >
            {/* PRIVACY POLICY */}
            <button
              type="button"
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

                text-[13px]
                min-[380px]:text-[14px]
                sm:text-[16px]
                md:text-[20px]
                lg:text-[24px]
                xl:text-[30px]
                2xl:text-[30px]
              "
            >
              Privacy Policy
            </button>

            {/* =================================================
                RELOAD BUTTON
            ================================================== */}
   <button
  type="button"
  onClick={scrollToTop}
  aria-label="Reload and go to top"
 className="
  group
  flex
  shrink-0
  items-center
  justify-end
  gap-[7px]

  rounded-[5px]

  px-[8px]
  py-[7px]

  transition-all
  duration-300

  hover:bg-white
  hover:text-black

  min-[380px]:px-[9px]
  min-[380px]:py-[8px]

  sm:px-[10px]
  sm:py-[9px]

  md:px-[11px]
  md:py-[10px]

  lg:px-[12px]
  lg:py-[11px]

  xl:px-[1px]
  xl:py-[12px]
"
>
  <FiRefreshCw
    className="
      h-[14px]
      w-[14px]

      transition-transform
      duration-500
      group-hover:rotate-180

      min-[380px]:h-[15px]
      min-[380px]:w-[15px]

      sm:h-[17px]
      sm:w-[17px]

      md:h-[19px]
      md:w-[19px]

      lg:h-[21px]
      lg:w-[21px]

      xl:h-[25px]
      xl:w-[25px]
    "
  />
</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
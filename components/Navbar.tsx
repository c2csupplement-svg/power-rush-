"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar sirf page ke bilkul top par visible rahega
      setIsAtTop(window.scrollY <= 0);
    };

    // Initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = `
    font-sf
    text-[12px]
    font-normal
    uppercase
    tracking-[0.04em]
    text-[#9D9D9D]
    transition-opacity
    duration-300
    hover:opacity-50
  `;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed
          left-0
          top-0
          z-[999]
          w-full
          bg-transparent
          px-4
          py-2
          md:px-6
          md:py-2

          transition-all
          duration-500
          ease-out

          ${
            isAtTop
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            mx-auto
            grid
            h-auto
            w-full
            max-w-[1800px]
            grid-cols-3
            items-center
            md:grid-cols-5
          "
        >
          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="flex items-center justify-start md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              className="
                flex
                items-center
                justify-center
                p-1
                text-[#9D9D9D]
                transition-opacity
                duration-300
                hover:opacity-50
                focus:outline-none
              "
            >
              {isMenuOpen ? (
                <svg
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 01-1.414-1.414L12 10.586l5.293-5.293z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ================= DESKTOP HOME ================= */}
          <div className="hidden justify-start md:flex">
            <Link
              href="/"
              className="
                font-sf
                text-[13px]
                font-[510]
                not-italic
                uppercase
                tracking-[0.04em]
                text-[#9D9D9D]
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              Home
            </Link>
          </div>

          {/* ================= DESKTOP ALL PRODUCTS ================= */}
          <div className="hidden justify-center md:flex">
            <Link
              href="/all-products"
              className="
                font-sf
                text-[13px]
                font-[510]
                not-italic
                uppercase
                tracking-[0.04em]
                text-[#9D9D9D]
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              All Products
            </Link>
          </div>

          {/* ================= LOGO ================= */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              <Image
                src="/images/logo.png"
                alt="Power Rush"
                width={130}
                height={130}
                priority
                className="
                  block
                  h-[80px]
                  w-[80px]
                  max-w-none
                  object-contain

                  sm:h-[90px]
                  sm:w-[90px]

                  md:h-[100px]
                  md:w-[100px]

                  lg:h-[115px]
                  lg:w-[115px]

                  xl:h-[125px]
                  xl:w-[125px]
                "
              />
            </Link>
          </div>

          {/* ================= DESKTOP NEWSLETTER ================= */}
          <div className="hidden justify-center md:flex">
            <Link
              href="/newsletter"
              className="
                font-sf
                text-[13px]
                font-[510]
                not-italic
                uppercase
                tracking-[0.04em]
                text-[#9D9D9D]
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              News letter
            </Link>
          </div>

          {/* ================= DESKTOP BLOG ================= */}
          <div className="hidden justify-end md:flex">
            <Link
              href="/blog"
              className="
                font-sf
                text-[13px]
                font-[510]
                not-italic
                uppercase
                tracking-[0.04em]
                text-[#9D9D9D]
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              Blog
            </Link>
          </div>

          {/* ================= MOBILE RIGHT SPACE ================= */}
          <div className="block md:hidden" />
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[998]
            flex
            flex-col
            items-center
            justify-center
            space-y-7
            bg-black/90
            px-6
            pt-16
            backdrop-blur-md

            sm:space-y-8
            md:hidden
          "
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="
              font-sf
              text-sm
              uppercase
              tracking-[0.08em]
              text-[#9D9D9D]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-base
            "
          >
            Home
          </Link>

          <Link
            href="/all-products"
            onClick={closeMenu}
            className="
              font-sf
              text-sm
              uppercase
              tracking-[0.08em]
              text-[#9D9D9D]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-base
            "
          >
            All Products
          </Link>

          <Link
            href="/newsletter"
            onClick={closeMenu}
            className="
              font-sf
              text-sm
              uppercase
              tracking-[0.08em]
              text-[#9D9D9D]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-base
            "
          >
            News letter
          </Link>

          <Link
            href="/blog"
            onClick={closeMenu}
            className="
              font-sf
              text-sm
              uppercase
              tracking-[0.08em]
              text-[#9D9D9D]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-base
            "
          >
            Blog
          </Link>
        </div>
      )}
    </>
  );
}
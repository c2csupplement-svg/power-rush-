"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[999] w-full bg-transparent px-6 py-5 md:px-10">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-5 items-center">
        {/* LEFT — HOME */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="
              font-sf
              text-[10px]
              font-normal
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

        {/* LEFT CENTER — ALL PRODUCTS */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="
              font-sf
              text-[10px]
              font-normal
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

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="
      font-sf
      text-[25px]
      font-bold
      uppercase
      italic
      leading-[0.8]
      tracking-[-0.04em]
      text-[#9D9D9D]
      transition-transform
      duration-300
      hover:scale-105
      text-center
    "
          >
            <span className="block">POWER</span>
            <span className="block">RUSH</span>
          </Link>
        </div>

        {/* RIGHT CENTER — NEWSLETTER */}
        <div className="flex justify-center">
          <Link
            href="/newsletter"
            className="
              font-sf
              text-[10px]
              font-normal
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

        {/* RIGHT — BLOG */}
        <div className="flex justify-end">
          <Link
            href="/blog"
            className="
              font-sf
              text-[10px]
              font-normal
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
      </div>
    </nav>
  );
}

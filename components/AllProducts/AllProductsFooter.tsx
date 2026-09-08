"use client";

import FinalStage from "@/components/home/FinalStage";
import Footer from "../home/Footer ";

export default function AllProductsFooter() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* =========================
          SMOOTH BLEND FROM PREVIOUS SECTION
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-[50]
          h-[220px]
          bg-gradient-to-b
          from-black
          via-black/80
          to-transparent
        "
      />

      {/* =========================
          FINAL STAGE
      ========================== */}
      <div className="relative z-10">
        <FinalStage />
      </div>

      {/* =========================
          SMOOTH BLEND INTO FOOTER
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[180px]
          left-0
          right-0
          z-[50]
          h-[220px]
          bg-gradient-to-b
          from-transparent
          via-black/80
          to-black
        "
      />

      {/* =========================
          FOOTER
      ========================== */}
      <div className="relative z-20">
        <Footer />
      </div>
    </section>
  );
}
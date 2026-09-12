"use client";

import RoutineSection from "@/components/home/RoutineSection";

export default function AllProductsFooter() {
  return (
    <div
      className="
        w-full
        overflow-x-clip
        -mt-[80px]

        min-[380px]:-mt-[90px]
        min-[480px]:-mt-[100px]

        sm:-mt-[110px]

        md:mt-0
      "
    >
      <RoutineSection />
    </div>
  );
}
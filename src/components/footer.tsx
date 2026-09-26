import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const footer = () => {
  return (
    <footer className="border-t border-white bg-[#0d0e11] text-white">
      <div className="mx-auto flex min-h-[115px] max-w-10/11 flex-col items-center justify-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">

        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            className="w-5"
          />

          <span className="text-2xl font-bold">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default footer;
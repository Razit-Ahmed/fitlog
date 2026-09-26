import React from "react";
import Logo from "@/assets/logo.png"
import Image from "next/image";

const nabvar = () => {
  return (
    <div className="navbar bg-[#0d0e11] text-white shadow-sm border-b border-white">

     
      <div className="navbar-start">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-[#0d0e11] rounded-box z-1 mt-3 w-40 p-2 shadow">
            <li>
              <a>Workouts</a>
            </li>
            <li>
              <a>My Plan</a>
            </li>
          </ul>
        </div>

        

       <div className=" flex gap-1 items-center">
        <div>
            <Image src={Logo} alt="logo" />
        </div>
        <div>
            <h2 className=" font-bold text-2xl">FITLOG</h2>
        </div>
       </div>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="rounded-full bg-[#1d3015] text-[#baff00]">
              Workouts
            </a>
          </li>

          <li>
            <a className="text-gray-400">
              My Plan
            </a>
          </li>
        </ul>
      </div>

     
      <div className="navbar-end gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span>Plan</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#baff00] text-black">
            0
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-400">Saved</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-600 text-gray-400">
            0
          </span>
        </div>
      </div>

    </div>
  );
};

export default nabvar;
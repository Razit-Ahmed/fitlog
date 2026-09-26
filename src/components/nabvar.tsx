import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
   <div className="navbar bg-black shadow-sm border-b border-white">
    <div  className="container mx-auto w-10/11">

    
      <div className="navbar-start">

        
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/workouts">Workouts</Link>
            </li>

            <li>
              <Link href="/myplan">My Plan</Link>
            </li>
          </ul>
        </div>


        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" />

          <div className="text-2xl font-bold">
            FITLOG
          </div>
        </div>

      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          <li>
            <Link href="/workouts">
              Workouts
            </Link>
          </li>

          <li>
            <Link href="/myplan">
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-4">

        <div>
          Plan 0
        </div>

        <div>
          Saved 0
        </div>

      </div>

    </div>
   </div>
  );
};

export default Navbar;
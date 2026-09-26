"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import Logo from "@/assets/logo.png";
import { workoutContext } from "@/context/workoutContext";

const Navbar = () => {
  const { todayPlan, saveLater } = useContext(workoutContext);

  return (
    <div className="navbar border-b border-white bg-black shadow-sm">
      <div className="container mx-auto flex w-10/11 items-center justify-between">

      
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
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/workouts">Workouts</Link>
              </li>

              <li>
                <Link href="/myplan">My Plan</Link>
              </li>
            </ul>
          </div>

       
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="FITLOG Logo"
              width={32}
              height={32}
            />

            <div className="text-2xl font-bold text-white">
              FITLOG
            </div>
          </Link>

        </div>

    
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

  
        <div className="navbar-end flex items-center gap-5">

          <Link
            href="/myplan"
            className="text-sm text-white transition hover:text-[#baff00]"
          >
            Plan{" "}
            <span className="font-bold text-[#baff00]">
              {todayPlan.length}
            </span>
          </Link>

          <Link
            href="/myplan"
            className="text-sm text-white transition hover:text-[#baff00]"
          >
            Saved{" "}
            <span className="font-bold text-[#baff00]">
              {saveLater.length}
            </span>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
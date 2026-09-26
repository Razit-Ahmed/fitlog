"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";

import { workoutContext } from "@/context/workoutContext";
import PlanCard from "@/components/planCard";
import { Ifit } from "@/types/fits.type";

type SortType = "duration" | "rating" | "calories";
type TabType = "today" | "saved";

const ListedPlan = () => {
  const { todayPlan, saveLater } = useContext(workoutContext);

  const [activeTab, setActiveTab] = useState<TabType>("today");
  const [sortBy, setSortBy] = useState<SortType>("duration");

 
  const currentPlans =
    activeTab === "today" ? todayPlan : saveLater;

  
  const sortedPlans = useMemo(() => {
    return [...currentPlans].sort((a: Ifit, b: Ifit) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return 0;
    });
  }, [currentPlans, sortBy]);

  
  const totalMinutes = currentPlans.reduce(
    (total: number, fit: Ifit) => total + fit.duration,
    0
  );

  const totalCalories = currentPlans.reduce(
    (total: number, fit: Ifit) =>
      total + fit.caloriesBurned,
    0
  );

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container mx-auto w-10/11 max-w-6xl py-10">

     
        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase">
            MY PLAN
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

    
        <div className="mb-7 grid grid-cols-3 rounded-2xl border border-[#252a33] bg-[#12151a] px-5 py-7">

     
          <div className="border-r border-[#252a33]">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <h2 className="mt-1 text-4xl font-black text-[#baff00]">
              {currentPlans.length}
            </h2>
          </div>

        
          <div className="border-r border-[#252a33] pl-7">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <h2 className="mt-1 text-4xl font-black text-white">
              {totalMinutes}
            </h2>
          </div>

  
          <div className="pl-7">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <h2 className="mt-1 text-4xl font-black text-white">
              {totalCalories}
            </h2>
          </div>

        </div>

   
        <div className="mb-5 flex items-center justify-between">

     
          <div className="flex rounded-xl border border-[#252a33] bg-[#15191f] p-1">

            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                activeTab === "today"
                  ? "bg-[#202631] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#202631] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

     
          <div className="flex items-center gap-2">

            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as SortType
                )
              }
              className="rounded-lg border border-[#252a33] bg-[#15191f] px-3 py-2 text-xs text-gray-300 outline-none focus:border-[#baff00]"
            >
              <option value="duration">
                Duration
              </option>

              <option value="rating">
                Rating
              </option>

              <option value="calories">
                Calories
              </option>
            </select>

          </div>

        </div>

       
        <div className="min-h-64 rounded-2xl border border-dashed border-[#252a33] bg-[#0f1216] p-4">

          {sortedPlans.length > 0 ? (

            <div>
              {sortedPlans.map((fit: Ifit) => (
                <PlanCard
                  key={fit.id}
                  fit={fit}
                  activeTab={activeTab}
                />
              ))}
            </div>

          ) : (

            <div className="flex min-h-56 flex-col items-center justify-center text-center">

              <h2 className="text-xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="mt-5 rounded-full bg-[#baff00] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#a9eb00]"
              >
                Go to workouts
              </Link>

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default ListedPlan;
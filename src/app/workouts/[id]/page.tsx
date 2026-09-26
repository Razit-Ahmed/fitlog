import { Ifit } from "@/types/fits.type";
import Image from "next/image";
import React from "react";

interface IworkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getFits = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const workoutDetailsPage = async ({
  params,
}: IworkoutDetailsPageProps) => {
  const { id } = await params;

  const workoutData = await getFits();

  const workout = workoutData.find(
    (workout: Ifit) => String(workout.id) === String(id)
  ) as Ifit

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container mx-auto w-10/11 py-8 md:py-12">

       
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

   
          <div className="overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              width={500}
              height={600}
              className="h-full max-h-150 w-full object-cover"
            />
          </div>

          <div className="flex flex-col">

  
            <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              {workout.name}
            </h1>

     
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

    
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

       
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292d35] bg-[#15181e]">

         
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Equipment
                </span>
                <span className="text-sm">
                  {workout.equipment}
                </span>
              </div>

   
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Difficulty
                </span>
                <span className="text-sm">
                  {workout.difficulty}
                </span>
              </div>

    
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Sets
                </span>
                <span className="text-sm">
                  {workout.sets}
                </span>
              </div>

     
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Reps
                </span>
                <span className="text-sm">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Duration
                </span>
                <span className="text-sm">
                  {workout.duration} min
                </span>
              </div>


              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Calories
                </span>
                <span className="text-sm">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Rating
                </span>
                <span className="text-sm">
                  {workout.rating}
                </span>
              </div>

            </div>

         
            <div className="mt-6">

              <h2 className="text-sm font-black uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-gray-400"
                    >
                      <span className="text-gray-500">
                        {index + 1}.
                      </span>

                      <span>
                        {instruction}
                      </span>
                    </li>
                  )
                )}
              </ol>

            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button className="rounded-lg bg-[#baff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#a9e600]">
                 Add to todays plan
              </button>

              <button className="rounded-lg border border-[#39404a] px-6 py-3 text-sm text-gray-300 transition hover:border-gray-500">
                ♡ Save for later
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default workoutDetailsPage;
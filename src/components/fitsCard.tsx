import React from 'react';
import Image from "next/image";
import { Ifit } from '@/types/fits.type';
import Link from 'next/link';

interface IFitCardProps{
    fit:Ifit
}

const fitsCard = ({fit} : IFitCardProps) => {
    return (
        <Link href={`/workouts/${fit.id}`}>
        <div
            
            className="overflow-hidden rounded-2xl border border-[#292c33] bg-[#15171c] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#baff00]"
          >
            
            <div className="h-60 w-full overflow-hidden">
              <Image
                src={fit.image}
                alt={fit.name}
                width={800}
                height={1000}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            
            <div className="p-6">

              
              <div className="mb-4 flex flex-wrap gap-2">
                {fit.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h2 className="text-xl font-black uppercase">
                {fit.name}
              </h2>

              {/* Equipment */}
              <p className="mt-2 text-sm text-gray-400">
                {fit.equipment}
              </p>

              {/* Divider */}
              <div className="my-5 border-t border-[#292c33]"></div>

              {/* Information */}
              <div className="flex items-center justify-between text-sm text-gray-400">

                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>{fit.duration} min</span>
                </div>

                <div className="flex items-center gap-1">
                  
                  <span>{fit.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-1">
                  <span>☆</span>
                  <span>{fit.rating}</span>
                </div>

              </div>

            </div>
          </div>
        </Link>
    );
};

export default fitsCard;
"use client";

import { workoutContext } from '@/context/workoutContext';
import { Ifit } from '@/types/fits.type';
import React, { useContext } from 'react';


const saveLater = ({workout}:{workout:Ifit}) => {


    const {saveLater, setSaveLater} = useContext (workoutContext)


    const handleSaveLater=()=>{

        setSaveLater([...saveLater],workout)
        alert(`Your Plan add ${workout.name}`)
    }

    return (
      <button className="rounded-lg bg-[#baff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#a9e600]" 
             onClick={()=>handleSaveLater()} >
                 Add Save Later
              </button>
    );
};

export default saveLater;
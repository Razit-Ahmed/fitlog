"use client";

import { workoutContext } from '@/context/workoutContext';
import { Ifit } from '@/types/fits.type';
import React, { useContext } from 'react';


const todayplan = ({workout}:{workout:Ifit}) => {


    const {todayPlan, setTodayPlan} = useContext (workoutContext)


    const handleTodayPlan=()=>{

        setTodayPlan([...todayPlan],workout)
        alert(`Your Plan add ${workout.name}`)
    }

    return (
      <button className="rounded-lg bg-[#baff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#a9e600]" 
             onClick={()=>handleTodayPlan()} >
                 Add to todays plan
              </button>
    );
};

export default todayplan;
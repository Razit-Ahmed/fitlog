"use client";
import React, { createContext, ReactNode, useState } from "react";

export const workoutContext = createContext({});

const WorkoutProvider = ({children} :{children: ReactNode}) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveLater, setSaveLater] = useState([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    saveLater,
    setSaveLater,
  };

  return <workoutContext.Provider value={sharedData}>{children} </workoutContext.Provider>;
};

export default WorkoutProvider;

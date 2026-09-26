"use client";

import React, { createContext, ReactNode, useState } from "react";
import { Ifit } from "@/types/fits.type";

interface IWorkoutContext {
  todayPlan: Ifit[];
  setTodayPlan: React.Dispatch<React.SetStateAction<Ifit[]>>;

  saveLater: Ifit[];
  setSaveLater: React.Dispatch<React.SetStateAction<Ifit[]>>;

  removeFromTodayPlan: (id: number) => void;
  removeFromSaveLater: (id: number) => void;
}

export const workoutContext = createContext<IWorkoutContext>(
  {} as IWorkoutContext
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<Ifit[]>([]);
  const [saveLater, setSaveLater] = useState<Ifit[]>([]);

  // Remove workout from Today Plan
  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((prev) => {
      return prev.filter((fit) => fit.id !== id);
    });
  };

  // Remove workout from Saved
  const removeFromSaveLater = (id: number) => {
    setSaveLater((prev) => {
      return prev.filter((fit) => fit.id !== id);
    });
  };

  const sharedData = {
    todayPlan,
    setTodayPlan,

    saveLater,
    setSaveLater,

    removeFromTodayPlan,
    removeFromSaveLater,
  };

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
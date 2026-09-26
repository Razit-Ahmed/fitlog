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

  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((prev) => prev.filter((fit) => fit.id !== id));
  };

  const removeFromSaveLater = (id: number) => {
    setSaveLater((prev) => prev.filter((fit) => fit.id !== id));
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
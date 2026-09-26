
import React from "react";
import FitsCard from "./fitsCard";
import { Ifit } from "@/types/fits.type";

const getFits = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const fits = async () => {
  const fitsData = await getFits();

  return (
    <div className="container mx-auto w-10/11 py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {fitsData.map((fit : Ifit) => (
  <FitsCard key={fit.id} fit={fit} />
))}

      </div>
    </div>
  );
};

export default fits;
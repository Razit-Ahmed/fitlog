import React from "react";
import FitsCard from "@/components/fitsCard";
import { Ifit } from "@/types/fits.type";

const getFits = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

  console.log("Status:", res.status);
  console.log("Content-Type:", res.headers.get("content-type"));

  const text = await res.text();

  console.log("API Response:", text);

  return JSON.parse(text);
};

const Fits = async () => {
  const fitsData = await getFits();

  return (
    <div className="container mx-auto w-10/11 py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fitsData.map((fit: Ifit) => (
          <FitsCard key={fit.id} fit={fit} />
        ))}
      </div>
    </div>
  );
};

export default Fits;
"use client";

import Image from "next/image";
import React from "react";

interface BirdInitDetailProps {
  birdId?: string;
  sex?: string;
  ageRange?: string;
  image: string;
  hatchDate?: string;
  mutation?: string;
  mutationRate?: string;
  superReproduct?: string;
  isAlive?: string;
  featherColor?: string;
  weight?: string;
}

const BirdInitDetail = ({
  birdId,
  sex,
  ageRange,
  image,
  hatchDate,
  mutation,
  mutationRate,
  superReproduct,
  isAlive,
  featherColor,
  weight,
}: BirdInitDetailProps) => {
  return (
    <div className="w-full  border-2 h-[50%]">
      <div className="flex space-x-8">
        <div>
          <Image
            src={image}
            alt="image"
            height={130}
            width={130}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-1 justify-between mt-2 ">
          <div className="">
            <h2>1</h2>
            <h2>2</h2>
          </div>
          <div className="">
            <h2>3</h2>
            <h2>4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdInitDetail;

"use client";

import Image from "next/image";
import React from "react";
import Noimage from '../public/assets/images/noimage.jpg'

interface BirdInitDetailProps {
  birdId?: string;
  sex?: string;
  ageRange?: string;
  image: string;
  hatchDate?: string;
  mutation?: string;
  mutationRate?: number;
  superReproduct?: number;
  isAlive?: string;
  featherColor?: string;
  weight?: number;
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
    <div className="w-full  border-2 h-[50%] ml-2">
      <div className="flex space-x-8">
        <div>
          {image ?
            <Image
              src={image}
              alt="image"
              height={130}
              width={130}
              className="rounded-lg"
            /> :
            <Image
              src="/assets/images/noimage.jpg"
              alt="image"
              height={130}
              width={130}
              className="rounded-lg"
            />}
        </div>

        <div className="flex flex-1 justify-between mt-2 ">
          <div className="">
            <p><strong>ID chim:</strong> {birdId}</p>
            <p><strong>Giới tính:</strong> {sex == "FEMALE" ? "Mái" : "Trống"}</p>
            <p><strong>Tỉ lệ đột biến:</strong> {mutationRate != null
              ? `${mutationRate}%`
              : "Chưa có thông tin"}</p>
            <p><strong>Tính trạng đột biến:</strong>   {mutation != null
              ? `${mutation}%`
              : "Chưa có thông tin"}</p>
          </div>
          <div className="">
            <p><strong>Tỉ lệ sinh sản thành công:</strong> {superReproduct != null
              ? `${superReproduct}%`
              : "Chưa có thông tin"}</p>
            <p><strong>Màu lông:</strong> {featherColor}</p>
            <p><strong>Cân nặng:</strong> {weight} gam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdInitDetail;

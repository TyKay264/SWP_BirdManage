import { Router } from "@/node_modules/next/router";
import React from "react";
import BirdChild from "../BirdFamilyTree/BirdChild";
import MainGeneration from "../BirdFamilyTree/MainGeneration";
import Parent from "../BirdFamilyTree/Parent";
import NotificationCard from "../CageId/NotificationCard";
import Link from "next/link";

type BirdType = {
  id?: string;
  bird_type?: string;
  isMale?: string;
  hatch_date: string;
  swingBranchDate: string;
  adultBirdDate: string;
  father_id?: string;
  mother_id?: string;
  cageid?: string;
  isAlive?: boolean;
  ageRange?: string;
  mutationRate?: number;
  mutation?: string;
  weight?: number;
  featherColor?: string;
  image?: string;
  grandfather_father_id?: string;


  grandfather_mother_id?: string;


  grandmother_father_id?: string;


  grandmother_mother_id?: string;
};

const Profile = ({
  id,
  bird_type,
  isMale,
  hatch_date,
  swingBranchDate,
  adultBirdDate,
  father_id,
  mother_id,
  cageid,
  isAlive,
  ageRange,
  mutationRate,
  mutation,
  weight,
  featherColor,
  image,
  grandfather_father_id,


  grandfather_mother_id,


  grandmother_father_id,


  grandmother_mother_id
}: BirdType) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title ">Thông tin</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form>
            <div className="row">
              <div className="image col-xl-4">
                <div className="flex justify-center items-center">
                  <div className="w-[300px] h-[300px] mt-3">
                    <img src={image ? image : "/assets/images/noimage.jpg"} alt="image" className="rounded-md " />
                  </div>
                </div>
              </div>

              <div className="col-xl-8 ">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">ID chim:</label>
                  <div className="grow pl-2.5">{id}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Loài chim:</label>
                  <div className="grow pl-2.5">{bird_type}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Giới tính:</label>
                  <div className="grow pl-2.5">{isMale}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Ngày nở:</label>
                  <div className="grow pl-2.5">{hatch_date}</div>
                </div>

                {/* <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Father Id:</label>
                  <div className="grow pl-2.5">{father_id}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Mother Id:</label>
                  <div className="grow pl-2.5">{mother_id}</div>
                </div> */}

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%] ">Mã lồng:</label>
                  {cageid ? (
                    <div className="grow pl-2.5">{cageid}</div>
                  ) : (
                    <div className="grow pl-2.5 text-danger">Chưa vào lồng</div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Tình trạng:</label>
                  {isAlive ? (
                    <div className="grow pl-2.5 text-success">Còn sống</div>
                  ) : (
                    <div className="grow pl-2.5 text-danger">Đã chết</div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Lứa tuổi:</label>
                  <div className="grow pl-2.5">{ageRange}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">
                    Tỉ lệ con non đã đột biến:
                  </label>
                  <div className="grow pl-1.5">{mutationRate ? (
                    <div className="grow pl-1.5">{mutationRate}%</div>
                  ) : (
                    <div className="grow pl-1.5">Không có thông tin</div>
                  )}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Tính trạng đột biến:</label>
                  {mutation ? (
                    <div className="grow pl-2.5">{mutation}</div>
                  ) : (
                    <div className="grow pl-2.5">Không có đột biến</div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Cân nặng:</label>
                  <div className="grow pl-2.5">{weight} (g)</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Màu lông:</label>
                  {featherColor ? (
                    <div className="grow pl-2.5">{featherColor}</div>
                  ) : (
                    <div className="grow pl-2.5">Chưa xác định</div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>


      <div className="card">
        {/* <h3 className="card-title text-[red]">Sơ đồ phả hệ ( Family Tree )</h3> */}
        <div className="card-header mt-5">
          <h4 className="mt-3">Thông tin phả hệ</h4>
        </div>

        <div className="flex flex-col items-center space-y-8 my-5">
          {/* Grandparents Bird */}
          <div className="flex space-x-8">
            {/* Father's Father Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-blue-300 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {grandfather_father_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Ông nội</div>
            </div>
            {/* Mother's Father Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-pink-200 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {grandmother_father_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Bà nội</div>
            </div>

            {/* Father's Mother Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-blue-300 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {grandfather_mother_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Ông ngoại</div>
            </div>
            {/* Mother's Mother Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-pink-200 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {grandmother_mother_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Bà ngoại</div>
            </div>
          </div>
          {/* Line connecting parents to current bird */}
          <div className="w-1 h-24 bg-black mx-6"></div>
          {/* Parents Bird */}
          <div className="flex space-x-8">
            {/* Father Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-blue-300 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {father_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Cha</div>
            </div>
            {/* Mother Bird */}
            <div className="flex flex-col items-center space-y-4">
              <div className="border border-2 border-black w-48 h-48 rounded-full bg-pink-200 flex items-center justify-center">
                {/* Bird content */}
                <div>
                  <div className="text-center break-words">
                    ID: {mother_id}
                  </div>
                  <div className="text-center break-words">
                    LOẠI: {bird_type}
                  </div>
                </div>
              </div>
              <div className="text-center">Mẹ</div>
            </div>
          </div>
          {/* Line connecting current bird to parents */}
          <div className="w-1 h-8 bg-black mx-6"></div>
          {/* Current Bird */}
          <div className="flex items-center space-x-4">
            <div className="border border-2 border-black w-48 h-48 rounded-full bg-green-300 flex items-center justify-center">
              {/* Bird content */}
              <div>
                <div className="text-center break-words">
                  ID: {id}
                </div>
                <div className="text-center break-words">
                  LOẠI: {bird_type}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">Chim hiện tại</div>
        </div>




      </div>

      <div className="row">
        {/* <div className="col-md-6 col-lg-4">
          <Parent />
        </div>
        <div className="col-md-6 col-lg-4">
          <MainGeneration />
        </div>
        <div className="col-md-6 col-lg-4">
          <BirdChild />
        </div> */}

        <div className="col-md-6 col-lg-4 mx-5">
          <NotificationCard
            hatch_date={hatch_date}
            swingBranchDate={swingBranchDate}
            adultBirdDate={adultBirdDate}
          />
        </div>
      </div>

    </div>
  );
};

export default Profile;

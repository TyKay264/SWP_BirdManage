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

      <div></div>
      <div className="card-footer">
        {/* <h3 className="card-title text-[red]">Sơ đồ phả hệ ( Family Tree )</h3> */}
        <div className="card-header mt-5">
          <h4 className="mt-3">Thông tin phả hệ</h4>
        </div>
        <div className="flex align-baseline">
          <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center rounded-[15px] bg-blue-300 ">
            <div className="flex justify-content-center align-items-center mt-[9%] justify-evenly">
              <div className="fas fa-venus text-center "></div>
              <div>
                <div className="text-center break-words ">
                  ID CHIM BỐ :
                  <Link href={`/bird/${father_id}`}>
                    {father_id}{" "}
                  </Link>
                </div>
                <div className="text-center break-words">
                  LOẠI : {bird_type}
                </div>
              </div>
            </div>
          </div>
          {/* className="flex border-t-dashed border-[3px] border-black w-[25%] */}
          <hr
            style={{
              display: "flex",
              borderTop: "3px dashed black",
              margin: "0 10px",
              width: "20%",
              marginTop: "9%",
            }}
          />
          <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center rounded-[15px] bg-pink-200 ">
            <div className="flex justify-content-center align-items-center mt-[9%] justify-evenly">
              <div className="fas fa-mars text-center "></div>
              <div>
                {/* //onClick={() => Router.push(`/bird/${ID}`)} */}
                <div className="text-center break-words">
                  ID CHIM MẸ :
                  <Link href={`/bird/${father_id}`}>
                    {mother_id}{" "}
                  </Link>
                </div>
                <div className="text-center break-words">
                  LOẠI : {bird_type}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              borderLeft: "1px solid black",
              height: "15vh",
              marginLeft: "41%",
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center ml-[26%] mt-[1%] rounded-[15px] bg-yellow-200">
              <div className="text-center break-words mt-[15%]">
                ID CHIM : {id}{" "}
              </div>
              <div className="text-center break-words">
                --------------Chim hiện tại------------
              </div>
            </div>
          </div>
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

        <div className="col-md-6 col-lg-4">
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

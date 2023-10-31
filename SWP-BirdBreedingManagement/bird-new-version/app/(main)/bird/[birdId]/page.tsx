"use client";
import Profile from "@/components/BirdId/Profile";
import BreadScrum from "@/components/BreadScrum";
// import { birds } from '@/data/data'

import format from "date-fns/format";
import vi from "date-fns/locale/vi";
import React, { useEffect, useState } from "react";
import NotificationCard from "@/components/CageId/NotificationCard";
import useBirdId from "@/hooks/useBirdId";
import Loading from "@/components/LoadingComponent";

const BirdIdPage = () => {
  const { bird, loading } = useBirdId();

  if (!loading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );

  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <BreadScrum
              title="Thông Tin Chích Chòe"
              subRouteTitle="bird"
              subTitle1="Tất Cả Chích Chòe"
              subTitle2="Thông Tin Chích Chòe"
            />
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <Profile
                    key={bird?.birdId}
                    id={bird?.birdId}
                    bird_type={bird?.birdTypeName}
                    isMale={bird?.sex}
                    hatch_date={
                      bird?.hatchDate
                        ? format(new Date(bird?.hatchDate), "do-M-yyyy", {
                          locale: vi,
                        })
                        : "Chưa xác định"
                    }
                    swingBranchDate={
                      bird?.swingBranchDate
                        ? format(new Date(bird?.swingBranchDate), "do-M-yyyy", {
                          locale: vi,
                        })
                        : "Chưa xác định"
                    }
                    adultBirdDate={
                      bird?.adultBirdDate
                        ? format(new Date(bird?.adultBirdDate), "do-M-yyyy", {
                          locale: vi,
                        })
                        : "Chưa xác định"
                    }
                    father_id={bird?.father?.birdId}
                    mother_id={bird?.mother?.birdId}
                    cageid={bird?.cageId}
                    isAlive={bird?.isAlive}
                    ageRange={bird?.ageRange}
                    mutationRate={bird?.mutationRate}
                    mutation={bird?.mutation}
                    weight={bird?.weight}
                    featherColor={bird?.featherColor}
                    image={bird?.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdIdPage;

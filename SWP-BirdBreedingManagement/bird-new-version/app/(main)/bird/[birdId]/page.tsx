"use client";
import Profile from "@/components/BirdId/Profile";
import BreadScrum from "@/components/BreadScrum";
// import { birds } from '@/data/data'
import useBirds from "@/hooks/useBirds";

import { useParams } from "next/navigation";
import format from "date-fns/format";
import vi from "date-fns/locale/vi";
import React from "react";
import NotificationCard from "@/components/CageId/NotificationCard";

const BirdIdPage = () => {
  const params = useParams();
  const { birds, loading } = useBirds();

  if (!loading) return <div>...Loading</div>;
  const IdFilter = birds.find((bird) => bird.birdId === params.birdId);
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
                    key={IdFilter?.birdId}
                    id={IdFilter?.birdId}
                    bird_type={IdFilter?.birdType?.name}
                    isMale={IdFilter?.sex}
                    hatch_date={
                      IdFilter?.hatchDate
                        ? format(new Date(IdFilter?.hatchDate), "do-M-yyyy", {
                          locale: vi,
                        })
                        : "N/A"
                    }
                    // father_id={IdFilter?.father_id}
                    // mother_id={IdFilter?.mother_id}
                    cageid={IdFilter?.cage?.cageId}
                    isAlive={IdFilter?.isAlive}
                    ageRange={IdFilter?.ageRange}
                    mutationRate={IdFilter?.mutationRate}
                    mutation={IdFilter?.mutation}
                    weight={IdFilter?.weight}
                    featherColor={IdFilter?.featherColor}
                  // image = {IdFilter?.image}
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

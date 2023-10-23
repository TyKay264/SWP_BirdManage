"use client";

import BreadScrum from "@/components/BreadScrum";
import CageDiagramList from "@/components/CageDiagram/CageDiagramList";
import Loading from "@/components/LoadingComponent";
import useCages from "@/hooks/useCage";
import React from "react";

const CageDiagramPage = () => {
  const { cages, loading } = useCages();
  const CageFilterLocationB = cages.filter(
    (cage) => cage.location.charAt(0) === "B"
  );

  if (!loading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );

  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={cages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CageDiagramPage;

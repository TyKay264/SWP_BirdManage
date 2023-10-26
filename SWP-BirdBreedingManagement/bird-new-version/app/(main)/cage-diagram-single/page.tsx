"use client";

import BreadScrum from "@/components/BreadScrum";
import CageDiagramList from "@/components/CageDiagramSingle/CageDiagramList";
import useCages from "@/hooks/useCage";
import React from "react";

const CageDiagramSinglePage = () => {
  const { cages, loading } = useCages();

  const CageFilterLocationA = cages.filter(
    (cage) => cage.location.charAt(0) === "A"
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
              <CageDiagramList cages={CageFilterLocationA} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CageDiagramSinglePage;

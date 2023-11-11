"use client";

import BreadScrum from "@/components/BreadScrum";
import CageDiagramList from "@/components/CageDiagramSingle/CageDiagramList";
import Loading from "@/components/LoadingComponent";
import useCages from "@/hooks/useCage";
import React from "react";
import { Cage } from "@/type";
import { fetchCages } from "@/apis/page";
import { useQuery } from "@tanstack/react-query";
const CageDiagramSinglePage = () => {
  const { data: cages, isLoading: cageListLoading } = useQuery<Cage[]>({
    queryKey: ["cages"],
    queryFn: fetchCages,
  });

  if (cageListLoading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );
  if (!cages) return null;
  const CageFilterLocationA = cages.filter(
    (cage: Cage) => cage.location.charAt(0) === "A"
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

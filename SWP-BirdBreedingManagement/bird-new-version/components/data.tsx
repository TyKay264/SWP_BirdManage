"use client";

import BreadScrum from "@/components/BreadScrum";
import CageDiagramList from "@/components/CageDiagram/CageDiagramList";
import Loading from "@/components/LoadingComponent";
import useCages from "@/hooks/useCage";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCages } from "@/apis/page";
import { Cage } from "@/type";
const CageDiagramPage = () => {
  // const { cages, loading } = useCages();
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
  const CageFilterLocationB = cages.filter(
    (cage: Cage) => cage.location.charAt(0) === "B"
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
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Sơ Đồ Lồng"
                subRouteTitle="cage-diagram"
                subTitle1="Sơ Đồ Lồng"
              />
              <CageDiagramList cages={CageFilterLocationB} />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CageDiagramPage;

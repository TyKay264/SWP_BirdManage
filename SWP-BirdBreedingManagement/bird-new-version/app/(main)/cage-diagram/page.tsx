import BreadScrum from "@/components/BreadScrum";
import CageDiagramList from "@/components/CageDiagram/CageDiagramList";
import React from "react";

const page = () => {
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
              <CageDiagramList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

import BreadScrum from "@/components/BreadScrum";
import React from "react";
import AddProcessForm from "@/components/Form/AddProcessForm";

const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Tạo Quá Tình"
                subRouteTitle="cr-process"
                subTitle1="Tạo Quá Tình"
              />

              <div className="row">
                <div className="col-md-12">
                  <div className="card"><AddProcessForm /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

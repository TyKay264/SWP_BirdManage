

import BreadScrum from "@/components/BreadScrum";
import BirdTable from "@/components/Table/BirdTable";
import React from "react";


const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
            <BreadScrum title='Tất Cả Chích Chòe ' subRouteTitle='bird' subTitle1='Tất Cả Chích Chòe'/>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title">Danh Sách Chích Chòe</h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/add-bird"
                            className="btn btn-primary float-end"
                          >
                            Thêm Chích Chòe
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container"><BirdTable /></div>
                    
                  </div>
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

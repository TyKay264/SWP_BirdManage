import PageTitle from "@/components/Bird/PageTitle";
import Table from "@/components/Bird/Table";
import React from "react";


const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <PageTitle />
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title">Tất Cả Chích Chòe </h4>
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
                    <Table />
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

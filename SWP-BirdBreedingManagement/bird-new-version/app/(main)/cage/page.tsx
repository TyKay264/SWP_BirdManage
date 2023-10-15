
import BreadScrum from '@/components/BreadScrum'
import CageTable from '@/components/Table/CageTable';


import React from 'react'

const AddStaffPage = () => {
    return (
        <>
          <div id="main-wrapper" className="show">
            <div className="content-body">
              <div className="warper container-fluid">
                <div className="all-patients main_container">
                <BreadScrum title='Tất Cả Lồng' subRouteTitle='cage' subTitle1='Tất Cả Lồng'/>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header fix-card">
                          <div className="row">
                            <div className="col-8">
                              <h4 className="card-title">Danh Sách Lồng</h4>
                            </div>
                            <div className="col-4 float-end">
                              <a
                                href="/add-cage"
                                className="btn btn-primary float-end"
                              >
                                Thêm Lồng
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='container'> <CageTable /></div>
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

export default AddStaffPage
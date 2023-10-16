"use client";

import BreadScrum from "@/components/BreadScrum";
import StaffClient from "@/components/Table/StaffTable/StaffClient";
import useStaffs from "@/hooks/useStaffs";

import { StaffColumn } from "@/components/Table/StaffTable/column";

import React from "react";

const StaffPage = () => {

  // step 1 -> data
  const { staffs } = useStaffs();
  console.log(staffs)
  // lay ra 1 object
  const formatStaffs: StaffColumn[] = staffs.map((staff) => ({
    id: staff.id,
    username: staff.username,
    email: staff.email,
    fullname: staff.fullname,
    createdAt: staff.createAt,
    roleId: staff.roleId
  }));


  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Tất Cả Nhân Viên"
                subRouteTitle="staff"
                subTitle1="Tất Cả Nhân Viên"
              />
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title"> Danh Sách Nhân Viên</h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/add-staff"
                            className="btn btn-primary float-end"
                          >
                            Thêm Nhân Viên
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <StaffClient data={formatStaffs} />
                    </div>
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

export default StaffPage;

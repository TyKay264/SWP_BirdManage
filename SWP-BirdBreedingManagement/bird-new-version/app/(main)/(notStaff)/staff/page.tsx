"use client";

import BreadScrum from "@/components/BreadScrum";
import StaffClient from "@/components/Table/StaffTable/StaffClient";
import useStaffs from "@/hooks/useStaffs";

import { StaffColumn } from "@/components/Table/StaffTable/column";

import React from "react";
import Loading from "@/components/LoadingComponent";
import { useAuth } from "@/context/authContext";
import { useQuery } from "@tanstack/react-query";
import { Staff } from "@/type";
import { fetchUsers } from "@/apis/page";
import Link from "next/link";
const StaffPage = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "ADMIN";
  const isStaff = user?.role === "STAFF";
  // step 1 -> data
  // const { staffs, loading } = useStaffs();

  const { data: staffs, isLoading: userListLoading } = useQuery<Staff[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (userListLoading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );

  // console.log(staffs)
  // lay ra 1 object
  if (!staffs) return null
  const formatStaffs: StaffColumn[] = staffs.map((staff: Staff) => ({
    id: staff.userId,
    username: staff.username,
    email: staff.email,
    fullName: staff.fullName,
    createdAt: staff.createdDate,
    role: staff.role,
    userImage: staff.userImage,
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
                        {isAdmin && (
                          <div className="col-4 float-end">
                            <Link
                              href="/add-staff"
                              className="btn btn-primary float-end"
                            >
                              Thêm Nhân Viên
                            </Link>
                          </div>
                        )}

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

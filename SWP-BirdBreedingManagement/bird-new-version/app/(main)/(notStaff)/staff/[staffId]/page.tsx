"use client";
import BreadScrum from "@/components/BreadScrum";
import Loading from "@/components/LoadingComponent";

import Profile from "@/components/StaffId/Profile";
import useStaffs from "@/hooks/useStaffs";
import { Staff } from "@/type";
// import { staffs } from '@/data/data'
import { useParams } from "next/navigation";
import React from "react";

interface StaffIdPageProps {
  params: {
    staffId: string;
  };
}

const StaffIdPage = ({ params }: StaffIdPageProps) => {
  const { staffs, loading } = useStaffs();

  if (!loading) {
    return <div className="content-body  h-[650px]"><Loading /></div>;
  }

  const IdFilter = staffs.find((item) => item.userId === params.staffId);

  if (!IdFilter) return null;
  console.log(IdFilter);
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <BreadScrum
              title="Thông Tin Nhân Viên"
              subRouteTitle="staff"
              subTitle1="Tất Cả Nhân Viên"
              subTitle2="Thông Tin Nhân Viên"
            />
            <Profile
              userId={IdFilter.userId}
              username={IdFilter.username}
              email={IdFilter.email}
              password={IdFilter?.password}
              fullName={IdFilter.fullName}
              // created_by={IdFilter?.created_by}
              createdDate={IdFilter?.createdDate}
              role={IdFilter.role}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffIdPage;

"use client"
import BreadScrum from '@/components/BreadScrum'

import Profile from '@/components/StaffId/Profile'
import { staffs } from '@/data/data'
import { useParams } from 'next/navigation'
import React from 'react'

const StaffIdPage = () => {
  const params = useParams();

  const IdFilter = staffs.find((staff) => staff.id === params.staffId);

  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <BreadScrum title='Thông Tin Nhân Viên' subRouteTitle='staff' subTitle1='Tất Cả Nhân Viên' subTitle2='Thông Tin Nhân Viên' />
            <Profile
              id={IdFilter?.id}
              username={IdFilter?.username}
              email={IdFilter?.email}
              password={IdFilter?.password}
              fullname={IdFilter?.fullname}
              created_by={IdFilter?.created_by}
              created_date={IdFilter?.created_by}
              role_id={IdFilter?.role_id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffIdPage

import PageTitle from '@/components/StaffId/PageTitle'
import Profile from '@/components/StaffId/Profile'
import React from 'react'

const page = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <PageTitle/>
            <Profile/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
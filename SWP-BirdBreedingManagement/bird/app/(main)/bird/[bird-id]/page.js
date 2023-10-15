import PageTitle from '@/components/BirdId/PageTitle'
import Profile from '@/components/BirdId/Profile'
import React from 'react'

const page = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <PageTitle/>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
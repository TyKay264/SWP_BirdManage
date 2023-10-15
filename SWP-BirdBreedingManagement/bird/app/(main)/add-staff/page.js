import PageTitle from '@/components/AddStaff/PageTitle'
import StaffProfile from '@/components/AddStaff/StaffProfile'
import React from 'react'

const AddStaffPage = () => {
    return (
        <div id="main-wrapper" className="show">
            <div className="content-body">
                <div className="warper container-fluid">
                    <div className="new-patients main_container">
                        <PageTitle />

                        <StaffProfile />


                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddStaffPage
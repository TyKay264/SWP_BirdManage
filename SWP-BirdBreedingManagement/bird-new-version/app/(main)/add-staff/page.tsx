
import BreadScrum from '@/components/BreadScrum'
import AddStaffForm from '@/components/Form/AddStaffForm'
import React from 'react'

const AddStaffPage = () => {
    return (
        <div id="main-wrapper" className="show">
            <div className="content-body">
                <div className="warper container-fluid">
                    <div className="new-patients main_container">
                    <BreadScrum title='Thêm Nhân Viên Mới' subRouteTitle='add-staff' subTitle1='Thêm Nhân Viên Mới'/>

                        <AddStaffForm />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddStaffPage
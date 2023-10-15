

import BreadScrum from '@/components/BreadScrum'
import AddCageForm from '@/components/Form/AddCageForm'
import React from 'react'

const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="new-patients main_container">
                        <BreadScrum title='Thêm Lồng Mới' subRouteTitle='add-cage' subTitle1='Thêm Lồng Mới'/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                 <AddCageForm/>       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End section content */}

            </div>
        </>

    )
}

export default page
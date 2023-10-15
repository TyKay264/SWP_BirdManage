


import CageProfile from '@/components/AddCage/CageProfile'
import PageTitle from '@/components/AddCage/PageTitle'
import React from 'react'

const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="new-patients main_container">
                            <PageTitle />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                 <CageProfile/>       
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
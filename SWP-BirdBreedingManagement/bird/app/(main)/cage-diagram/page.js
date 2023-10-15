import CageDiagramList from '@/components/CageDiagram/CageDiagramList'
import React from 'react'

const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">

                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="all-patients main_container">
                            <div className="row page-titles mx-0">
                                <div className="col-sm-6 p-md-0">
                                    <div className="welcome-text">
                                        <h4 className="text-primary">SƠ ĐỒ LỒNG</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <a href="/doctor-list.html">Doctors List</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <CageDiagramList />
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default page
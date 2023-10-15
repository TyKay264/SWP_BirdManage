import PageTilte from '@/components/Staff/PageTitle'
import Table from '@/components/Staff/Table'
import React from 'react'

const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="all-patients main_container">
                            <PageTilte />
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header fix-card">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h4 className="card-title"> Danh Sách Nhân Viên </h4>
                                                </div>
                                                <div className="col-4 float-end">
                                                    <a
                                                        href="/add-staff"
                                                        className="btn btn-primary float-end"
                                                    >
                                                       Thêm Nhân Viên
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <Table />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>           
        </>
    )
}

export default page
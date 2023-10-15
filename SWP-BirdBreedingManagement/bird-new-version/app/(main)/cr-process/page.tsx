import BreadScrum from '@/components/BreadScrum'
import DropSelect from '@/components/Cr-Process/DropSelect'
import Table from '@/components/Cr-Process/Table'
import React from 'react'


const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="all-patients main_container">
                        <BreadScrum title='Tạo Quá Tình' subRouteTitle='cr-process' subTitle1='Tạo Quá Tình'/>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header fix-card">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h4 className="card-title"> Chọn Lồng Phù Hợp </h4>
                                                </div>
                                                <DropSelect />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="doctor-info-content">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                                                        <li className="nav-item col-md-6" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="contact-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#contact"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="contact"
                                                                aria-selected="false"
                                                            >
                                                                Chim Chích Chòe Lửa
                                                            </button>
                                                        </li>
                                                        <li className="nav-item col-md-6" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="contact-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#contact"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="contact"
                                                                aria-selected="false"
                                                            >
                                                                Chim Chích Chòe Than
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="myTabContent">

                                                        <div
                                                            className="tab-pane fade"
                                                            id="contact"
                                                            role="tabpanel"
                                                            aria-labelledby="contact-tab"
                                                        >
                                                            <Table />
                                                        </div>


                                                        <div
                                                            className="tab-pane fade"
                                                            id="contact"
                                                            role="tabpanel"
                                                            aria-labelledby="contact-tab"
                                                        >
                                                            <Table />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                    
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
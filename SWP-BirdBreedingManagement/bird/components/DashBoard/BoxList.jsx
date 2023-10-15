import React from 'react'

const BoxList = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="widget card card-primary bg-card1" style={{ backgroundColor: 'rgb(220,53,69)' }} >
                    <div className="card-body">
                        <div className="media text-center">
                            <span>
                                <i className="fas fa-calendar-check fa-2x" />
                            </span>
                            <div className="media-body">
                                <span className="text-white">Earnings</span>
                                <h3 className="mb-0 text-white">7699</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="widget card card-danger bg-card2 " style={{ backgroundColor: 'rgb(115,102,255)' }}>
                    <div className="card-body">
                        <div className="media text-center">
                            <span>
                                <i className="fas fa-user-nurse fa-2x" />
                            </span>
                            <div className="media-body">
                                <span className="text-white">Patients</span>
                                <h3 className="mb-0 text-white">400</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="widget card card-primary bg-card3" style={{ backgroundColor: 'CadetBlue' }}>
                    <div className="card-body">
                        <div className="media text-center">
                            <span>
                                <i className="fas fa-user-plus fa-2x" />
                            </span>
                            <div className="media-body">
                                <span className="text-white">Appointments</span>
                                <h3 className="mb-0 text-white">1360</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-6">
                <div className="widget card card-primary bg-card4" style={{ backgroundColor: 'purple' }}>
                    <div className="card-body">
                        <div className="media text-center">
                            <span>
                                <i className="fas fa-database fa-2x" />
                            </span>
                            <div className="media-body">
                                <span className="text-white">Total Revenue</span>
                                <h3 className="mb-0 text-white">$6500</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BoxList
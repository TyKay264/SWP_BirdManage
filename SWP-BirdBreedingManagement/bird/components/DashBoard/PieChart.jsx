import React from 'react'

const PieChart = () => {
    return (
        <div className="card shadow widget1">
            <div className="card-header">
                <h4 className="card-title">Thống kê giai đoạn</h4>
            </div>
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <canvas id="chart3" width="100%" height={220} />
                    </div>
                    <div className="col-lg-10">
                        <ul className="d-flex justify-content-between m-t-30">
                            <li className="content-widget text-center">
                                <p className="mb-0 fs-14 text-muted">Stroke</p>
                                <h4 className="mb-0 fs-20 text-dark-gray">
                                    8952
                                </h4>
                            </li>
                            <li className="content-widget text-center">
                                <p className="mb-0 fs-14 text-muted">Diabetes</p>
                                <h4 className="mb-0 fs-20 text-dark-gray">
                                    7458
                                </h4>
                            </li>
                            <li className="content-widget text-center">
                                <p className="mb-0 fs-14 text-muted">Cirrhosis</p>
                                <h4 className="mb-0 fs-20 text-dark-gray">
                                    3254
                                </h4>
                            </li>
                            <li className="content-widget text-center">
                                <p className="mb-0 fs-14 text-muted">
                                    Tuberculosis
                                </p>
                                <h4 className="mb-0 fs-20 text-dark-gray">
                                    3254
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart
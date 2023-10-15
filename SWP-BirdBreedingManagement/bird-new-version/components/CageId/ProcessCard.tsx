import React from 'react'

const ProcessCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Quá trình giai đoạn</h4>
            </div>
            <div className="card-body">
                <ul className="widget-progress list-unstyled">
                    <li>
                        <h4 className="mb-1">Chim Non</h4>
                        <div className="progress">
                            <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                50%
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 className="mb-1">Chim Chuyền</h4>
                        <div className="progress">
                            <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "35%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                35%
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 className="mb-1"> Trưởng Thành </h4>
                        <div className="progress">
                            <div
                                className="progress-bar bg-secondary"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                45%
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProcessCard
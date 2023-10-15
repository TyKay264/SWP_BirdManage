import Link from 'next/link'
import React from 'react'

const BirdCard = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between doctor-info-details">
                            <div className="d-flex left-content">
                                <div className="media align-self-start">
                                    <img
                                        alt="image"
                                        className="rounded-circle shadow"
                                        width={90}
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/98/Copsychus_malabaricus_male_-_Khao_Yai.jpg"
                                    />
                                    <div className="pulse-css" />
                                </div>
                                <div className="media-body">
                                    <Link href='/bird/id'><h2 className="mb-2">ID vòng: B001</h2></Link>
                                    <p className="mb-md-2 mb-sm-4 mb-2">Loại : chích chòe lửa</p>
                                    <p className="mb-md-2 mb-sm-4 mb-2">Giới tính : Trống</p>

                                    <div className="star-review">
                                        <i className="fa fa-star text-orange" />
                                        <i className="fa fa-star text-orange" />
                                        <i className="fa fa-star text-orange" />
                                        <i className="fa fa-star text-orange" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="btn-group btn-group-style-1">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="form-content">
                                    <a href="#">
                                        <span className="ml-2">Appointment</span>
                                    </a>
                                    <a href="#">
                                        <span className="ml-2">Edit</span>
                                    </a>
                                    <a href="#">
                                        <span className="ml-2">Delete </span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdCard
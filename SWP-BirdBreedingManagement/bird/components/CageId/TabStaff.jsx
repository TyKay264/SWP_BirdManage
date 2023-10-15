import React from 'react'

const TabStaff = () => {
    return (
        <div className="row m-t-30 m-l-0 m-r-0">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Thông tin nhân viên</h4>
                </div>
                <div className="card-body">
                    <div className="basic-form">
                        <form>
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="form-group row widget-3">
                                        <div className="form-input">
                                            <label
                                                className="labeltest"
                                                htmlFor="file-ip-1"
                                            >
                                                <span>
                                                    {" "}
                                                    Drop image here or click to upload.{" "}
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                id="file-ip-1"
                                                accept="image/*"
                                                onchange="showPreview(event);"
                                            />
                                            <div className="preview">
                                                <img
                                                    id="file-ip-1-preview"
                                                    src="#"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mobile No."
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Choose A Gnder</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Date Of Birth"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Languages</option>
                                            <option>Arabic</option>
                                            <option>English</option>
                                            <option>French</option>
                                            <option>German</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Nationality</option>
                                            <option>Maroc</option>
                                            <option>Algerier</option>
                                            <option>Tunisie</option>
                                            <option>Egypt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4"></div>
                                <div className="col-xl-4">
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <select className="form-control form-select">
                                                <option>City</option>
                                                <option>Rabat</option>
                                                <option>Kenitra</option>
                                                <option>Casablanca</option>
                                                <option>Marakesh</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Zip"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4"></div>
                                <div className="col-xl-8">
                                    <div className="form-group">
                                        <select className="form-control ">
                                            <option>User role</option>
                                            <option>Surgery</option>
                                            <option>Gastroenterologist</option>
                                            <option>Endocrinologist</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            placeholder="Address"
                                            rows={4}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            placeholder="Bio:"
                                            rows={4}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-primary float-end"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TabStaff
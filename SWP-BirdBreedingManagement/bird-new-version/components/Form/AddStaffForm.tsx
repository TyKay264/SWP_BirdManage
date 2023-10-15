import React from 'react'

const AddStaffForm = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Điền Thông Tin </h4>
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
                                                    ... {" "}
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                id="file-ip-1"
                                                accept="image/*"
                                                // onchange="showPreview(event);"
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
                            <div className="col-xl-8">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
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
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="FullName"
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-select">
                                        <option>Nhân Viên</option>
                                        <option>Manage</option>                                     
                                    </select>
                                </div>
                                <div className="form-group text-right ">
                                    <button
                                        type="submit"
                                        className="btn btn-primary float-end"
                                    >
                                        Thêm Nhân Viên
                                    </button>
                                </div>

                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStaffForm
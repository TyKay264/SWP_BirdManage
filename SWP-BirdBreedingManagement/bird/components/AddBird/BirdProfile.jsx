import React from 'react'

const BirdProfile = () => {
    return (
        <div className="card">
            <div className="card-header ">
                <h4 className="card-title ">Điền Thông Tin</h4>
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
                            <div className="col-xl-8">

                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Date Of Birth"
                                    />
                                </div>
                              
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Weight(g)"
                                        min="0"
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-select">
                                        <option>Chim Non</option>
                                        <option>Chim Chuyền Cành</option>
                                        <option>Chim Trưởng Thành</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-select">
                                        <option>Chim Chích Chòe Than</option>
                                        <option>Chim Chích Chòe Lửa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-select">
                                        <option>Trống</option>
                                        <option>Mái</option>
                                    </select>
                                </div>


                                <div className="form-group text-right ">
                                    <button
                                        type="submit"
                                        className="btn btn-primary float-end"
                                    >
                                        Thêm Chích Chòe
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

export default BirdProfile
import React from 'react'

const PageTilte = () => {
    return (
        <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                    <h4 className="text-primary">Thêm Thông Tin Chim</h4>
                </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a>Thêm Thông Tin Chim</a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PageTilte
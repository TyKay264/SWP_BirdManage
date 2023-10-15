import React from 'react'

const MainGeneration = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Đời ...</h4>
            </div>
            <div className="card-body">
                <ul className="widget-timline list-unstyled">
                    <li>
                        <div className="timeline-dots border-success" />
                        <h4 className="mb-1" style={{ color : "red" }}>L03</h4>
                        <p className="mb-0">CHÍNH</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-danger" />
                        <h4 className="mb-1">L04</h4>
                        <p className="mb-0">Chim anh em</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-primary" />
                        <h4 className="mb-1">L05</h4>
                        <p className="mb-0">Chim anh em</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default MainGeneration
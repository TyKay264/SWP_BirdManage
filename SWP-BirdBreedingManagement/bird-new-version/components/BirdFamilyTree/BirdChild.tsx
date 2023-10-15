import React from 'react'

const BirdChild = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Đời con</h4>
            </div>
            <div className="card-body">
                <ul className="widget-timline list-unstyled">
                    <li>
                        <div className="timeline-dots border-success" />
                        <h4 className="mb-1">L008</h4>
                        <p className="mb-0">Chim con</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-danger" />
                        <h4 className="mb-1">L009</h4>
                        <p className="mb-0">Chim mẹ</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-primary" />
                        <h4 className="mb-1">L010</h4>
                        <p className="mb-0">Chim con</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BirdChild
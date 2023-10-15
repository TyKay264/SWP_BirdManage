import React from 'react'

const Parent = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Đời cha mẹ</h4>
            </div>
            <div className="card-body">
                <ul className="widget-timline list-unstyled">
                    <li>
                        <div className="timeline-dots border-success" />
                        <h4 className="mb-1">L01</h4>
                        <p className="mb-0">Chim cha</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-danger" />
                        <h4 className="mb-1">L02</h4>
                        <p className="mb-0">Chim mẹ</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Parent
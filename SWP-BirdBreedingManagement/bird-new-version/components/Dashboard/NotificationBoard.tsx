import { Bird, Reproduction_process } from "@/type";
import Link from "next/link";
import React from "react";

interface NotificationBoardProps {
    reproduction_process: Reproduction_process[];
}

const NotificationBoard: React.FC<NotificationBoardProps> = ({ reproduction_process }) => {
    return (
        <div className="card shadow widget-2">
            <div className="card-header">
                <h4 className="card-title">Các lồng đang trong mốc quan trọng</h4>
            </div>
            <div className="card-body">
                <div className="panel-body widget-media main-scroll nicescroll-box">
                    <ul className="list-group list-unstyled">
                        {reproduction_process &&
                            reproduction_process.map((process) => (
                                <li
                                    key={process.cageId}
                                    className="list-group-item d-flex justify-content-between align-items-center media"
                                >
                                    <div className="d-flex">
                                        {/* <div className="img-patient">
                                            <img
                                                src={bird.image || "/assets/images/noimage.jpg"}
                                                className="rounded-circle"
                                                alt="bird"
                                            />
                                        </div> */}
                                        <div className="media-body">
                                            <h4 className="mb-0">ID chim : {process.cageId}</h4>
                                            {/* <div>{bird.birdType.name}</div> */}
                                            <span>{process.pairingDate || "N/A"}</span>
                                        </div>
                                    </div>
                                    <Link key={process.cageId} href={`/cage/${process.cageId}`}>
                                        <button
                                            type="button"
                                            className="ms-btn-icon btn-success"
                                            name="button"
                                        >
                                            <i className="fas fa-arrow-right" />
                                        </button>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NotificationBoard;

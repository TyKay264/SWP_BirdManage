// import { Bird, Reproduction_process } from "@/type";
import { Bird, Bird_reproduction } from "@/type";

import Link from "next/link";
import React from "react";

interface NotificationBoardProps {
    bird_reproduction: Bird_reproduction[];
}

const NotificationBoard: React.FC<NotificationBoardProps> = ({ bird_reproduction }) => {
    return (
        <div className="card shadow widget-2">
            <div className="card-header">
                <h4 className="card-title">Cảnh báo mốc quan trọng</h4>
            </div>
            <div className="card-body">
                <div className="panel-body widget-media main-scroll nicescroll-box">
                    <ul className="list-group list-unstyled">
                        {bird_reproduction &&
                            bird_reproduction.map((process) => (
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
                                            <div>
                                                <span>
                                                    Ngày quá trình bắt đầu :
                                                    <span className="text-success">
                                                        {process.pairingDate
                                                            ? new Date(process.pairingDate).toLocaleDateString('en-GB')
                                                            : "N/A"}
                                                    </span>
                                                </span>
                                            </div>
                                            <h4 className="mb-0">ID lồng : {process.cageId}</h4>
                                            {/* <div>{bird.birdType.name}</div> */}
                                            <span>
                                                Dự kiến mốc sắp tới :
                                                <span className={process.nextDate && new Date(process.nextDate) > new Date() ? "text-warning" : "text-danger"}>
                                                    {process.nextDate
                                                        ? new Date(process.nextDate).toLocaleDateString('en-GB')
                                                        : "N/A"}
                                                </span>
                                            </span>
                                            <h4 className="my-2 ">Mốc sắp tới:
                                                <span className="text-info"> {process.desc === "hatch" ? "Trứng nở" : process.desc === "swing" ? "chuyền cành" : process.desc === "adult" ? "chim trưởng thành" : ""}</span></h4>




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

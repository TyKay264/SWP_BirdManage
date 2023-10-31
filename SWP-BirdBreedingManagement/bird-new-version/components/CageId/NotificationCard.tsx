import React from "react";

interface NotificationCardProps {
  hatch_date: string | null;
  swingBranchDate: string | null;
  adultBirdDate: string | null;
}

const NotificationCard = ({
  hatch_date,
  swingBranchDate,
  adultBirdDate,
}: NotificationCardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Giai đoạn thực tế</h4>
      </div>
      <div className="card-body">
        <ul className="widget-timline list-unstyled">
          <li>
            <div className="timeline-dots border-success" />
            <h4 className="mb-1">Giai đoạn chim non</h4>
            <p className="mb-0">{hatch_date}</p>
          </li>
          <li>
            <div className="timeline-dots border-danger" />
            <h4 className="mb-1">Giai đoạn chim chuyền</h4>
            <p className="mb-0">{swingBranchDate} </p>
          </li>
          <li>
            <div className="timeline-dots border-primary" />
            <h4 className="mb-1">Giai đoạn trưởng thành</h4>
            <p className="mb-0">{adultBirdDate}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationCard;

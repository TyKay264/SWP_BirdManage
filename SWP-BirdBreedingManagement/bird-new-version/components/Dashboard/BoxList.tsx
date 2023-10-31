import React from "react";

interface BoxListProps {
  totalBird: number;
  totalEgg: number;
  totalUser: number;
  totalProcess: number;
}

const BoxList: React.FC<BoxListProps> = (props) => {
  const { totalBird, totalEgg, totalUser, totalProcess } = props;
  return (
    <div className="row">
      <div className="col-sm-6 col-xl-3 col-lg-6">
        <div
          className="widget card card-primary bg-card1"
          style={{ backgroundColor: "rgb(220,53,69)" }}
        >
          <div className="card-body">
            <div className="media text-center">
              <span>
                <i className="fas fa-crow fa-2x" />
              </span>
              <div className="media-body">
                <span className="text-white">Chim</span>
                <h3 className="mb-0 text-white">{totalBird}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3 col-lg-6">
        <div
          className="widget card card-danger bg-card2 "
          style={{ backgroundColor: "rgb(220,53,69)" }}
        >
          <div className="card-body">
            <div className="media text-center">
              <span>
                <i className="fas fa-egg fa-2x" />
              </span>
              <div className="media-body">
                <span className="text-white">Trứng</span>
                <h3 className="mb-0 text-white">{totalEgg}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3 col-lg-6">
        <div
          className="widget card card-primary bg-card3"
          style={{ backgroundColor: "rgb(220,53,69)" }}
        >
          <div className="card-body">
            <div className="media text-center">
              <span>
                <i className="fas fa-users fa-2x" />
              </span>
              <div className="media-body">
                <span className="text-white">Nhân viên</span>
                <h3 className="mb-0 text-white">{totalUser}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3 col-lg-6">
        <div
          className="widget card card-primary bg-card4"
          style={{ backgroundColor: "rgb(220,53,69)" }}
        >
          <div className="card-body">
            <div className="media text-center">
              <span>
                <i className="fas fa-retweet fa-2x" />
              </span>
              <div className="media-body">
                <span className="text-white">Quá trình</span>
                <h3 className="mb-0 text-white">{totalProcess}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxList;

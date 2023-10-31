import { Bird } from "@/type";
import Link from "next/link";
import React from "react";

interface NewBirdListProps {
  top5Birds: Bird[];
}

const NewBirdList: React.FC<NewBirdListProps> = ({ top5Birds }) => {
  return (
    <div className="card shadow widget-2">
      <div className="card-header">
        <h4 className="card-title">Chích Chòe mới</h4>
      </div>
      <div className="card-body">
        <div className="panel-body widget-media main-scroll nicescroll-box">
          <ul className="list-group list-unstyled">
            {top5Birds &&
              top5Birds.map((bird) => (
                <li
                  key={bird.birdId}
                  className="list-group-item d-flex justify-content-between align-items-center media"
                >
                  <div className="d-flex">
                    <div className="img-patient">
                      <img
                        src={bird.image || "/assets/images/noimage.jpg"}
                        className="rounded-circle"
                        alt="bird"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="mb-0">ID chim : {bird.birdId}</h4>
                      <div>{bird.birdType.name}</div>
                      <span>{bird.ageRange || "Không có"}</span>
                    </div>
                  </div>
                  <Link key={bird.birdId} href={`/bird/${bird.birdId}`}>
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

export default NewBirdList;

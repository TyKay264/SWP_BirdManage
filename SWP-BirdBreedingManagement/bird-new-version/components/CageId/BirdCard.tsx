import Link from "next/link";
import React from "react";
import ChangeCageForm from "../Form/ChangeCageForm";
import MoveCageForm from "../Form/MoveCageForm";
import Image from "next/image";

interface BirdCardProps {
  birdRole?: string;
  birdId?: string;
  image?: string;
  birdType?: string;
  showMoveBirdCage?: boolean;
  // sex?: string;
}


const BirdCard = ({ birdRole, birdId, image, birdType, showMoveBirdCage }: BirdCardProps) => {
  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between doctor-info-details">
            <div className="d-flex left-content justify-between">
              <div className="media align-self-start">
                {/* <img
                  alt="image"
                  className="rounded-circle shadow"
                  width={90}
                  src={image}
                /> */}
                <div className="w-24 h-24 relative ">
                  <Image src={image ? image : "/assets/images/noimage.jpg"} alt="image" fill className="rounded-full shadow-sm" />

                </div>
                <div className="pulse-css" />
              </div>
              <div className="media-body">
                <Link href={`/bird/${birdId}`}>
                  <h2 className="mb-2">ID chim: {birdId}</h2>
                </Link>
                <p className="mb-md-2 mb-sm-4 mb-2">Loại : {birdType}</p>
                {/* <p className="mb-md-2 mb-sm-4 mb-2">Giới tính : {sex}</p> */}
                {showMoveBirdCage && <div className="">
                  <MoveCageForm birdId={birdId} />
                </div>}

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BirdCard;

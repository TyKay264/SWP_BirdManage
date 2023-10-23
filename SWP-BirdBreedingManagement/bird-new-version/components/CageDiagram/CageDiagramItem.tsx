"use client";

import Link from "next/link";
import React, { useState } from "react";

interface CageDiagramItemProps {
  id: string;
  name?: string;
  specialty?: string;
  imageSrc?: string;
  crowIcons: number;
  eggIcons?: number;
  process?: boolean;
}

const CageDiagramItem = ({
  id,
  name,
  specialty,
  imageSrc,
  crowIcons,
  eggIcons,
}: CageDiagramItemProps) => {
  const crowIconsCount = crowIcons || 0;
  const eggIconsCount = eggIcons || 0;
  const updatedImageSrc =
    crowIconsCount === 0 && eggIconsCount === 0
      ? "https://i.vimeocdn.com/portrait/1274237_640x640" // Replace with the path to your empty image
      : "/assets/images/logo-chim.png";

  // Create an array of the specified length for crow and egg icons
  const crowIconsArray = Array.from({ length: crowIconsCount }, (_, index) => (
    <i key={index} className="fa fa-crow text-orange" />
  ));

  const eggIconsArray = Array.from({ length: eggIconsCount }, (_, index) => (
    <i key={index} className="fa fa-egg text-gray" />
  ));

  return (
    <div className="col-sm-6 col-lg-4">
      <Link href={`/cage/${id}`}>
        <div className="timeline-panel card p-4 mb-4">
          {!crowIcons && !eggIcons ? (
            <div className="flex justify-between mx-10">
              <div className="media">
                <img src={updatedImageSrc} alt="image" />
              </div>
            </div>
          ) : (
            <div className="flex justify-between mx-10">
              <div className="flex justify-start mr-8">
                <div className="media">
                  <img src={updatedImageSrc} alt="image" />
                </div>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4">
                <div className="text-sm text-black">Id trống:123 </div>
                <div className="text-sm text-black">Id mái: 123</div>
              </div>
            </div>
          )}

          <div className="media-body">
            <a href="#">
              <h4 className="mb-2">{name}</h4>
            </a>
            <p className="mb-2">{specialty}</p>
            <div className="star-review">
              <div className="flex items-center justify-center space-x-10">
                {!!crowIcons && (
                  <div className="flex justify-center items-center space-x-1">
                    <i key={crowIcons} className="fa fa-crow text-orange" />
                    <span>x</span>
                    <span className="text-black text-lg">{crowIcons}</span>
                  </div>
                )}
                {!!eggIcons && (
                  <div className="flex justify-center items-center space-x-1">
                    <i key={eggIcons} className="fa fa-egg text-gray" />
                    <span>x</span>
                    <span className="text-black text-lg">{eggIcons}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="btn-group-style-1">
            <div className="btn-content">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </button>
              <div className="dropdown-menu">
                <div className="form-content">
                  <a href="#">
                    <span className="ml-2">View Profile</span>
                  </a>
                  <a href="#">
                    <span className="ml-2">Edit</span>
                  </a>
                  <a href="#">
                    <span className="ml-2">Delete </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CageDiagramItem;

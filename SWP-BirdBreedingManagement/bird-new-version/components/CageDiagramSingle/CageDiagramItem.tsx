"use client";

import Link from "next/link";
import React, { useState } from "react";

interface CageDiagramItemProps {
  cageId: string;
  location?: string;
  available?: boolean;
  quantity?: number;
}

const CageDiagramItem = ({
  cageId,
  location,
  available,
  quantity,
}: // cock,
  // hen
  CageDiagramItemProps) => {
  const updatedImageSrc =
    quantity === 0
      ? "https://i.vimeocdn.com/portrait/1274237_640x640"
      : "/assets/images/logo-chim.png";

  return (
    <div className="col-sm-6 col-lg-4">
      <Link href={`/cage/${cageId}`}>

        <div className="timeline-panel card p-4 mb-4">
          <div className="flex justify-between items-center mx-8">
            <div className="flex relative">
              <div className="media">
                <img src={updatedImageSrc} alt="image" />
              </div>
              {available && (
                <span className="relative flex h-3 w-3 top-0 right-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}

              {!available && (
                <span className="relative flex h-3 w-3 top-0 right-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              )}
            </div>

            <div className="media-body">
              <h4 className="mb-2">
                <span className="text-sm no-underline">
                  {" "}
                  Vị trí lồng: {location}{" "}
                </span>
              </h4>
              <div className="star-review">
                <div className="flex items-center justify-center space-x-10">
                  {!!quantity && (
                    <div className="flex justify-center items-center space-x-1">
                      <i key={quantity} className="fa fa-crow text-orange" />
                      <span>x</span>
                      <span className="text-black text-lg">{quantity}</span>
                    </div>
                  )}
                </div>
              </div>
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
      </Link>
    </div>
  );
};

export default CageDiagramItem;

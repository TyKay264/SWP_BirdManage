"use client";

import React from "react";
import CageDiagramItem from "./CageDiagramItem";
import useCages from "@/hooks/useCage";
const CageDiagramList = () => {
  const { cages } = useCages();
  const CageFilterLocationB = cages.filter(
    (cage) => cage.location.charAt(0) === "B"
  );

  console.log(CageFilterLocationB);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="widget-media list-doctors best-doctor">
          <div className="timeline row">
            {cages.map((item) => (
              <CageDiagramItem
                key={item.cageId}
                id={item.cageId}
                crowIcons={item.quantity}
                eggIcons={item.reproductionProcess?.totalEgg}

                // name={bird.name}
                // specialty={bird.specialty}
                // imageSrc={bird.imageSrc}
                // starReview={item}
                // process={bird.process}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CageDiagramList;

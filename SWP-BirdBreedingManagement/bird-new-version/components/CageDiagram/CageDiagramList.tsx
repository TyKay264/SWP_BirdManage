"use client";

import React from "react";
import CageDiagramItem from "./CageDiagramItem";
import { Cage } from "@/type";

interface CageDiagramListProps {
  cages: Cage[];
}
const CageDiagramList = ({ cages }: CageDiagramListProps) => {
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
              // cock={item.reproductionProcess?.cockId}
              // hen={item.reproductionProcess?.henId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CageDiagramList;

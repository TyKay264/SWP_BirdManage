"use client";

import React from "react";
import AddBirdChildForm from "../Form/AddBirdChildForm";
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
            <AddBirdChildForm />

            {cages.map((cage) => (
              <CageDiagramItem
                key={cage.cageId}
                cageId={cage.cageId}
                location={cage.location}
                available={cage.available}
                quantity={cage.quantity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CageDiagramList;

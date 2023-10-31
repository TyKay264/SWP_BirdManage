"use client";

import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/useModal";
import { EggColumn } from "../Table/EggTable/column";
import EggClient from "../Table/EggTable/EggClient";
import useCages from "@/hooks/useCage";
import format from "date-fns/format";
import vi from "date-fns/locale/vi";

const ViewProcessForm = () => {
  const { cages, loading } = useCages();
  const { isOpen, type, onClose, data } = useModal();

  const listEgg = data.process?.eggList;

  const isModalOpen = isOpen && type === "ViewProcessForm";

  if (!listEgg) {
    return null;
  }
  const formatEggs: EggColumn[] = listEgg?.map((item) => ({
    birdId: item.bird?.birdId,
    cages: cages,
    reproductionId: item.reproductionId,
    eggStatus: item?.eggStatus,
    eggLaidDate: item.eggLaidDate
      ? format(new Date(item.eggLaidDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expEggHatchDate: item.expEggHatchDate
      ? format(new Date(item.expEggHatchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expSwingBranchDate: item.expSwingBranchDate
      ? format(new Date(item.expSwingBranchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expAdultBirdDate: item.expAdultBirdDate
      ? format(new Date(item.expAdultBirdDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
  }));

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:min-w-[900px] max-h-[600px] text-sm overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Thông tin quá trình</DialogTitle>
        </DialogHeader>
        <EggClient data={formatEggs} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewProcessForm;

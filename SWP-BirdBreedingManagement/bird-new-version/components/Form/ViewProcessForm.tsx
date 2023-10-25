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

const ViewProcessForm = () => {
  const { isOpen, type, onClose, data } = useModal();

  const listEgg = data.process?.eggList;

  const isModalOpen = isOpen && type === "ViewProcessForm";

  if (!listEgg) return null;

  const formatEggs: EggColumn[] = listEgg?.map((item) => ({
    id: item.reproductionId,
    eggStatus: item.eggStatus,
    eggLaidDate: item.eggLaidDate,
    actEggHatchDate: item.actEggHatchDate,
    actSwingBranch: item.actSwingBranch,
    actAdultBirdDate: item.actAdultBirdDate,
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

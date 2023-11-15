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
import { Bird_reproduction } from "@/type";
import { useQuery } from "@tanstack/react-query";
import { fetchCageById, fetchProcessById } from "@/apis/page";
import BirdReProductionClient from "../Table/BirdReProductionTable/BirdReProductionClient";

const ViewProcessForm = () => {
  const { isOpen, type, onClose, data } = useModal();
  const {
    data: processData,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["processData", data.processId as string],
    queryFn: () => fetchProcessById(data.processId as string),
  });

  if (error) return null;
  if (loading) return null;

  const listEgg = processData?.eggsList;

  const isModalOpen = isOpen && type === "ViewProcessForm";
  if (!listEgg) {
    return null;
  }
  const formatEggs: EggColumn[] = listEgg?.map((item: Bird_reproduction) => ({
    birdId: item.bird?.birdId,
    reproductionId: item.reproductionId,
    eggStatus: item?.eggStatus,
    eggLaidDate: item.eggLaidDate
      ? format(new Date(item.eggLaidDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,

    actEggHatchDate: item.bird?.actEggHatchDate
      ? format(new Date(item.bird?.actEggHatchDate), "do-M-yyyy", {
          locale: vi,
        })
      : "N/A", // Provide a default value if hatchDate is undefined,
    actSwingBranchDate: item.bird?.actSwingBranchDate
      ? format(new Date(item.bird?.actSwingBranchDate), "do-M-yyyy", {
          locale: vi,
        })
      : "N/A", // Provide a default value if hatchDate is undefined,
    actAdultBirdDate: item.bird?.actAdultBirdDate
      ? format(new Date(item.bird?.actAdultBirdDate), "do-M-yyyy", {
          locale: vi,
        })
      : "N/A", // Provide a default value if hatchDate is undefined,
  }));

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:min-w-[1024px] max-h-[600px] text-sm overflow-y-auto overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Thông tin quá trình</DialogTitle>
        </DialogHeader>
        <BirdReProductionClient data={formatEggs} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewProcessForm;

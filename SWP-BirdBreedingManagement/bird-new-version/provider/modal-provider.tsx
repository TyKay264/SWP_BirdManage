"use client";

import { useEffect, useState } from "react";

import EditStaffForm from "@/components/Form/EditStaffForm";
import EditBirdForm from "@/components/Form/EditBirdForm";
import EditCageForm from "@/components/Form/EditCageForm";
import ViewProcessForm from "@/components/Form/ViewProcessForm";
import AddBirdChildForm from "@/components/Form/AddBirdChildForm";
import ChangeCageForm from "@/components/Form/ChangeCageForm";
import AddBirdToSingleCage from "@/components/Form/AddBirdToSingleCage";
import MoveCageForm from "@/components/Form/MoveCageForm";
import SeparatePairForm from "@/components/Form/SeparatePairForm";
import { DeleteProcessModal } from "@/components/Form/DeleteProcessForm";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SeparatePairForm />
      <MoveCageForm />
      {/* <AddBirdToSingleCage /> */}
      <ChangeCageForm />
      <EditStaffForm />
      <EditBirdForm />
      <EditCageForm />
      <ViewProcessForm />
      <AddBirdChildForm />
      <DeleteProcessModal />
    </>
  );
};

export default ModalProvider;

"use client";

import { useEffect, useState } from "react";

import EditStaffForm from "@/components/Form/EditStaffForm";
import EditBirdForm from "@/components/Form/EditBirdForm";
import EditCageForm from "@/components/Form/EditCageForm";
import ViewProcessForm from "@/components/Form/ViewProcessForm";
import AddBirdChildForm from "@/components/Form/AddBirdChildForm";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>

      <EditStaffForm />
      <EditBirdForm />
      <EditCageForm />
      <ViewProcessForm />
      <AddBirdChildForm />

    </>
  );
};

export default ModalProvider;

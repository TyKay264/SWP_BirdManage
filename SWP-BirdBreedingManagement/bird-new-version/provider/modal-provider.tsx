"use client";

import { useEffect, useState } from "react";

import EditStaffForm from "@/components/Form/EditStaffForm";
import EditBirdForm from "@/components/Form/EditBirdForm";
import EditCageForm from "@/components/Form/EditCageForm";

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
    </>
  );
};

export default ModalProvider;

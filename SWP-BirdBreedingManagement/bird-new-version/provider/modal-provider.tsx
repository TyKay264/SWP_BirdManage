"use client";

import EditBirdForm from '@/components/Form/EditBirdForm';
import { useEffect, useState } from "react";

import EditStaffForm from '@/components/Form/EditStaffForm'

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
        </>
    )
}

export default ModalProvider
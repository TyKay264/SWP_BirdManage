"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bird } from "@/type";

const useBirdNotCage = () => {
    const [birds, setBirds] = useState<Bird[] | []>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBirds = async () => {
            try {
                const res = await axios.get(
                    "https://bird-swp.azurewebsites.net/api/birds/outcast"
                );

                setBirds(res.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBirds();
    }, []);

    return { birds, loading };
};

export default useBirdNotCage;

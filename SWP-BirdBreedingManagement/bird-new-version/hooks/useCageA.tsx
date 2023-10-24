"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cage } from "@/type";

const useCageA = () => {
    const [cages, setCages] = useState<Cage[] | []>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch cage
        const fetchCages = async () => {
            try {
                const res = await axios.get(
                    "https://bird-swp.azurewebsites.net/api/cages/location/A?available=true"
                );

                setCages(res.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };

        //Gọi lại hàm để chạy
        fetchCages();
    }, []);

    return { cages, loading };
};

export default useCageA;

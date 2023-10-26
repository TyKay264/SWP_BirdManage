"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BirdTypeProccess, Cage } from "@/type";

const useBirdTypeProcess = () => {
    const [birdTypeProcess, setBirdTypeProcess] = useState<BirdTypeProccess[] | []>([]);
    const [cageProcess, setCageProcess] = useState<Cage[] | []>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch process
        const fetchProcesses = async () => {
            try {
                const res = await axios.get(
                    "https://bird-swp.azurewebsites.net/api/reproductionprocess/init"
                );

                setBirdTypeProcess(res.data.birdType);
                setCageProcess(res.data.cage)
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };

        //Gọi lại hàm để chạy
        fetchProcesses();
    }, []);

    return { birdTypeProcess, cageProcess, loading };
};

export default useBirdTypeProcess;

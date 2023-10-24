"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Reproduction_process } from "@/type";

const useProcesses = () => {
  const [processes, setProcesses] = useState<Reproduction_process[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // CALL API (GET)

    // Hàm fetch process
    const fetchProcesses = async () => {
      try {
        const res = await axios.get(
          "https://bird-swp.azurewebsites.net/api/reproductionprocess/view"
        );

        setProcesses(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    //Gọi lại hàm để chạy
    fetchProcesses();
  }, []);

  return { processes, loading };
};

export default useProcesses;

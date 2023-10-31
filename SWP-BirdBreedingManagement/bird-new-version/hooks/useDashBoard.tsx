"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bird } from "@/type";
import { DashBoard } from "@/type";

const useDashBoard = () => {
  const [dashboard, setDashboard] = useState<DashBoard | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://bird-swp.azurewebsites.net/");

        setDashboard(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { dashboard, loading };
};

export default useDashBoard;

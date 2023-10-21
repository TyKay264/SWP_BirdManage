"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Staff } from "@/type";

const useStaffs = () => {
  const [staffs, setStaffs] = useState<Staff[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // CALL API (GET)

    // Hàm fetch staff
    const fetchStaffs = async () => {
      try {
        const res = await axios.get(
          "https://bird-swp.azurewebsites.net/api/users/staffs/view"
        );

        // const res = await axios.get("http://localhost:3001/staffs")

        setStaffs(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    //Gọi lại hàm để chạy
    fetchStaffs();
  }, []);

  return { staffs, loading };
};

export default useStaffs;

"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import React from "react";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      closeOnClick={true}
      pauseOnHover={false}
    />
  );
};

export default ToastProvider;

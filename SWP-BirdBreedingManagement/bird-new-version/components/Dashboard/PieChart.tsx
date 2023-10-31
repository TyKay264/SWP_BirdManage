"use client";

import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Trưởng thành", "Chuyền", "Non", "Trứng"],
  datasets: [
    {
      label: "Thông tin ",
      data: [639, 285, 147, 360],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const PieChart = () => {
  return (
    <div className="card shadow widget1">
      <div className="card-header">
        <h4 className="card-title">Thống kê giai đoạn</h4>
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          <Pie data={data} />
          <div className="col-lg-10">
            <ul className="d-flex justify-content-between m-t-30">
              <li className="content-widget text-center">
                <p className="mb-0 fs-14 text-muted">Trưởng thành</p>
                <h4 className="mb-0 fs-20 text-dark-gray">639</h4>
              </li>
              <li className="content-widget text-center">
                <p className="mb-0 fs-14 text-muted">Chuyền</p>
                <h4 className="mb-0 fs-20 text-dark-gray">285</h4>
              </li>
              <li className="content-widget text-center">
                <p className="mb-0 fs-14 text-muted">Non</p>
                <h4 className="mb-0 fs-20 text-dark-gray">147</h4>
              </li>
              <li className="content-widget text-center">
                <p className="mb-0 fs-14 text-muted">Trứng</p>
                <h4 className="mb-0 fs-20 text-dark-gray">360</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

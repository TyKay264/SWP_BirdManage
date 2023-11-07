"use client";
import BreadScrum from "@/components/BreadScrum";
import NotificationCard from "@/components/CageId/NotificationCard";
import BoxList from "@/components/Dashboard/BoxList";
import ColumnChartCustom from "@/components/Dashboard/ColumnChartCustom";
// import ColumnChart from "@/components/Dashboard/ColumnChart";
import NewBirdList from "@/components/Dashboard/NewBirdList";
import NotificationBoard from "@/components/Dashboard/NotificationBoard";
import PieChart from "@/components/Dashboard/PieChart";
import WaveChart from "@/components/Dashboard/WaveChart";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/context/authContext";
import useDashBoard from "@/hooks/useDashBoard";
import { DashBoard } from "@/type";
import Image from "next/image";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Home() {
  const { dashboard } = useDashBoard();



  const formatDashboard = {
    totalBird: dashboard?.totalBird,
    totalMutation: dashboard?.totalMutation,
    totalProcess: dashboard?.totalProcess,
    totalEgg: dashboard?.totalEgg,
    totalUser: dashboard?.totalUser,
    totalAdult: dashboard?.totalAdult,
    totalSwingbranch: dashboard?.totalSwingbranch,
    totalBaby: dashboard?.totalBaby,
    top5Birds: dashboard?.top5Birds,
    totalEggIn7Day: dashboard?.totalEggIn7Day,
    bird_reproduction: dashboard?.bird_reproduction,
    reproduction_process: dashboard?.reproduction_process,
  };
  console.log(formatDashboard.top5Birds);
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="container">Dashboard</h4>
              </div>
            </div>
            <div className="new-patients main_container">
              <BoxList
                totalBird={formatDashboard?.totalBird ?? 0}
                totalEgg={formatDashboard?.totalEgg ?? 0}
                totalUser={formatDashboard?.totalUser ?? 0}
                totalProcess={formatDashboard?.totalProcess ?? 0}
              />

              <div className="row">
                <div className="col-lg-8">
                  {/* <WaveChart /> */}
                  <div className="card shadow widget1">
                    <div className="card-header">
                      <h4 className="card-title">Thống kê trứng</h4>
                      <span className="subtitle">7 Ngày gần nhất</span>
                    </div>
                    <div className="card-body">
                      <canvas id="chart1" width="100%" height={40} />
                      <ColumnChartCustom totalEggIn7Day={formatDashboard.totalEggIn7Day || { perDay: [] }} />
                    </div>
                  </div>

                </div>
                <div className="col-lg-4">
                  <NewBirdList top5Birds={formatDashboard?.top5Birds ?? []} />
                </div>

                <div className="col-lg-6 h-50">
                  <NewBirdList top5Birds={formatDashboard?.top5Birds ?? []} />

                  <NotificationBoard bird_reproduction={formatDashboard?.bird_reproduction ?? []} />
                </div>
                <div className="col-lg-6">
                  <div className="h-30 w-30">
                    <div className="">
                      <PieChart
                        totalAdult={formatDashboard?.totalAdult ?? 0}
                        totalSwingbranch={formatDashboard?.totalSwingbranch ?? 0}
                        totalBaby={formatDashboard?.totalBaby ?? 0}
                        totalEgg={formatDashboard?.totalEgg ?? 0}
                      />
                    </div>
                  </div>
                </div>

              </div>{/* kết thúc chia row */}



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

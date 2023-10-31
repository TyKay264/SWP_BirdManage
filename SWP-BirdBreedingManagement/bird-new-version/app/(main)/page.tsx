"use client";
import BreadScrum from "@/components/BreadScrum";
import BoxList from "@/components/Dashboard/BoxList";
import ColumnChart from "@/components/Dashboard/ColumnChart";
import NewBirdList from "@/components/Dashboard/NewBirdList";
import PieChart from "@/components/Dashboard/PieChart";
import WaveChart from "@/components/Dashboard/WaveChart";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import useDashBoard from "@/hooks/useDashBoard";
import { DashBoard } from "@/type";
import Image from "next/image";

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
                  <WaveChart />
                </div>
                <div className="col-lg-4">
                  <NewBirdList />
                </div>
                <div className="col-lg-6">
                  <PieChart
                  // totalAdult={formatDashboard?.totalAdult ?? 0}
                  // totalSwingbranch={formatDashboard?.totalSwingbranch ?? 0}
                  // totalBaby={formatDashboard?.totalBaby ?? 0}
                  // totalEgg={formatDashboard?.totalEgg ?? 0}
                  />
                </div>
                <div className="col-lg-6">
                  <ColumnChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

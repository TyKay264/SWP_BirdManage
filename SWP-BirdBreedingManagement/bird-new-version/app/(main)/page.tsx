
import BreadScrum from "@/components/BreadScrum";
import BoxList from "@/components/Dashboard/BoxList";
import ColumnChart from "@/components/Dashboard/ColumnChart";
import NewBirdList from "@/components/Dashboard/NewBirdList";
import PieChart from "@/components/Dashboard/PieChart";
import WaveChart from "@/components/Dashboard/WaveChart";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
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

              <BoxList/>

              <div className="row">
                <div className="col-lg-8">

                  <WaveChart/>

                </div>
                <div className="col-lg-4">

                  <NewBirdList/>

                </div>
                <div className="col-lg-6">

                  <PieChart/>

                </div>
                <div className="col-lg-6">

                  <ColumnChart/>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  );
}

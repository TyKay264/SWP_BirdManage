import BreadCrum from "@/components/BreadCrum";
import BoxList from "@/components/DashBoard/BoxList";
import ColumnChart from "@/components/DashBoard/ColumnChart";
import NewBirdList from "@/components/DashBoard/NewBirdList";
import PieChart from "@/components/DashBoard/PieChart";
import WaveChart from "@/components/DashBoard/WaveChart";
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
            <BreadCrum title="Good morning" name="someone here" content="Test title" />
            <div className="new-patients main_container">

              <BoxList />

              <div className="row">
                <div className="col-lg-8">

                  <WaveChart />

                </div>
                <div className="col-lg-4">

                  <NewBirdList />

                </div>
                <div className="col-lg-6">

                  <PieChart />

                </div>
                <div className="col-lg-6">

                  <ColumnChart />

                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card shadow">
                    <div className="card-header">
                      <h4 className="card-title">
                        Appointment List | 04 Aug 2022
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <h1>Hello</h1>
                        <table id="example1" className="display nowrap">
                          <thead>
                            <tr>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Patient</th>
                              <th>Address</th>
                              <th>Phone</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>07:00</td>
                              <td>01 Jun 2022</td>
                              <td> Michael R Sheets </td>
                              <td> 1468 Selah Way - Rabat</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>09:00</td>
                              <td>05 Jun 2022</td>
                              <td> Michael R Sheets</td>
                              <td> 1468 Selah Way - Oujda</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>

                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  );
}

"use client";

import BabyBirdCard from "@/components/CageId/BabyBirdCard";
import BirdCard from "@/components/CageId/BirdCard";
import NotificationCard from "@/components/CageId/NotificationCard";
import ProcessCard from "@/components/CageId/ProcessCard";
import Table from "@/components/Table/BirdTable";
import React from "react";
import SpStaff from "@/components/CageId/SpStaff";
import EggManage from "@/components/CageId/EggManage";
import BreadScrum from "@/components/BreadScrum";
import useCages from "@/hooks/useCage";
import { useParams } from "next/navigation";

const CageIdPage = () => {
  const { cages, loading } = useCages();
  const params = useParams();

  const FindCageById = cages.find((cage) => cage.cageId === params.cageId);
  const FilterCageByRole = FindCageById?.birdReproduction?.filter(
    (item) =>
      item.reproductionRole === "MOTHER" || item.reproductionRole === "FATHER"
  );
  console.log(FindCageById);

  if (!loading) return <div className="content-body">....loading</div>;

  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="main_container">
          <BreadScrum
            title="Thông tin lồng"
            subRouteTitle="cage"
            subTitle1="Tất Cả Lồng"
            subTitle2="Thông Tin Lồng"
          />
          {FilterCageByRole?.map((item) => (
            <BirdCard
              birdRole={item.reproductionRole}
              birdId={item.bird?.birdId}
              image={item.bird?.image}
              birdType={item.bird?.birdType?.name}
            />
          ))}

          <div className="row">
            <div className="col-lg-12">
              <div className="doctor-info-content">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item col-md-4" role="presentation">
                    <button
                      className="nav-link  active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Thông Tin Quá Trình
                    </button>
                  </li>
                  <li className="nav-item col-md-4" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Chim non
                    </button>
                  </li>
                  <li className="nav-item col-md-4" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Quản lý trứng
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="card m-t-30">
                      <div className="card-body">
                        <p className=" flex justify-between">
                          <div>
                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                NGÀY GHÉP CẶP :
                              </label>
                              <div className="grow pl-2.5 pb-1.5">
                                11/10/2023
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                NGÀY ĐẺ TRỨNG :
                              </label>
                              <div className="grow pl-2.5 pb-1.5">
                                30/10/2023
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                TỔNG SỐ TRỨNG:
                              </label>
                              <div className="grow pl-2.5 pb-1.5">10</div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                SỐ TRỨNG THẤT BẠI :
                              </label>
                              <div className="grow pl-2.5 pb-1.5">2</div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">MÃ LỒNG :</label>
                              <div className="grow pl-2.5 pb-1.5">A001</div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                GIAI ĐOẠN :
                              </label>
                              <div className="grow pl-2.5 pb-2 basis-[100%]">
                                ẤP TRỨNG
                              </div>
                            </div>
                          </div>

                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="card m-t-30">
                      <div className="card-body">
                        <div className="row">
                          <BabyBirdCard />
                          <BabyBirdCard />
                          <BabyBirdCard />
                          <BabyBirdCard />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <EggManage />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow">
                                <div className="card-header fix-card">
                                    <div className="row">
                                        <div className="col-8">
                                            <h4 className="card-title">Danh sách chim </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="container"><Table /></div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        //table here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="row">
            {/* <div className="col-md-6 col-lg-4">
              <NotificationCard />
            </div> */}
            <div className="col-md-6 col-lg-4">
              {FindCageById?.user && (
                <SpStaff
                  id={FindCageById.user.userId}
                  name={FindCageById.user.fullName}
                  role={FindCageById.user.role}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CageIdPage;

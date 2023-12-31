"use client";

import BabyBirdCard from "@/components/CageId/BabyBirdCard";
import BirdCard from "@/components/CageId/BirdCard";
import NotificationCard from "@/components/CageId/NotificationCard";
import ProcessCard from "@/components/CageId/ProcessCard";
import React, { useContext, useState } from "react";
import SpStaff from "@/components/CageId/SpStaff";
import BreadScrum from "@/components/BreadScrum";
import useCages from "@/hooks/useCage";
import { EggColumn } from "@/components/Table/EggTable/column";
import EggClient from "@/components/Table/EggTable/EggClient";
import Loading from "@/components/LoadingComponent";
import AddEggForm from "@/components/Form/AddEggForm";
import format from "date-fns/format";
import vi from "date-fns/locale/vi";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import AddBirdToSingleCage from "@/components/Form/AddBirdToSingleCage";
import SeparatePairForm from "@/components/Form/SeparatePairForm";
import useCageId from "@/hooks/useCageId";
import AddStaffMangeForm from "@/components/Form/AddStaffManageForm";
import { useModal } from "@/hooks/useModal";
import { useAuth } from "@/context/authContext";

const CageIdPage = ({ params }: { params: { cageId: string } }) => {
  // const { cages, loading } = useCages();
  const { cage, loading } = useCageId();
  const { onOpen } = useModal();
  const router = useRouter();
  const { user } = useAuth();
  const isStaff = user?.role === "STAFF";

  const [showMoveBirdCage, setShowMoveBirdCage] = useState(false);

  // const FindCageById = cages.find((cage) => cage.cageId === params.cageId);
  //Data for process' info
  const failEggs = cage?.birdReproduction?.filter(
    (item) => item.eggStatus === "Hỏng"
  );
  const hatchedEggs = cage?.birdReproduction?.filter(
    (item) => item.eggStatus === "Đã nở"
  );

  const listEgg = cage?.birdReproduction?.filter(
    (item) =>
      item.reproductionRole === "EGG" || item.reproductionRole === "CHILD"
  );

  const FilterCageByRole = cage?.birdReproduction?.filter(
    (item) =>
      item.reproductionRole === "MOTHER" || item.reproductionRole === "FATHER"
  );
  if (!loading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );

  const handleRemove = async () => {
    try {
      await axios.patch(
        `https://bird-swp.azurewebsites.net/api/reproductionprocess/done/${cage?.reproductionProcess?.processId}?emotion=hate`
      );

      router.push("/cage-diagram");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async () => {
    try {
      //https://bird-swp.azurewebsites.net/api/reproductionprocess/done/{id}
      await axios.patch(
        `https://bird-swp.azurewebsites.net/api/reproductionprocess/separate/${cage?.reproductionProcess?.processId}`
      );
      // await axios.patch(`bird-swp.azurewebsites.net/api/cages/${params.cageId}`)

      router.push("/cage-diagram");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cage?.reproductionProcess?.processId);
  if (!cage?.reproductionProcess) {
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

            <div className="m-2">
              <AddBirdToSingleCage />

            </div>

            {/* <AddBirdToSingleCage /> */}

            <div className="row">
              {cage?.bird?.map((item) => (
                <BirdCard
                  key={item.birdId}
                  birdId={item.birdId}
                  image={item.image}
                  birdType={item.birdType?.name}
                  showMoveBirdCage={!showMoveBirdCage}
                />
              ))}
            </div>


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
                        Nhân viên phụ trách
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
                        <div className="card-body ">
                          <div className="col-md-6 col-lg-4">
                            {!isStaff && <AddStaffMangeForm userId={cage?.user?.userId} />
                            }

                            {cage?.user && (
                              <SpStaff
                                id={cage.user.userId}
                                name={cage.user.fullName}
                                role={cage.user.role}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!listEgg) {
    return null;
  }
  const formatEggs: EggColumn[] = listEgg?.map((item) => ({
    birdId: item.bird?.birdId,
    cages: cage,
    actexpEggHatchDate: item.actEggHatchDate,
    reproductionId: item.reproductionId,
    eggStatus: item?.eggStatus,
    eggLaidDate: item.eggLaidDate
      ? format(new Date(item.eggLaidDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expEggHatchDate: item.expEggHatchDate
      ? format(new Date(item.expEggHatchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expSwingBranchDate: item.expSwingBranchDate
      ? format(new Date(item.expSwingBranchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    expAdultBirdDate: item.expAdultBirdDate
      ? format(new Date(item.expAdultBirdDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    actEggHatchDate: item.bird?.actEggHatchDate
      ? format(new Date(item.bird?.actEggHatchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    actSwingBranchDate: item.bird?.actSwingBranchDate
      ? format(new Date(item.bird?.actSwingBranchDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
    actAdultBirdDate: item.bird?.actAdultBirdDate
      ? format(new Date(item.bird?.actAdultBirdDate), "do-M-yyyy", { locale: vi })
      : "N/A", // Provide a default value if hatchDate is undefined,
  }));

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
          {/* <div className="text-center mb-3">
            <Button variant="destructive" onClick={handleRemove}>Kết thúc quá trình</Button>
          </div> */}

          <div className="row">
            {FilterCageByRole?.map((item) => (
              <BirdCard
                key={item.bird?.birdId}
                birdRole={item.reproductionRole}
                birdId={item.bird?.birdId}
                image={item.bird?.image}
                birdType={item.bird?.birdType?.name}
                showMoveBirdCage={showMoveBirdCage}
              // sex={item.bird?.sex}
              />

            ))}
          </div>

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
                      Nhân viên phụ trách
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
                      Thông tin quá trình
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
                      <div className="card-body ">
                        <div className="col-md-6 col-lg-4">
                          {!isStaff && <AddStaffMangeForm userId={cage?.user?.userId} />}

                          {cage?.user && (
                            <SpStaff
                              id={cage.user.userId}
                              name={cage.user.fullName}
                              role={cage.user.role}
                            />
                          )}

                        </div>
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
                      <div className="flex text-center">
                        <div className="text-center mt-3 m-3">
                          <Button variant="destructive" onClick={() => onOpen("DeleteProcess", { processId: cage?.reproductionProcess?.processId })}>
                            Kết thúc quá trình
                          </Button>
                        </div>
                        <div className="text-center m-3">
                          <SeparatePairForm />
                        </div>
                      </div>

                      <div className="card-body">
                        <p className=" flex justify-between">
                          <div>
                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                NGÀY GHÉP CẶP :
                              </label>
                              <div className="grow pl-2.5 pb-1.5 w-80">
                                {cage?.reproductionProcess?.pairingDate
                                  ? format(
                                    new Date(
                                      cage?.reproductionProcess?.pairingDate
                                    ),
                                    "do-M-yyyy",
                                    { locale: vi }
                                  )
                                  : "N/A"}
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                TỔNG SỐ TRỨNG:
                              </label>
                              <div className="grow pl-2.5 pb-1.5">
                                {cage?.reproductionProcess?.totalEgg}
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                SỐ TRỨNG HỎNG :
                              </label>
                              <div className="grow pl-2.5 pb-1.5">
                                {failEggs?.length}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">
                                SỐ TRỨNG ĐÃ NỞ :
                              </label>
                              <div className="grow pl-2.5 pb-1.5">
                                {hatchedEggs?.length}
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[100%]">MÃ LỒNG :</label>
                              <div className="grow pl-2.5 pb-1.5">
                                {cage?.cageId}
                              </div>
                            </div>

                            <div className="flex justify-between items-center mb-2.5">
                              <label className="basis-[300%]">
                                ID QUÁ TRÌNH :
                              </label>
                              <div className="grow pl-2.5 pb-2 basis-[100%]">
                                {cage?.reproductionProcess.processId}
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
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    {listEgg && (
                      <>
                        <AddEggForm cageId={params.cageId} />

                        <EggClient data={formatEggs} />
                      </>
                    )}
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
            {/* <div className="col-md-6 col-lg-4">
              {FindCageById?.user && (
                <SpStaff
                  id={FindCageById.user.userId}
                  name={FindCageById.user.fullName}
                  role={FindCageById.user.role}
                />
              )}
            </div> */}

            {/* <div className="items widget-4 p-4 mb-4">
              <div className="bootstrap-media">
                <div className="d-flex media">
                  <img className="mr-3 img fluid rounded" width={60} src="" alt=""></img>
                  <div className="media-body">
                    <a><h4 className="mt-0 mb-1">MR A</h4></a>
                    <p>some things</p>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default CageIdPage;

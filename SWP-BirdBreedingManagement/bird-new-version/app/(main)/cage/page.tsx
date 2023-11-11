"use client";

import BreadScrum from "@/components/BreadScrum";
import CageClient from "@/components/Table/CageTable/CageClient";
import { CageColumn } from "@/components/Table/CageTable/column";
import useCages from "@/hooks/useCage";
import Loading from "@/components/LoadingComponent";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Cage } from "@/type";
import { fetchCages } from "@/apis/page";

const CagePage = () => {
  // const { cages, loading } = useCages();
  const { data: cages, isLoading: cageListLoading } = useQuery<Cage[]>({
    queryKey: ["cages"],
    queryFn: fetchCages,
  });

  if (cageListLoading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );
  if (!cages) return null;
  const formatCages: CageColumn[] = cages.map((cage: Cage) => ({
    cageId: cage.cageId,
    user: cage?.user?.fullName,
    location: cage.location,
    quantity: cage.quantity,
    available: cage.available,
  }));

  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Tất Cả Lồng"
                subRouteTitle="cage"
                subTitle1="Tất Cả Lồng"
              />
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title">Danh Sách Lồng</h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/add-cage"
                            className="btn btn-primary float-end"
                          >
                            Thêm Lồng
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      {/* <CageTable /> */}
                      <CageClient data={formatCages} />
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
};

export default CagePage;

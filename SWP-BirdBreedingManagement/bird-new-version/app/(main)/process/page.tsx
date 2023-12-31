"use client";
import BreadScrum from "@/components/BreadScrum";
import ProcessClient from "@/components/Table/ProcessTable/ProcessClient";
import { ProcessColumn } from "@/components/Table/ProcessTable/column";
import Loading from "@/components/LoadingComponent";
import useProcesses from "@/hooks/useProcess";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProces } from "@/apis/page";

const ProcessPage = () => {
  // console.log(processes);
  const { data: processes, isLoading } = useQuery({
    queryKey: ["processss"],
    queryFn: fetchProces,
  });

  if (isLoading)
    return (
      <div className="content-body h-[650px]">
        <Loading />
      </div>
    );

  if (!processes) return null;
  // if (!processes) return null;
  const formatProcesses: ProcessColumn[] = processes.map((process) => ({
    id: process.processId,
    motherId: process.henId,
    fatherId: process.cockId,
    cage: process.cageId,
    isDone: process.isDone,

    type: process.birdTypeName,
    eggList: process?.eggsList,
  }));

  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <BreadScrum
                title="Danh Sách Quá Trình"
                subRouteTitle="process"
                subTitle1="Danh Sách Quá Trình"
              />
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title">Tất Cả Quá Trình </h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/cr-process"
                            className="btn btn-primary float-end"
                          >
                            Thêm Quá Trình
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      {/* <ProcessTable /> */}
                      <ProcessClient data={formatProcesses} />
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

export default ProcessPage;

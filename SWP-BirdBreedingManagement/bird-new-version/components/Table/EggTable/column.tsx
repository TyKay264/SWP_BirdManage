"use client";

import { ColumnDef } from "@tanstack/react-table";

// import { CellAction } from "./cell-action";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CellAction } from "./cell-action";
import { Cage } from "@/type";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export type EggColumn = {
  birdId: string;
  reproductionId: string;
  eggStatus: string;
  eggLaidDate: string;

  actEggHatchDate?: string;
  actSwingBranchDate?: string;
  actAdultBirdDate?: string;

  expEggHatchDate?: string;
  expSwingBranchDate?: string;
  expAdultBirdDate?: string;
};

export const columns: ColumnDef<EggColumn>[] = [
  {
    accessorKey: "birdId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "eggLaidDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày đẻ trứng
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

  },
  // {
  //   accessorKey: "expEggHatchDate",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         className="-ml-6 "
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
  //       >
  //         Ngày nở (dự kiến)
  //       </Button>
  //     );
  //   },
  // },
  {
    accessorKey: "actEggHatchDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày nở
        </Button>
      );
    },
    cell: ({ row }) => {

      const isNotActHatchDate = row.original.actEggHatchDate === "N/A"
      return (
        <>
          {isNotActHatchDate ? (
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger asChild>
                  <div className="w-20 bg-yellow-300 h-12 rounded-md text-black">
                    <div className="w-full min-h-full flex items-center justify-center">
                      <span className="">
                        {row.original.expEggHatchDate}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  Ngày nở dự kiến
                </TooltipContent>

              </Tooltip>
            </TooltipProvider>

          ) :
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger asChild>
                  <div className="w-20 bg-green-300 h-12 rounded-md text-black">
                    <div className="w-full min-h-full flex items-center justify-center">
                      <span className="z-50">
                        {row.original.actEggHatchDate}
                      </span>
                    </div>
                  </div >
                </TooltipTrigger>

                <TooltipContent>
                  Ngày nở thực tế
                </TooltipContent>

              </Tooltip>
            </TooltipProvider>
          }


        </>

      )
    }
  },


  {
    accessorKey: "actSwingBranchDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày chuyền cành
        </Button>
      );
    },
    cell: ({ row }) => {

      const isNotActSwingBranch = row.original.actSwingBranchDate === "N/A"
      return (
        <>
          {isNotActSwingBranch ? (
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger asChild>
                  <div className="w-20 bg-yellow-300 h-12 rounded-md text-black">
                    <div className="w-full min-h-full flex items-center justify-center">
                      <span className="">
                        {row.original.expSwingBranchDate}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Ngày thành chim chuyền dự kiến
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          ) : <TooltipProvider >
            <Tooltip >
              <TooltipTrigger asChild>
                <div className="w-20 bg-green-300 h-12 rounded-md text-black">
                  <div className="w-full min-h-full flex items-center justify-center">
                    <span className="">
                      {row.original.actSwingBranchDate}

                    </span>
                  </div>
                </div >
              </TooltipTrigger>

              <TooltipContent>
                Ngày trở thành chim chuyền thực tế
              </TooltipContent>

            </Tooltip>
          </TooltipProvider>}



        </>

      )
    }
  },


  {
    accessorKey: "actAdultBirdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày trưởng thành
        </Button>
      );
    },
    cell: ({ row }) => {

      const isNotActAdultDate = row.original.actAdultBirdDate === "N/A"
      return (
        <>
          {isNotActAdultDate ? (
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger asChild>
                  <div className="w-20 bg-yellow-300 h-12 rounded-md text-black">
                    <div className="w-full min-h-full flex items-center justify-center">
                      <span className="">
                        {row.original.expAdultBirdDate}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  Ngày chim trưởng thành dự kiến
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          ) : <TooltipProvider >
            <Tooltip >
              <TooltipTrigger asChild>
                <div className="w-20 bg-green-300 h-12 rounded-md text-black">
                  <div className="w-full min-h-full flex items-center justify-center">
                    <span className="">
                      {row.original.actAdultBirdDate}

                    </span>
                  </div>
                </div >
              </TooltipTrigger>

              <TooltipContent>
                Ngày chim trưởng thành thực tế
              </TooltipContent>

            </Tooltip>
          </TooltipProvider>}

        </>

      )
    }
  },


  // {
  //   accessorKey: "expAdultBirdDate",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         className="-ml-6 "
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
  //       >
  //         Trưởng thành (dự kiến)
  //       </Button>
  //     );
  //   },
  // },
  {
    accessorKey: "eggStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Trạng thái
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  //   {
  //     accessorKey: "image",
  //     header: "Ảnh sản phẩm",
  //     cell: ({ row }) => (
  //       <div className="flex items-center justify-center gap-x-2 relative min-h-[50px] w-[60px]">
  //         {row.original.images.length > 0 && (
  //           <Image
  //             src={row.original.images[0].url}
  //             alt="image"
  //             fill
  //             className="rounded-full"
  //           />
  //         )}
  //         <span className="absolute right-[-22px]">({row.original.images.length})</span>
  //       </div>
  //     ),
  //   },
  // {
  //     accessorKey: "fullname",
  //     header: "Ten",
  // },

  //   {
  //     accessorKey: "createdAt",
  //     header: "Ngày tạo",
  //   },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

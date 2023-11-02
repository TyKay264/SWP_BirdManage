"use client";

import { ColumnDef } from "@tanstack/react-table";

// import { CellAction } from "./cell-action";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CellAction } from "./cell-action";
import { Cage } from "@/type";

export type EggColumn = {
  birdId: string;
  reproductionId: string;
  eggLaidDate: string;
  eggStatus: string;
  // actEggHatchDate?: string;
  // actSwingBranch?: string;
  // actAdultBirdDate?: string;
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
  {
    accessorKey: "expEggHatchDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày nở (dự kiến)
        </Button>
      );
    },
  },
  {
    accessorKey: "expSwingBranchDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Chim chuyền (dự kiến)
        </Button>
      );
    },
  },
  {
    accessorKey: "expAdultBirdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Trưởng thành (dự kiến)
        </Button>
      );
    },
  },
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

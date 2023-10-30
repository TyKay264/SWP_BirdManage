"use client";

import { ColumnDef } from "@tanstack/react-table";

// import { CellAction } from "./cell-action";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CellAction } from "./cell-action";

import Image from "next/image";
import { Cage } from "@/type";

export type BirdColumn = {
  birdId: string;
  type: string;
  sex: string;
  cageId: string;
  location: string;
  hatchDate: string;
  ageRange: string;
  mutation: string;
  mutationRate: number;
  isAlive: boolean;
  image: string;
  featherColor: string;
  weight: number;
};
export const columns: ColumnDef<BirdColumn>[] = [
  {
    id: "Chọn",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
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
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="cursor-pointer">Loài</div>;
    },
  },
  {
    accessorKey: "sex",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Giới tính
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    //     accessorKey: "image",
    //     header: "Ảnh Bird",
    //     cell: ({ row }) => (
    //         <div className="flex items-center justify-center gap-x-2 relative min-h-[50px] w-[60px]">
    //             {row.original.image ? <Image
    //                 src={row.original.image}
    //                 alt="image"
    //                 fill
    //                 className="rounded-full"
    //             /> : <Image
    //                 src="/assets/images/download.png"
    //                 alt="image"
    //                 fill
    //                 className="rounded-full"
    //             />}

    //         </div>
    //     ),
    // },
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Vị trí lồng
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "hatchDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Ngày nở
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

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

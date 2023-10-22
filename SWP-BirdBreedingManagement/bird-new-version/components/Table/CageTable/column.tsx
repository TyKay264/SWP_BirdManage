"use client";

import { ColumnDef } from "@tanstack/react-table";

// import { CellAction } from "./cell-action";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CellAction } from "./cell-action";

export type CageColumn = {
  cageId: string;
  user?: string;
  location: string;
  quantity: number;
};

export const columns: ColumnDef<CageColumn>[] = [
  {
    id: "Chọn",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "cageId",
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
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-6"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center justify-start">
        {row.original.user ? (
          <div>{row.original.user}</div>
        ) : (
          <div>Chưa có nhân viên</div>
        )}
      </div>
    ),
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

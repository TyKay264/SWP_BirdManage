"use client";

import { ColumnDef } from "@tanstack/react-table";

// import { CellAction } from "./cell-action";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CellAction } from "./cell-action";

export type BirdColumn = {
    id: string,
    bird_type?: string,
    isMale?: string,
    hatch_date?: string,
    father_id?: string,
    mother_id?: string,
    cage_id?: string,
    isAlive?: string,
    age_range?: string,
    mutation_rate?: number,
    mutation_note?: string,
    weight?: number,
    feather_color?: string,
    image?: string
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
        accessorKey: "id",
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
        accessorKey: "bird_type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="-ml-6"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
                >
                    Bird Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "isMale",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="-ml-6"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
                >
                    Sex
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

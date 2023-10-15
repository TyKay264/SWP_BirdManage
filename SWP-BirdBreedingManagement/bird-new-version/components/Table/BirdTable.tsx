"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { birds } from "@/data/data";

// const data: Payment[] = [
//   {
//     id: "A01",
//     egg: 6,
//     sex: "Trống",
//     type: "Chích Chòe Than",
//     mutation: 5,

//   },
//   {
//     id: "A02",
//     egg: 4,
//     sex: "Trống",
//     type: "Chích Chòe Lửa",
//     mutation: 3,
//     },

//     {
//     id: "A03",
//     egg: 5,
//     sex: "Mái",
//     type: "Chích Chòe Than",
//     mutation: 2,
//     },

//     {
//     id: "A04",
//     egg: 6,
//     sex: "Trống",
//     type: "Chích Chòe Lửa",
//     mutation: 4,
//     },

//     {
//     id: "A05",
//     egg: 3,
//     sex: "Trống",
//     type: "Chích Chòe Than",
//     mutation: 1,
//     },

//     {
//     id: "A06",
//     egg: 5,
//     sex: "Mái",
//     type: "Chích Chòe Lửa",
//     mutation: 2,
//     },

//     {
//     id: "A07",
//     egg: 4,
//     sex: "Trống",
//     type: "Chích Chòe Lửa",
//     mutation: 3,
//     },

//     {
//     id: "A08",
//     egg: 3,
//     sex: "Mái",
//     type: "Chích Chòe Than",
//     mutation: 1,
//     },

//     {
//     id: "A09",
//     egg: 6,
//     sex: "Trống",
//     type: "Chích Chòe Lửa",
//     mutation: 5,
//     },

//     {
//     id: "A10",
//     egg: 4,
//     sex: "Mái",
//     type: "Chích Chòe Than",
//     mutation: 2,
//     },

//     {
//     id: "A11",
//     egg: 5,
//     sex: "Trống",
//     type: "Chích Chòe Lửa",
//     mutation: 4,
//     }

// ]

// export type Payment = {
//   id: string
//   egg: number
//   sex: string
//   type: string
//   mutation: number

// }

export type BirdType = {
  id: string;
  bird_type?: string;
  isMale?: string;
  hatch_date?: string;
  father_id?: string;
  mother_id?: string;
  cage_id?: string;
  isAlive?: string;
  age_range?: string;
  mutation_rate?: number;
  mutation_note?: string;
  weight?: number;
  feather_color?: string;
  image?: string;
};

const data: BirdType[] = birds;

export const columns: ColumnDef<BirdType>[] = [
  {
    id: "select",
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
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "id",
    header: () => {
      return <div>ID</div>;
    },
    cell: ({ row }) => (
      <a href={`/bird/${row.original.id}`}>
        {" "}
        <div>{row.getValue("id")}</div>
      </a>
    ),
  },
  {
    accessorKey: "bird_type",
    header: () => {
      return <div>Type</div>;
    },
    cell: ({ row }) => <div>{row.getValue("bird_type")}</div>,
  },
  {
    accessorKey: "hatch_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hatch Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("hatch_date")}</div>
    ),
  },

  {
    accessorKey: "mutation_rate",
    header: () => <div className="text-right">Mutation(%)</div>,
    cell: ({ row }) => {
      const mutation_rate = parseFloat(row.getValue("mutation_rate"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat().format(mutation_rate);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "weight",
    header: () => <div className="text-right">Weight(g)</div>,
    cell: ({ row }) => {
      const weight = parseFloat(row.getValue("weight"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat().format(weight);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <a href="/bird/id">
              <DropdownMenuItem>View details</DropdownMenuItem>
            </a>
            <DropdownMenuItem>View </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function BirdTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    // w-[45%] ml-10
    <div className="table">
      <div className="flex items-center py-4">
        <Input
          placeholder="Tìm chim theo id..."
          value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("id")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BirdTable;

"use client"

import * as React from "react"
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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    id: "A01",
    total_egg: 10,
    stage: "Chim Non",
    fail_egg: 2,
    cage_id: "A01",

  },
  {
    id: "A02",
    total_egg: 8,
    stage: "Chim Non",
    fail_egg: 1,
    cage_id: "A02"
    },
    
    {
    id: "A03",
    total_egg: 12,
    stage: "Chim Chuyền Cành",
    fail_egg: 3,
    cage_id: "A03"
    },
    
    {
    id: "A04",
    total_egg: 9,
    stage: "Chim Trưởng Thành",
    fail_egg: 0,
    cage_id: "A04"
    },
    
    {
    id: "A05",
    total_egg: 7,
    stage: "Chim Non",
    fail_egg: 2,
    cage_id: "A05"
    },
    
    {
    id: "A06",
    total_egg: 11,
    stage: "Chim Chuyền Cành",
    fail_egg: 1,
    cage_id: "A06"
    },
    
    {
    id: "A07",
    total_egg: 14,
    stage: "Chim Non",
    fail_egg: 4,
    cage_id: "A07"
    },
    
    {
    id: "A08",
    total_egg: 10,
    stage: "Chim Trưởng Thành",
    fail_egg: 2,
    cage_id: "A08"
    },
    
    {
    id: "A09",
    total_egg: 6,
    stage: "Chim Chuyền Cành",
    fail_egg: 0,
    cage_id: "A09"
    },
    
    {
    id: "A10",
    total_egg: 13,
    stage: "Chim Trưởng Thành",
    fail_egg: 3,
    cage_id: "A10"
    },
    
    {
    id: "A11",
    total_egg: 10,
    stage: "Chim Non",
    fail_egg: 1,
    cage_id: "A11"
    }
    
    
 

]

export type Payment = {
  id: string
  total_egg: number
  stage: string
  fail_egg: number
  cage_id: string


}

export const columns: ColumnDef<Payment>[] = [
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
      return (
        <div>ID</div>
      )
    },
    cell: ({ row }) => <a href="/bird/id"> <div>{row.getValue("id")}</div></a>,
  },
  
  {
    accessorKey: "stage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stage
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("stage")}</div>,
  },


  {
    accessorKey: "cage_id",
    header: () => {
      return (
        <div>Cage Id</div>
      )
    },
    cell: ({ row }) => <a href="/bird/id"> <div>{row.getValue("cage_id")}</div></a>,
  },
  {
    accessorKey: "total_egg",
    header: () => <div className="text-right">Total Egg</div>,
    cell: ({ row }) => {
      const total_egg = parseFloat(row.getValue("total_egg"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat().format(total_egg)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "fail_egg",
    header: () => <div className="text-right">Fail Egg</div>,
    cell: ({ row }) => {
      const fail_egg = parseFloat(row.getValue("fail_egg"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat().format(fail_egg)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

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
            <a href="/bird/id"><DropdownMenuItem>View details</DropdownMenuItem></a>
            <DropdownMenuItem>View </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

    },
  },
]

export function ProcessTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })

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
                )
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
                  )
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
  )
}

export default ProcessTable;

"use client";
import React, { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  RowSelection,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddEggForm from "../Form/AddEggForm";
// import AddEggForm from "../Form/AddEggForm";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  //   onDelete: (ids: string[]) => void;
  loading: boolean;
  //   showDeleteButton: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  //   onDelete,
  loading,
}: //   showDeleteButton = true,
  DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    state: {
      columnFilters,
      rowSelection,
      sorting,
    },
  });

  // const seletedIds = table.getFilteredSelectedRowModel().flatRows.map((row) => {
  //   const data: any = { ...row.original };
  //   return data.id;
  // });

  //   const onConfirm = () => {
  //     onDelete(seletedIds);
  //   };

  return (
    <>
      <div>
        <div className="flex items-center py-4">
          <Input
            placeholder="Tìm kiếm...."
            value={
              (table.getColumn(searchKey)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          /><AddEggForm />
        </div>
        <div className="flex w-full items-center justify-between">
          {/* {showDeleteButton ? (
            <div className="">
              <Button
                disabled={
                  table.getFilteredSelectedRowModel().rows.length === 0 ||
                  loading
                }
                variant={"destructive"}
              >
                Xóa tất cả.
              </Button>
            </div>
          ) : (
            <div></div>
          )} */}
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
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
                    Không có sản phẩm nào.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Quay lại
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Tiếp theo
          </Button>
        </div>
      </div>
    </>
  );
}

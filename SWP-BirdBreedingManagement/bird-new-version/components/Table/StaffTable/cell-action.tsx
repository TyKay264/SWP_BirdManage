"use client";

import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { StaffColumn, columns } from "./column";
import { AlertModal } from "@/components/modals/alert-model";
import axios from "axios";
import { useModal } from "@/hooks/useModal";

interface CellActionProps {
  data: StaffColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { onOpen } = useModal();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <>
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
            onClick={() => onOpen("EditStaffForm", { staff: data })}
          >
            <Edit className="mr-2 h-4 w-4" /> Chỉnh xửa
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`staff/${data.id}`)}>
            <Edit className="mr-2 h-4 w-4" /> detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

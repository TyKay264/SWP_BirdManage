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

import { EggColumn, columns } from "./column";
import { AlertModal } from "@/components/modals/alert-model";
import axios from "axios";
import { useModal } from "@/hooks/useModal";

interface CellActionProps {
  data: EggColumn;
}



export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { onOpen } = useModal();

  const onConfirm = async () => {
    // try {
    //   setLoading(true);
    //   await axios.delete(` http://localhost:3001/staffs/${data.id}`);

    //   window.location.reload();
    //   router.refresh();
    // } catch (error) {
    // } finally {
    //   setLoading(false);
    //   setOpen(false);
    // }
  };
  //console.log(data)
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
          {data.birdId && (
            <DropdownMenuItem onClick={() => onOpen("ChangeCageForm", { egg: data })}
            >
              <Edit className="mr-2 h-4 w-4" /> Chuyển lứa tuổi
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => onOpen("AddBirdChildForm", { egg: data })}
          >
            <Edit className="mr-2 h-4 w-4" /> Cập nhật trạng thái
          </DropdownMenuItem>
          {data.birdId && (
            <DropdownMenuItem onClick={() => router.push(`/bird/${data.birdId}`)}>
              <Edit className="mr-2 h-4 w-4" /> Xem hồ sơ chim
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

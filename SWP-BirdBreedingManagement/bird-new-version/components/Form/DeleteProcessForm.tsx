"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/useModal";
import { Button } from "@/components/ui/button";

export const DeleteProcessModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const router = useRouter();
    const { processId } = data
    const isModalOpen = isOpen && type === "DeleteProcess";

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);

            await axios.patch(
                `https://bird-swp.azurewebsites.net/api/reproductionprocess/done/${processId}?emotion=hate`
            );
            router.refresh();
            onClose();

            router.push("/cage-diagram");

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Kết thúc quá trình
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Bạn có chắc là muốn kết thúc quá trình này ko <span className="font-semibold text-indigo-500"></span>?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                        <Button
                            disabled={isLoading}
                            onClick={onClose}
                            variant="ghost"
                        >
                            Không
                        </Button>
                        <Button
                            disabled={isLoading}
                            variant="destructive"
                            onClick={onClick}
                        >
                            Xác nhận
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
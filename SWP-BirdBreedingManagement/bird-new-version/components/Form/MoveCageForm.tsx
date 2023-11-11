"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import { useModal } from "@/hooks/useModal";
import { FileUpload } from "../FileUpload";
import useCageA from "@/hooks/useCageA";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const formSchema = z.object({
    cageId: z.string(),
});

const MoveCageForm = ({ birdId }: any) => {

    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "MoveCageForm";

    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cageId: ""
        },
    });


    const { cages } = useCageA();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values);
        console.log(birdId)
        try {
            await axios.patch(
                `https://bird-swp.azurewebsites.net/api/birds/${birdId}`,
                values
            );
            form.reset();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="mb-2">Đổi lồng</Button>
            </DialogTrigger>
            <DialogContent className="sm:min-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
                    {/* <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription> */}
                </DialogHeader>
                <div className="card">
                    <div className="card-header ">
                        <h4 className="card-title ">Điền Thông Tin</h4>
                    </div>
                    <div className="card-body">
                        <div className="basic-form">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-xl-8">

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="cageId"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Select
                                                                disabled={isLoading}
                                                                onValueChange={(value) => {
                                                                    field.onChange(value);
                                                                    form.setValue("cageId", value);
                                                                }}
                                                                value={field.value}
                                                                defaultValue={field.value}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn mã lồng" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn mã lồng</SelectLabel>
                                                                        {cages.map((cage) => (
                                                                            <SelectItem
                                                                                key={cage.cageId}
                                                                                value={cage.cageId}
                                                                            >
                                                                                {cage.cageId}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group text-right ">
                                                <button
                                                    disabled={isLoading}
                                                    type="submit"
                                                    className="btn btn-primary float-end"
                                                >
                                                    Cập Nhật Chích Chòe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MoveCageForm;

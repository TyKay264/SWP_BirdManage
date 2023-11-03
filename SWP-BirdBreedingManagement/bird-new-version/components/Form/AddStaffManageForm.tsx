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
import useBirdNotCage from "@/hooks/useBirdNotCage";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import useStaffs from "@/hooks/useStaffs";


const formSchema = z.object({
    fullName: z.string(),
});

const AddStaffMangeForm = () => {

    const params = useParams()

    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "AddStaffMangeForm";
    // console.log(cageId)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: ""
        },
    });

    const { staffs } = useStaffs();


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values);
        try {
            await axios.post(
                `https://bird-swp.azurewebsites.net/api/cages/addbird/${params.cageId}`,
                values
            );
            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="mb-2">Thêm chim</Button>
            </DialogTrigger>
            <DialogContent className="sm:min-w-[1000px] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Thêm chim</DialogTitle>
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
                                                    name="userId"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Thêm Chim</FormLabel>
                                                            <Select
                                                                disabled={isLoading}
                                                                onValueChange={(value) => {
                                                                    field.onChange(value);
                                                                    form.setValue("userId", value);
                                                                }}
                                                                value={field.value}
                                                                defaultValue={field.value}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn chim thêm vào" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn chim</SelectLabel>
                                                                        {staffs.map((staff) => (
                                                                            <SelectItem
                                                                                key={staff.fullName}
                                                                                value={staff.fullName}
                                                                            >
                                                                                {staff.fullName}
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
                                                    Thêm Người Quản Lý
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

export default AddStaffMangeForm;

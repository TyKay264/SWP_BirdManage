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



const formSchema = z.object({
    // cageId: z.string(),
    ageRange: z.string()
});

const ChangeCageForm = () => {

    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "ChangeCageForm";
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // cageId: ""
            ageRange: ""
        },
    });

    // useEffect(() => {
    //     if (data) {
    //         form.setValue("ageRange", data.bird?.ageRange);
    //     }
    // }, [data, form]);
    // console.log(data)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        if (data && data?.egg) {
            try {
                await axios.patch(
                    `https://bird-swp.azurewebsites.net/api/birds/${data.egg.birdId}`,
                    values
                );
                onClose();
                form.reset();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="sm:min-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
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
                                                    name="ageRange"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Lứa tuổi</FormLabel> */}
                                                            <Select
                                                                disabled={isLoading}
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                defaultValue={field.value}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn lứa tuổi" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn lứa tuổi</SelectLabel>
                                                                        <SelectItem value="Non">Non</SelectItem>
                                                                        <SelectItem value="Chuyền">
                                                                            Chuyền
                                                                        </SelectItem>
                                                                        <SelectItem value="Trưởng thành">
                                                                            Trưởng thành
                                                                        </SelectItem>
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

export default ChangeCageForm;

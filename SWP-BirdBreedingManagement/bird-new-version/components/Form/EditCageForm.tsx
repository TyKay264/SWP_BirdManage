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

import { useRouter } from "next/navigation";
import axios from "axios";
import { useModal } from "@/hooks/useModal";

const availablesType: AvailableCustom[] = [
    {
        boo: true,
        name: "Khả dụng",
    },
    {
        boo: false,
        name: "Không khả dụng",
    },
];


const formSchema = z.object({
    available: z.coerce.boolean()
});

const EditCageForm = () => {
    const { isOpen, type, onClose, data } = useModal();

    //console.log(data);
    const isModalOpen = isOpen && type === "EditCageForm";
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            available: "",
        },
    });

    useEffect(() => {
        if (data && data.staff) {
            form.setValue("available", data.staff.available);
        }
    }, [data, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values)
        if (data?.staff) {
            try {
                await axios.patch(
                    `bird-swp.azurewebsites.net/api/cages/${data.cage.id}`,
                    values
                );
                router.refresh();
                form.reset();
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="sm:min-w-[750px]">
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
                    {/* <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription> */}
                </DialogHeader>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Điền Thông Tin </h4>
                    </div>
                    <div className="card-body">
                        <div className="basic-form">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-xl-4">

                                        </div>

                                        <div className="col-xl-8">


                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="available"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Select
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                defaultValue={field.value}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn tính khả dụng của lồng" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn tính khả dụng của lồng</SelectLabel>
                                                                        {/* <SelectItem value="true">Khả dụng</SelectItem>
                                                                        <SelectItem value="false">Không khả dụng</SelectItem> */}
                                                                        {availablesType.map((item) => (
                                                                            <SelectItem
                                                                                value={item.name}
                                                                                key={item.boo}
                                                                            >
                                                                                {item.name}
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
                                                    type="submit"
                                                    className="btn btn-primary float-end"
                                                >
                                                    Cập nhật thông tin
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

export default EditCageForm;

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
} from "@/components/ui/select"


import axios from "axios";
import { useModal } from "@/hooks/useModal";

const birdsType: birdType[] = [
    {
        birdtype_id: "1",
        bird_type: "Chích chòe than"
    },
    {
        birdtype_id: "2",
        bird_type: "Chích chòe lửa"
    }
]

const formSchema = z.object({
    // id: z.string().min(2),
    // birdtype_id: z.string().min(1),
    bird_type: z.string().min(1),
    // hatchDate: z.string().min(1),
    cageid: z.string().min(1),
    ageRange: z.string(),
    mutationRate: z.coerce.number(),
    mutation: z.string().min(1),
    weight: z.coerce.number(),
    featherColor: z.string()
});

const EditBirdForm = () => {

    const { isOpen, type, onClose, data } = useModal();

    const isModalOpen = isOpen && type === "EditBirdForm";

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bird_type: "",
            cageid: "",
            ageRange: "",
            mutationRate: "",
            mutation: "",
            weight: "",
            featherColor: ""
        },
    });

    useEffect(() => {
        if (data.data) {
            console.log(data.data)
            form.setValue("bird_type", data.data.bird_type);
            form.setValue("cageid", data.data.cageid);
            form.setValue("ageRange", data.data.ageRange);
            form.setValue("mutationRate", data.data.mutationRate);
            form.setValue("mutation", data.data.mutation);
            form.setValue("weight", data.data.weight);
            form.setValue("featherColor", data.data.featherColor);
        }
    }, [data, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values)
        try {
            await axios.patch(`http://localhost:3001/birds/${data.data.id}`, values);

            form.reset();
        } catch (error) {
            console.log(error);
        }
    };


    const isLoading = form.formState.isSubmitting;

    return (

        <Dialog open={isModalOpen} onOpenChange={onClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa thông tin chim</DialogTitle>
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
                                            {/* <div className="form-group row widget-3">
                    <div className="form-input">
                      <label className="labeltest" htmlFor="file-ip-1">
                        <span> ... </span>
                      </label>
                      <input
                        type="file"
                        id="file-ip-1"
                        accept="image/*"
                        // onchange="showPreview(event);"
                      />
                      <div className="preview">
                        <img id="file-ip-1-preview" src="#" alt="img" />
                      </div>
                    </div>
                  </div> */}
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="bird_type"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Loài</FormLabel> */}
                                                            <Select disabled={isLoading}
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn loài" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn loài</SelectLabel>

                                                                        {birdsType.map((item) => (
                                                                            <SelectItem value={item.bird_type} key={item.bird_type}>{item.bird_type}</SelectItem>
                                                                        ))}
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="cageid"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Mã lồng</FormLabel> */}
                                                            <FormControl>
                                                                <Input placeholder="Nhập ID lồng" {...field} className="form-control" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="ageRange"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Lứa tuổi</FormLabel> */}
                                                            <Select disabled={isLoading}
                                                                onValueChange={field.onChange}
                                                                value={field.value}
                                                                defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn lứa tuổi" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Chọn lứa tuổi</SelectLabel>
                                                                        <SelectItem value="non">Non</SelectItem>
                                                                        <SelectItem value="chuyen">Chuyền</SelectItem>
                                                                        <SelectItem value="truongthanh">Trưởng thành</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="mutationRate"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Tỉ lệ đột biến</FormLabel> */}
                                                            <FormControl>
                                                                <Input placeholder="Nhập tỉ lệ đột biến" {...field} className="form-control" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="mutation"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Tính trạng đột biến</FormLabel> */}
                                                            <FormControl>
                                                                <Input placeholder="Nhập tính trạng đột biến" {...field} className="form-control" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="weight"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Khối lượng</FormLabel> */}
                                                            <FormControl>
                                                                <Input placeholder="Nhập khối lượng" {...field} className="form-control" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <FormField
                                                    control={form.control}
                                                    name="featherColor"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            {/* <FormLabel>Màu lông</FormLabel> */}
                                                            <FormControl>
                                                                <Input placeholder="Nhập màu lông" {...field} className="form-control" />
                                                            </FormControl>
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
                                                    Xác nhận
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

export default EditBirdForm;

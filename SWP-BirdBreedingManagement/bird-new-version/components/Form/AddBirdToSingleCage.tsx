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
import { toast } from "react-toastify";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
    birdId: z.string(),
});

const AddBirdToSingleCage = () => {

    const params = useParams()

    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "AddBirdToSingleCage";
    // console.log(cageId)
    // 1. Define your form.
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            birdId: ""
        },
    });

    const { birds } = useBirdNotCage();


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values);
        try {
            await axios.post(
                `https://bird-swp.azurewebsites.net/api/cages/addbird/${params.cageId}`,
                values
            );
            toast.success(`Cập nhật chim ${values.birdId} vào lồng mới ${params.cageId} thành công`);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            form.reset();
            onClose();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog onOpenChange={onClose}>
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
                                                    name="birdId"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Thêm Chim</FormLabel>
                                                            <Select
                                                                disabled={isLoading}
                                                                onValueChange={(value) => {
                                                                    field.onChange(value);
                                                                    form.setValue("birdId", value);
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
                                                                        {birds.map((bird) => (
                                                                            <SelectItem
                                                                                key={bird.birdId}
                                                                                value={bird.birdId}
                                                                            >
                                                                                {bird.birdId}
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
                                                    Thêm Chim
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

export default AddBirdToSingleCage;

'use client'
import React from 'react'
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '../ui/label';

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
    id: z.string().min(2),
    // birdtype_id: z.string().min(1),
    bird_type: z.string().min(1),
    sex: z.string().min(1),
    hatchDate: z.string().min(1),
    cageid: z.string().min(1),
    ageRange: z.string(),
    mutationRate: z.coerce.number(),
    mutation: z.string().min(1),
    weight: z.coerce.number(),
    featherColor: z.string()
})


const AddBirdForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            // birdtype_id: "",
            bird_type: "",
            sex: "",
            hatchDate: "",
            cageid: "",
            ageRange: "",
            mutationRate: "",
            mutation: "",
            weight: "",
            featherColor: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        console.log(values)
        try {
            await axios.post("http://localhost:3001/birds", values);
            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <div className="card">
            <div className="card-header ">
                <h4 className="card-title ">Điền Thông Tin</h4>
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
                                            name="id"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>ID chim</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Nhập ID chim" {...field} className="form-control" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="bird_type"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Loài</FormLabel>
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

                                                                {/* <SelectItem value="Chích chòe lửa">Chích chòe lửa</SelectItem>
                                                                <SelectItem value="Chích chòe than">Chích chòe than</SelectItem> */}

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
                                            name="sex"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Giới tính</FormLabel>
                                                    <Select disabled={isLoading}
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Chọn giới tính" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Chọn giới tính</SelectLabel>
                                                                <SelectItem value="MALE">Trống</SelectItem>
                                                                <SelectItem value="FEMALE">Mái</SelectItem>
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
                                            name="hatchDate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Ngày nở</FormLabel>
                                                    <FormControl>
                                                        <Input type="date" placeholder="Chọn ngày sinh" {...field} className="form-control" />
                                                    </FormControl>
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
                                                    <FormLabel>Mã lồng</FormLabel>
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
                                                    <FormLabel>Lứa tuổi</FormLabel>
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
                                                    <FormLabel>Tỉ lệ đột biến</FormLabel>
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
                                                    <FormLabel>Tính trạng đột biến</FormLabel>
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
                                                    <FormLabel>Khối lượng</FormLabel>
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
                                                    <FormLabel>Màu lông</FormLabel>
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
                                            Thêm Chích Chòe
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AddBirdForm
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


const formSchema = z.object({
    id: z.string().min(4),
    // birdtype: z.object({
    //     id: z.string().min(1),
    //     birdtype: z.string(),
    // }),
    sex: z.string(),
    birthday: z.string(),
    cageid: z.string().min(1),
    agerange: z.string(),
    mutationrate: z.string(),
    mutationnote: z.string().min(1),
    weight: z.string(),
    feathercolor: z.string()
})
// const birdType = {
//     id: "",
//     birdtype: "",
// }

const AddBirdForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            // birdtype: {
            //     ...birdType
            // },
            sex: "",
            birthday: "",
            cageid: "",
            agerange: "",
            mutationrate: "",
            mutationnote: "",
            weight: "",
            feathercolor: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TO DO xử lý form (api)
        try {
            await axios.post("http://localhost:3001/birds", values);
            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

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
                                                    <FormControl>
                                                        <Input placeholder="Nhập ID chim" {...field} className="form-control" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="birdtype"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Chọn loài" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Chọn loài</SelectLabel>
                                                                <SelectItem value="Chích chòe lửa">Chích chòe lửa</SelectItem>
                                                                <SelectItem value="Chích chòe than">Chích chòe than</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}


                                    {/* <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="birdtype"
                                            render={({ field }) => (
                                                <FormControl>
                                                    <Select {...field} defaultValue="">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select bird type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Select bird type</SelectLabel>
                                                                <SelectItem value="Chích chòe lửa">Chích chòe lửa</SelectItem>
                                                                <SelectItem value="Chích chòe than">Chích chòe than</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                            )}
                                        />
                                    </div> */}

                                    <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="sex"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Chọn giới tính" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Chọn giới tính</SelectLabel>
                                                                <SelectItem value="male">Trống</SelectItem>
                                                                <SelectItem value="female">Mái</SelectItem>
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
                                            name="birthday"
                                            render={({ field }) => (
                                                <FormItem>
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
                                            name="agerange"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                            name="mutationrate"
                                            render={({ field }) => (
                                                <FormItem>
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
                                            name="mutationnote"
                                            render={({ field }) => (
                                                <FormItem>
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
                                            name="feathercolor"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Chọn màu lông" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Chọn màu lông</SelectLabel>
                                                                <SelectItem value="black">Đen</SelectItem>
                                                                <SelectItem value="white">Trắng</SelectItem>
                                                                <SelectItem value="gray">Xám</SelectItem>
                                                                <SelectItem value="multi">Nhiều màu</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>



                                    {/* <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Weight(g)"
                                            min="0"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Chim Non</option>
                                            <option>Chim Chuyền Cành</option>
                                            <option>Chim Trưởng Thành</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Chim Chích Chòe Than</option>
                                            <option>Chim Chích Chòe Lửa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select">
                                            <option>Trống</option>
                                            <option>Mái</option>
                                        </select>
                                    </div> */}


                                    <div className="form-group text-right ">
                                        <button
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
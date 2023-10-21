'use client'
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useCages from "@/hooks/useCage"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import axios from "axios";


const birdtypes = [
    {
        value: "a01",
        label: "A01",
    },
    {
        value: "a02",
        label: "A02",
    },
    {
        value: "a03",
        label: "A03",
    },
    {
        value: "a04",
        label: "A04",
    },
    {
        value: "a05",
        label: "A05",
    },
    {
        value: "a06",
        label: "A06",
    },
]

const birdsType: birdType[] = [
    {
        birdtype_id: "1",
        birdTypeName: "Chích chòe than"
    },
    {
        birdtype_id: "2",
        birdTypeName: "Chích chòe lửa"
    }
]


const formSchema = z.object({
    birdTypeName: z.string().min(1),
    purpose: z.string().min(1),
    IdMale: z.string().min(1),
    IdFeMale: z.string().min(1),
    cageId: z.coerce.number(),
})

const AddProcessForm = () => {
    const { cages } = useCages();
    //console.log(cages)

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const [open1, setOpen1] = useState(false)
    const [value1, setValue1] = useState("")
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            birdTypeName: "",
            purpose: "",
            cockId: "",
            henId: "",
            cageId: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("Submit button clicked");
        //TO DO xử lý form (api)
        console.log(values)
        try {
            await axios.post("http://localhost:3001/processes", values);
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
                                <div className="form-group">
                                    <FormField
                                        control={form.control}
                                        name="birdTypeName"
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

                                                            {/* {birdtypearr.map((item) => (

                                                                    <SelectItem value={item.key} key={item.key}>{item.value}</SelectItem>
                                                                ))} */}

                                                            {birdsType.map((item) => (
                                                                <SelectItem value={item.birdTypeName} key={item.birdTypeName}>{item.birdTypeName}</SelectItem>
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
                                        name="purpose"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Chọn mục đích phối giống</FormLabel>
                                                <Select disabled={isLoading}
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                    defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn mục đích phối giống" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Mục đích phối giống</SelectLabel>
                                                            <SelectItem value="nhieu">Năng suất cao</SelectItem>
                                                            <SelectItem value="mutation">Có đột biến</SelectItem>
                                                            <SelectItem value="none">Bình thường</SelectItem>
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
                                        name="cockId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Chọn chim trống</FormLabel>
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="justify-between"
                                                        >
                                                            {value
                                                                ? birdtypes.find((birdtype) => birdtype.value === value)?.label
                                                                : "Chọn id chim bố..."}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Chọn id chim bố..." />
                                                            <CommandEmpty>Không tìm thấy.</CommandEmpty>
                                                            <CommandGroup>
                                                                {birdtypes.map((birdtype) => (
                                                                    <CommandItem
                                                                        key={birdtype.value}
                                                                        onSelect={(currentValue) => {
                                                                            setValue(currentValue === value ? "" : currentValue)
                                                                            setOpen(false)
                                                                        }}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                value === birdtype.value ? "opacity-100" : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {birdtype.label}
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="form-group">
                                    <FormField
                                        control={form.control}
                                        name="henId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Chọn chim mái</FormLabel>
                                                <Popover open={open1} onOpenChange={setOpen1}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open1}
                                                            className="justify-between"
                                                        >
                                                            {value1
                                                                ? birdtypes.find((birdtype) => birdtype.value === value1)?.label
                                                                : "Chọn id chim mẹ..."}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Chọn id chim mẹ..." />
                                                            <CommandEmpty>Không tìm thấy.</CommandEmpty>
                                                            <CommandGroup>
                                                                {birdtypes.map((birdtype) => (
                                                                    <CommandItem
                                                                        key={birdtype.value}
                                                                        onSelect={(currentValue) => {
                                                                            setValue1(currentValue === value1 ? "" : currentValue)
                                                                            setOpen1(false)
                                                                        }}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                value1 === birdtype.value ? "opacity-100" : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {birdtype.label}
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="form-group">
                                    <FormField
                                        control={form.control}
                                        name="cageId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mã lồng</FormLabel>
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
                                                                <SelectItem key={cage.cageId} value={cage.cageId}>
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

                                <div className="form-group text-center ">
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="btn btn-primary float-end"
                                    >
                                        Tạo quá trình
                                    </button>
                                </div>

                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </div>

    )
}
export default AddProcessForm;

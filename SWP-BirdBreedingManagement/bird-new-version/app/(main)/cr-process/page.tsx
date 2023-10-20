'use client'
import BreadScrum from '@/components/BreadScrum'
import DropSelect from '@/components/Cr-Process/DropSelect'
import Table from '@/components/Cr-Process/Table'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

const page = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [open1, setOpen1] = React.useState(false)
    const [value1, setValue1] = React.useState("")

    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="all-patients main_container">
                            <BreadScrum title='Tạo Quá Tình' subRouteTitle='cr-process' subTitle1='Tạo Quá Tình' />

                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="card">
                                        <div className="card-header fix-card">
                                            <div className="row">
                                                <Select>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Chọn loài" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Loài</SelectLabel>
                                                            <SelectItem value="lua">Chích chòe lửa</SelectItem>
                                                            <SelectItem value="than">Chích chòe than</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="row mt-3">
                                                <Select>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Chọn mục đích phối giống" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Mục đích phối giống</SelectLabel>
                                                            <SelectItem value="nhieu">Hiệu suất cao</SelectItem>
                                                            <SelectItem value="mutation">Có đột biến</SelectItem>
                                                            <SelectItem value="none">Bình thường</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="row mt-3">
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-[200px] justify-between"
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
                                            </div>

                                            <div className="row mt-3">
                                                <Popover open={open1} onOpenChange={setOpen1}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open1}
                                                            className="w-[200px] justify-between"
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
                                            </div>

                                            <div className='justify-center text-center items-center'>
                                                <Button className='mt-3 w-[125px]'>Xác nhận</Button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
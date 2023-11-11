"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, parseISO, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
type BirdtypeCustom = {
  typeId: string;
  birdTypeName: string;
};

const birdsType: BirdtypeCustom[] = [
  {
    typeId: "1",
    birdTypeName: "Chích chòe than",
  },
  {
    typeId: "2",
    birdTypeName: "Chích chòe lửa",
  },
];

const formSchema = z.object({
  // id: z.string().min(2),
  // birdtype_id: z.string().min(1),
  birdTypeName: z.string().min(1),
  sex: z.string().min(1),
  isAlive: z.coerce.boolean(),
  hatchDate: z.date(),
  cageId: z.string(),
  ageRange: z.string(),
  mutation: z.string().nullable(),
  weight: z.coerce.number(),
  featherColor: z.string(),
  image: z.string(),
  status: z.string().nullable(),
});

const EditBirdForm = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type === "EditBirdForm";
  const { cages, loading } = useCageA();

  const { refetch } = useQuery({ queryKey: ["birds"], });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birdTypeName: "",
      isAlive: false,
      sex: "",
      hatchDate: new Date(),
      cageId: "",
      ageRange: "",
      mutation: "",
      weight: 0,
      featherColor: "",
      image: "",
      status: ""
    },
  });

  useEffect(() => {
    if (data && data.bird) {
      form.setValue("birdTypeName", data.bird.type);
      form.setValue("ageRange", data.bird.ageRange);
      form.setValue("mutation", data.bird.mutation);
      form.setValue("isAlive", data?.bird?.isAlive);
      form.setValue("weight", data.bird.weight);
      form.setValue("featherColor", data.bird.featherColor);
      form.setValue("image", data.bird.image);
      form.setValue("sex", data.bird.sex);
      form.setValue("cageId", data.bird.cageId);
      form.setValue("status", data.bird.status);
      if (data.bird.hatchDate) {
        const hatchDate = parse(data.bird.hatchDate, "d-M-yyyy", new Date());
        if (!isNaN(hatchDate.getTime())) {
          form.setValue("hatchDate", hatchDate);
        }
      }
    }
  }, [data, form]);

  // console.log(data.bird.hatchDate)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);


    if (data && data?.bird) {
      try {
        await axios.patch(
          `https://bird-swp.azurewebsites.net/api/birds/${data.bird.birdId}`,
          values
        );
        toast.success("Cập nhật chim thành công");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        onClose();
        await refetch();
        // form.reset();
        // window.location.reload();
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
                    <div className="col-xl-4">
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FileUpload
                                endpoint="serverImage"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="col-xl-8">
                      <div className="flex justify-between">
                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="birdTypeName"
                            render={({ field }) => (
                              <FormItem>
                                {/* <FormLabel>Loài</FormLabel> */}
                                <Select
                                  disabled={isLoading}
                                  onValueChange={(value) =>
                                    field.onChange(value)
                                  }
                                  value={field.value}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Chọn loài" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Chọn loài</SelectLabel>

                                      {birdsType.map((item) => (
                                        <SelectItem
                                          value={item.birdTypeName}
                                          key={item.typeId}
                                        >
                                          {item.birdTypeName}
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

                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="sex"
                            render={({ field }) => (
                              <FormItem>
                                {/* <FormLabel>Giới tính</FormLabel> */}
                                <Select
                                  disabled={isLoading}
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Chọn giới tính" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Chọn giới tính</SelectLabel>
                                      <SelectItem value="MALE">
                                        Trống
                                      </SelectItem>
                                      <SelectItem value="FEMALE">
                                        Mái
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

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

                      <div className="flex justify-between">
                        <div className="form-group">
                          <FormField
                            control={form.control}
                            name="hatchDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] pl-3 text-left font-normal",
                                          !field.value &&
                                          "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(
                                            new Date(field.value),
                                            "dd-MM-yyyy"
                                          )
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date: any) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* <div className="form-group">
                          <FormField
                            control={form.control}
                            name="hatchDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(new Date(field.value), "d-M-yyyy")
                                        ) : (
                                          <span>Chọn ngày ra đời</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value ? new Date(field.value) : null}
                                      onSelect={(date) => {
                                        const selectedDate = new Date(date);
                                        selectedDate.setDate(selectedDate.getDate() + 1);
                                        field.onChange(selectedDate.toISOString().split("T")[0]);
                                      }}
                                      disabled={(date) => date > new Date() || date < new Date("2000-01-01")}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div> */}

                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="cageId"
                            render={({ field }) => (
                              <FormItem>
                                <Select
                                  disabled={isLoading}
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    // form.setValue("cageId", value);
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
                                          {cage.location}
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
                      </div>

                      <div className="flex justify-between">
                        <div className="form-group">
                          <FormField
                            control={form.control}
                            name="isAlive"
                            render={({ field }) => (
                              <FormItem>
                                <Select
                                  disabled={isLoading}
                                  onValueChange={(selectedValue: any) => {
                                    // Convert the selected string value to a boolean
                                    const newValue = selectedValue === "true";
                                    form.setValue("isAlive", newValue);
                                  }}
                                  value={field.value ? "true" : "false"}
                                  defaultValue={field.value ? "true" : "false"}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Chọn trạng thái" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Chọn trạng thái</SelectLabel>
                                      <SelectItem value="true">Còn sống</SelectItem>
                                      <SelectItem value="false">Đã chết</SelectItem>
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
                            name="status"
                            render={({ field }) => (
                              <FormItem>
                                <Select
                                  disabled={isLoading}
                                  onValueChange={field.onChange}
                                  value={field.value || undefined}
                                  defaultValue={field.value || undefined}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Chọn trạng thái" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Chọn trạng thái</SelectLabel>
                                      <SelectItem value="Nghi ngoi">Nghỉ ngơi</SelectItem>
                                      <SelectItem value="De ban">
                                        Để bán
                                      </SelectItem>
                                      <SelectItem value="Trong sinh san">
                                        Trong sinh sản
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="mutation"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Nhập tính trạng đột biến"
                                  {...field}
                                  value={field.value!}
                                  className="form-control"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between">
                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                              <FormItem>
                                {/* <FormLabel>Khối lượng</FormLabel> */}
                                <FormControl>
                                  <Input
                                    placeholder="Nhập khối lượng"
                                    {...field}
                                    className="form-control"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="featherColor"
                            render={({ field }) => (
                              <FormItem>
                                {/* <FormLabel>Màu lông</FormLabel> */}
                                <FormControl>
                                  <Input
                                    placeholder="Nhập màu lông"
                                    {...field}
                                    className="form-control"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
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

export default EditBirdForm;

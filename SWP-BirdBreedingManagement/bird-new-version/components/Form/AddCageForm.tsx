"use client";
import React from "react";
import axios from "axios";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type locationType = {
  location: string;
  name: string;
};

const locationsType: locationType[] = [
  {
    location: "A",
    name: "A - Nghỉ ngơi",
  },
  {
    location: "B",
    name: "B - Sinh sản",
  },
  {
    location: "C",
    name: "C - Bán",
  },
];

const formSchema = z.object({
  // id: z.string().min(4),
  // cageType: z.string(),
  location: z.string(),
  // available: z.boolean(),
  // quantity: z.coerce.number(),
});

const AddCageForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // id: "",
      // cageType: "",
      location: "",
      // available: false,
      // quantity: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.post(
        "https://bird-swp.azurewebsites.net/api/cages/create",
        values
      );
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Tạo mới Lồng</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-xl-4"></div>

                <div className="col-xl-12">
                  {/* <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="id"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Nhập mã lồng" {...field} className="form-control" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}

                  {/* <div className="form-group">
                                        <FormField
                                            control={form.control}
                                            name="cageType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Chọn loại lồng" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Chọn loại lồng</SelectLabel>
                                                                <SelectItem value="Lồng đơn">Lồng đơn</SelectItem>
                                                                <SelectItem value="Lồng sinh sản">Lòng sinh sản</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            disabled={isLoading}
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn khu vực" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Chọn khu vực</SelectLabel>
                                {/* <SelectItem value="male">Nhân viên</SelectItem>
                                                                <SelectItem value="female">Quản lí</SelectItem> */}
                                {locationsType.map((item) => (
                                  <SelectItem
                                    value={item.location}
                                    key={item.location}
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
                    <button type="submit" className="btn btn-primary float-end">
                      Thêm Lồng
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCageForm;

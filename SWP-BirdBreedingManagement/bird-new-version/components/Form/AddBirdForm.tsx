"use client";
import React, { useState } from "react";
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
import { Label } from "../ui/label";
import useCages from "@/hooks/useCage";
import { FileUpload } from "../FileUpload";
import { BirdType } from "@/type";

const birdtypeMap: Record<string, BirdType> = {
  than: BirdType.than,
  lua: BirdType.lua,
};

//const birdtypearr = Object.entries(birdtypeMap).map(([key, value]) => ({ key, value }))

const birdsType: birdType[] = [
  {
    birdtype_id: "1",
    birdTypeName: "Chích chòe than",
  },
  {
    birdtype_id: "2",
    birdTypeName: "Chích chòe lửa",
  },
];

const formSchema = z.object({
  // id: z.string().min(2),
  // birdtype_id: z.string().min(1),
  birdTypeName: z.string().min(1),
  sex: z.string().min(1),
  hatchDate: z.string().min(1),
  cageId: z.coerce.number(),
  ageRange: z.string(),
  mutationRate: z.coerce.number(),
  mutation: z.string().min(1),
  weight: z.coerce.number(),
  featherColor: z.string(),
  image: z.string(),
});

const AddBirdForm = () => {
  const { cages } = useCages();
  //console.log(cages)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // id: "",
      // birdtype_id: "",
      typeId: "",
      sex: "",
      hatchDate: "",
      cageId: "",
      ageRange: "",
      mutationRate: 0,
      mutation: "",
      weight: 0,
      featherColor: "",
      image: "",
    },
  });

  const { cages } = useCages();
  //console.log(cages)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // id: "",
      // birdtype_id: "",
      birdTypeName: "",
      sex: "",
      hatchDate: "",
      cageId: "",
      ageRange: "",
      mutationRate: "",
      mutation: "",
      weight: "",
      featherColor: "",
      image: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.post(
        "https://bird-swp.azurewebsites.net/api/birds/create?fbclid=IwAR1V9U7NmFsR3xGrAzX0s178ZDheF66Y0LOSxQAxTDPemWssG1V6w8Z3d5A",
        values
      );
      //await axios.post("http://localhost:3001/birds", values);
      console.log(values);
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
                  {/* <div className="form-group">
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
                                    </div> */}

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="birdTypeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loài</FormLabel>
                          <Select
                            disabled={isLoading}
                            onValueChange={field.onChange}
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

                                {/* <SelectItem value="Chích chòe lửa">Chích chòe lửa</SelectItem>
                                                                <SelectItem value="Chích chòe than">Chích chòe than</SelectItem> */}

                                {/* {birdtypearr.map((item) => (

                                                                    <SelectItem value={item.key} key={item.key}>{item.value}</SelectItem>
                                                                ))} */}

                                {birdsType.map((item) => (
                                  <SelectItem
                                    value={item.birdTypeName}
                                    key={item.birdTypeName}
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

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="sex"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Giới tính</FormLabel>
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
                            <Input
                              type="date"
                              placeholder="Chọn ngày sinh"
                              {...field}
                              className="form-control"
                            />
                          </FormControl>
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
                            <Input
                              type="date"
                              placeholder="Chọn ngày sinh"
                              {...field}
                              className="form-control"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* <div className="form-group">
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
                                  <SelectItem
                                    key={cage.cageId}
                                    value={cage.cageId}
                                  >
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
                                  <SelectItem
                                    key={cage.cageId}
                                    value={cage.cageId}
                                  >
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
                  </div> */}

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="mutationRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tỉ lệ đột biến</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nhập tỉ lệ đột biến"
                              {...field}
                              className="form-control"
                            />
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
                            <Input
                              placeholder="Nhập tính trạng đột biến"
                              {...field}
                              className="form-control"
                            />
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

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="featherColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Màu lông</FormLabel>
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
  );
};

export default AddBirdForm;

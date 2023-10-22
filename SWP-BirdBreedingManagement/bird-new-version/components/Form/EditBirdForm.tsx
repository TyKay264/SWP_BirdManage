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

import axios from "axios";
import { useModal } from "@/hooks/useModal";
import { FileUpload } from "../FileUpload";
import useCages from "@/hooks/useCage";

type BirdtypeCustom = {
  typeId: string;
  birdTypeName: string;
};

const birdsType: BirdtypeCustom[] = [
  {
    typeId: "1",
    birdTypeName: "than",
  },
  {
    typeId: "2",
    birdTypeName: "lua",
  },
];

const formSchema = z.object({
  // id: z.string().min(2),
  // birdtype_id: z.string().min(1),
  birdTypeName: z.string().min(1),
  sex: z.string().min(1),
  isAlive: z?.boolean(),
  hatchDate: z.string().min(1),
  cageId: z.string(),
  ageRange: z.string(),
  // mutationRate: z.coerce.number(),
  mutation: z.string().min(1),
  weight: z.coerce.number(),
  featherColor: z.string(),
  image: z.string(),
});

const EditBirdForm = () => {
  const { isOpen, type, onClose, data } = useModal();

  const isModalOpen = isOpen && type === "EditBirdForm";

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // id: "",
      // birdtype_id: "",
      birdTypeName: "",
      isAlive: true,
      sex: "",
      hatchDate: "",
      cageId: "",
      ageRange: "",
      // mutationRate: 0,
      mutation: "",
      weight: 0,
      featherColor: "",
      image: "",
    },
  });

  useEffect(() => {
    if (data && data.bird) {
      form.setValue("birdTypeName", data.bird.type);
      //   form.setValue("cageId", data.bird?.);
      form.setValue("ageRange", data.bird.ageRange);
      // form.setValue("mutationRate", data.bird.mutationRate);
      form.setValue("mutation", data.bird.mutation);
      form.setValue("weight", data.bird.weight);
      form.setValue("featherColor", data.bird.featherColor);
      form.setValue("image", data.bird.image);
      form.setValue("sex", data.bird.sex);
      form.setValue("hatchDate", data.bird.hatchDate);
      form.setValue("cageId", data.bird.cageId);
    }
  }, [data, form]);

  const { cages } = useCages();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    if (data && data?.bird) {
      try {
        await axios.patch(
          `http://bird-swp.azurewebsites.net/api/birds/${data.bird.birdId}`,
          values
        );

        form.reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose} >
      <DialogContent className="sm:min-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
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

                      <div className='flex justify-between'>
                        <div className="form-group w-[48%]">
                          <FormField
                            control={form.control}
                            name="birdTypeName"
                            render={({ field }) => (
                              <FormItem>
                                {/* <FormLabel>Loài</FormLabel> */}
                                <Select
                                  disabled={isLoading}
                                  onValueChange={(value) => field.onChange(value)}
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

                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="hatchDate"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Ngày nở</FormLabel> */}
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
                          name="cageId"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Mã lồng</FormLabel> */}
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

                      {/* <div className="form-group">
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
                      </div> */}

                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="mutation"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Tính trạng đột biến</FormLabel> */}
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
      </DialogContent>
    </Dialog>
  );
};

export default EditBirdForm;

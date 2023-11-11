"use client";
import React, { useEffect } from "react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useStaffs from "@/hooks/useStaffs";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
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
  location: z.string(),
  available: z.coerce.boolean(),
  quantity: z.coerce.number(),
  userId: z.string(),
});

const EditCageForm = () => {
  const { isOpen, onClose, data, type } = useModal();
  //console.log(data);
  const isModalOpen = isOpen && type === "EditCageForm";
  const router = useRouter();
  const { staffs } = useStaffs();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      available: false,
      quantity: 0,
      userId: "",
    },
  });

  const { refetch } = useQuery({ queryKey: ["cages"], });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    console.log(data.cage?.available)

    if (data && data.cage) {
      try {
        await axios.patch(
          `https://bird-swp.azurewebsites.net/api/cages/${data.cage.cageId}`,
          values
        );
        await refetch()
        form.reset();
        toast.success("Cập nhật lồng thành công");
        onClose();
        router.refresh();
      } catch (error) {
        console.log(error);
        toast.error("Cập nhật lồng thất bại");
      }
    }

  };
  //console.log(data.cage.available)
  useEffect(() => {
    if (data && data.cage) {
      form.setValue("location", data.cage.location.charAt(0));
      form.setValue("available", data?.cage?.available);
    }
  }, [data, form]);

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
        </DialogHeader>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Chỉnh sửa lồng</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="row">

                    <div className="col-xl-12">
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Khu vực</FormLabel>
                              <Select
                                disabled={data.cage?.quantity !== 0}
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

                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="available"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tình trạng</FormLabel>
                              <Select
                                disabled={isLoading}
                                onValueChange={(selectedValue: any) => {
                                  // Convert the selected string value to a boolean
                                  const newValue = selectedValue === "true";
                                  form.setValue("available", newValue);
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
                                    <SelectItem value="true">Khả dụng</SelectItem>
                                    <SelectItem value="false">Không khả dụng</SelectItem>
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
                          name="userId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Thêm Nhân Viên Để Quản Lí</FormLabel>
                              <Select
                                disabled={isLoading}
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  form.setValue("userId", value);
                                }}
                                value={field.value}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn nhân viên" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Chọn nhân viên</SelectLabel>
                                    {staffs.map((staff) => (
                                      <SelectItem
                                        key={staff.userId}
                                        value={staff.userId}
                                      >
                                        {staff.fullName}
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
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          {isLoading && <ClipLoader color="#3498db" size={12} />} Chỉnh sửa lồng
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

export default EditCageForm;

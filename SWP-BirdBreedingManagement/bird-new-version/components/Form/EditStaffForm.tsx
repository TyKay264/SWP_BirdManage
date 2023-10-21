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

import { useRouter } from "next/navigation";
import axios from "axios";
import { useModal } from "@/hooks/useModal";
import { StaffRole } from "@/type";

const roleMap: Record<string, StaffRole> = {
  STAFF: StaffRole.STAFF,
  MANAGER: StaffRole.MANAGER,
};

//console.log(roleMap)

const rolearr = Object.entries(roleMap).map(([key, value]) => ({ key, value }));
// console.log(rolearr)
// console.log(roleMap)
// const roleArr = [...roles]

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().min(2),
  fullName: z.string().min(2),
  role: z.string().min(1),
});

const EditStaffForm = () => {
  const { isOpen, type, onClose, data } = useModal();

  console.log(data);
  const isModalOpen = isOpen && type === "EditStaffForm";
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      fullName: "",
      role: "",
    },
  });

  useEffect(() => {
    if (data && data.staff) {
      form.setValue("username", data.staff.username);
      form.setValue("email", data.staff.email);
      form.setValue("fullName", data.staff.fullName);
      form.setValue("role", data.staff.role);
    }
  }, [data, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    //console.log(values)
    if (data?.staff) {
      try {
        await axios.patch(
          `http://localhost:3001/staffs/${data.staff.id}`,
          values
        );

        router.refresh();
        form.reset();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
          {/* <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription> */}
        </DialogHeader>

        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Điền Thông Tin </h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-xl-4">
                      {/* <div className="form-group row widget-3">
                    <div className="form-input">
                      <label className="labeltest" htmlFor="file-ip-1">
                        <span> ... </span>
                      </label>
                      <input
                        type="file"
                        id="file-ip-1"
                        accept="image/*"
                        // onchange="showPreview(event);"
                      />
                      <div className="preview">
                        <img id="file-ip-1-preview" src="#" alt="img" />
                      </div>
                    </div>
                  </div> */}
                    </div>

                    <div className="col-xl-8">
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Nhập username..."
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
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Nhập email..."
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
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Nhập fullName..."
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
                          name="role"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn vai trò" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    {/* <SelectLabel>Chọn vai trò</SelectLabel> */}
                                    {rolearr.map((item) => (
                                      <SelectItem
                                        value={item.key}
                                        key={item.key}
                                      >
                                        {item.value}
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
                    <select className="form-control form-select">
                      <option>Nhân Viên</option>
                      <option>Manage</option>
                    </select>
                  </div> */}
                      <div className="form-group text-right ">
                        <button
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          Thêm Nhân Viên
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

export default EditStaffForm;

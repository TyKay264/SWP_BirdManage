"use client";

import React from "react";
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

import axios from "axios";

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().min(2),
  password: z.string().min(2),
  fullname: z.string().min(2),
});

const AddStaffForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      fullname: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)

    try {
      await axios.post(" http://localhost:3001/staffs", values);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Nhập fullname..."
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
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Nhập password..."
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
                    <select className="form-control form-select">
                      <option>Nhân Viên</option>
                      <option>Manage</option>
                    </select>
                  </div> */}
                  <div className="form-group text-right ">
                    <button type="submit" className="btn btn-primary float-end">
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
  );
};

export default AddStaffForm;
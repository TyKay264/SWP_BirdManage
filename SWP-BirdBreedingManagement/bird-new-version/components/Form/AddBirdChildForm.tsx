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
import { FileUpload } from "../FileUpload";


const formSchema = z.object({
  sex: z.string().min(1),
  isAlive: z?.boolean(),
  hatchDate: z.string().min(1),
  weight: z.coerce.number(),
  image: z.string(),
});

const AddBirdChildForm = () => {
  const { isOpen, onClose, data, type } = useModal();
  console.log(data);
  const isModalOpen = isOpen && type === "AddBirdChildForm";
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    sex : "",
    isAlive: true,
    hatchDate: "",
    image: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.patch(
        `https://bird-swp.azurewebsites.net/api/cages/${data.cage?.cageId}`,
        values
      );
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog >
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
                    {/* <div className="col-xl-4"></div> */}
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



                      <div className="form-group text-right ">
                        <button
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          Chỉnh sửa lồng
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

export default AddBirdChildForm;

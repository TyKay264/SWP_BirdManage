"use client";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import { FileUpload } from "../FileUpload";
// import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, parseISO, parse } from "date-fns";

const formSchema = z.object({
  eggStatus: z.string().min(1),
  sex: z.string(),
  hatchDate: z.date(),
  weight: z.coerce.number(),
  image: z.string(),
  eggLaidDate: z.string(),
});

const AddBirdChildForm = () => {
  const { isOpen, onClose, data, type } = useModal();
  const isModalOpen = isOpen && type === "AddBirdChildForm";
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sex: "",
      hatchDate: new Date(),
      image: "",
      eggStatus: "",
      weight: 0,
      eggLaidDate: "",
    },
  });
  const [parsedDate, setParsedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (data && data.egg) {
      const customFormat = "dd-MM-yyyy";
      const parsedDateValue = parse(
        data.egg.eggLaidDate,
        customFormat,
        new Date()
      );
      if (!isNaN(parsedDateValue.getTime())) {
        setParsedDate(parsedDateValue); // Set the parsed date in state
        form.setValue("eggStatus", data.egg.eggStatus);
      } else {
        console.error("Invalid date format:", data.egg.eggLaidDate);
      }
      form.setValue("eggStatus", data.egg.eggStatus);
    }
  }, [data, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    // console.log(parsedDate)

    try {
      if (data && data.egg) {
        await axios.patch(
          `https://bird-swp.azurewebsites.net/api/birdreproductions/${data.egg.reproductionId}`,
          values
        );
        onClose();
        form.reset();
        router.refresh();
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin trứng</DialogTitle>
        </DialogHeader>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Chỉnh sửa trứng</h4>
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
                          name="eggStatus"
                          render={({ field }) => (
                            <FormItem>
                              {/* <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                              > */}
                              <Select
                                disabled={isLoading}
                                // onValueChange={field.onChange}
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setIsDisabled(
                                    value === "Đang phát triển" ||
                                    value === "Hỏng"
                                  );
                                }}
                                value={field.value}
                                defaultValue={field.value}
                              >
                                <FormControl></FormControl>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Cập nhật tình trạng trứng" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>
                                      Cập nhật tình trạng trứng
                                    </SelectLabel>
                                    <SelectItem value="Hỏng">Hỏng</SelectItem>
                                    <SelectItem value="Đang phát triển">
                                      Đang phát triển
                                    </SelectItem>
                                    <SelectItem value="Đã nở">
                                      Đã nở
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

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
                              // disabled={isDisabled}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* <div className="form-group">
                        <FormField
                          control={form.control}
                          name="sex"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                disabled={isDisabled}
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
                      </div> */}

                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="sex"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Giới tính</FormLabel>
                              <Select
                                disabled={isDisabled}
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
                            <FormItem className="flex flex-col">
                              <FormLabel>Ngày sinh</FormLabel>
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
                                        format(field.value, "dd-MM-yyyy")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
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
                                    disabled={(date) =>
                                      (parsedDate && date < parsedDate) ||
                                      date > new Date()
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
                                  disabled={isDisabled}
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

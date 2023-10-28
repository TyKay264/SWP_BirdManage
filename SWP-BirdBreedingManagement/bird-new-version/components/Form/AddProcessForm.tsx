"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import useCages from "@/hooks/useCage"
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
import axios from "axios";
import useBirdTypeProcess from "@/hooks/useBirdTypeProcess";

const formSchema = z.object({
  birdTypeName: z.string().min(1),
  // purpose: z.string().min(1),
  cockId: z.string().min(1),
  henId: z.string().min(1),
  cageId: z.string(),
});

const AddProcessForm = () => {

  const [selectedBirdType, setSelectedBirdType] = useState("");
  const router = useRouter();

  const { birdTypeProcess, cageProcess, loading } = useBirdTypeProcess();
  // console.log(birdTypeProcess)
  // console.log(cageProcess)

  // console.log(selectedBirdType)
  const birdTypeProcess1 = birdTypeProcess.find((item) => item.typeId === "1")
  const birdTypeProcess2 = birdTypeProcess.find((item) => item.typeId === "2")

  // console.log(birdTypeProcess)
  // console.log(birdTypeProcess1)
  // console.log(birdTypeProcess2)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birdTypeName: "",
      // purpose: "",
      cockId: "",
      henId: "",
      cageId: "",
    },
  });



  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //console.log("Submit button clicked");
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.post(
        "https://bird-swp.azurewebsites.net/api/reproductionprocess/create",
        values
      );
      console.log(values);
      form.reset();
      window.location.reload()

    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  if (!loading) return <div className="content-body">...loading</div>


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
                <div className="col-xl-8">

                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="birdTypeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loài</FormLabel>
                          <Select
                            disabled={isLoading}
                            onValueChange={(value: any) => {
                              field.onChange(value);
                              setSelectedBirdType(value);
                            }}
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
                                {birdTypeProcess?.map((item) => (
                                  <SelectItem
                                    value={item.name}
                                    key={item.name}
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

                  {selectedBirdType === "Chích chòe than" && birdTypeProcess1 && (
                    <>
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="cockId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID chim trống</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn ID chim trống" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {birdTypeProcess1.cock.map((item) => (
                                    <SelectItem value={item.birdId} key={item.birdId}>
                                      <strong>ID:</strong> {item.birdId}  <strong> - Tỉ lệ đột biến:</strong> {item.mutationRate}%  <strong> - Tỉ lệ sinh sản thành công:</strong> {item.superReproduct != null ? `${item.superReproduct}%` : "Chưa có thông tin"}
                                    </SelectItem>
                                  ))}
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
                          name="henId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID chim mái</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn ID chim mái" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {birdTypeProcess1.hen.map((item) => (
                                    <SelectItem value={item.birdId} key={item.birdId}>
                                      <strong>ID:</strong> {item.birdId}  <strong> - Tỉ lệ đột biến:</strong> {item.mutationRate}%  <strong> - Tỉ lệ sinh sản thành công:</strong> {item.superReproduct != null ? `${item.superReproduct}%` : "Chưa có thông tin"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

                  {selectedBirdType === "Chích chòe lửa" && birdTypeProcess2 && (
                    <>
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="cockId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID chim trống</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn ID chim trống" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {birdTypeProcess2.cock.map((item) => (
                                    <SelectItem value={item.birdId} key={item.birdId}>
                                      <strong>ID:</strong> {item.birdId}  <strong> - Tỉ lệ đột biến:</strong> {item.mutationRate}%  <strong> - Tỉ lệ sinh sản thành công:</strong> {item.superReproduct != null ? `${item.superReproduct}%` : "Chưa có thông tin"}
                                    </SelectItem>
                                  ))}
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
                          name="henId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID chim mái</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn ID chim mái" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {birdTypeProcess2.hen.map((item) => (
                                    <SelectItem value={item.birdId} key={item.birdId}>
                                      <strong>ID:</strong> {item.birdId}  <strong> - Tỉ lệ đột biến:</strong> {item.mutationRate}%  <strong> - Tỉ lệ sinh sản thành công:</strong> {item.superReproduct != null ? `${item.superReproduct}%` : "Chưa có thông tin"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

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
                                {cageProcess.map((cage) => (
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

                  <div className="form-group text-center ">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="btn btn-primary float-end"
                    >
                      Tạo quá trình
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
export default AddProcessForm;
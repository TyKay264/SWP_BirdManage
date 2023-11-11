"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "react-toastify";

import axios from "axios";
import useBirdTypeProcess from "@/hooks/useBirdTypeProcess";
import { Checkbox } from "../ui/checkbox";
import { Bird } from "@/type";
import BirdInitDetail from "../BirdInitDetail/BirdInitDetail";
import { Button } from "../ui/button";
import Loading from "../LoadingComponent";

const formSchema = z.object({
  birdTypeName: z.string().min(1),
  // purpose: z.string().min(1),
  cockId: z.string().min(1),
  henId: z.string().min(1),
  cageId: z.string(),
});

const AddProcessForm = () => {
  const [selectedBirdType, setSelectedBirdType] = useState("");
  const [showInfoBird, setShowInfoBird] = useState(false);
  const [selectedBirdCockInfo, setSelectedBirdCockInfo] = useState<null | Bird>(
    null
  );
  const [selectedBirdHenInfo, setSelectedBirdHenInfo] = useState<null | Bird>(
    null
  );
  const router = useRouter();
  const { birdTypeProcess, cageProcess, loading } = useBirdTypeProcess();

  const birdTypeProcess1 = birdTypeProcess.find((item) => item.typeId === "1");
  const birdTypeProcess2 = birdTypeProcess.find((item) => item.typeId === "2");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birdTypeName: "",
      cockId: "",
      henId: "",
      cageId: "",
    },
  });
  if (!loading)
    return (
      <div className="">
        <Loading />
      </div>
    );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.post(
        "https://bird-swp.azurewebsites.net/api/reproductionprocess/create",
        values
      );
      form.reset();
      router.push(`/cage/${values.cageId}`);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert(`Cặp chim ${values.cockId} và ${values.henId} có nguy cơ không hợp nhau`);
        // alert("Cặp chim này không hợp nhau")
        toast.error(`Cặp chim ${values.cockId} và ${values.henId} có nguy cơ không hợp nhau`);
        await axios.post(
          "https://bird-swp.azurewebsites.net/api/reproductionprocess/create?confirm=true",
          values
        );
        router.push(`/cage/${values.cageId}`);
      } else {
        console.error(error);
      }
    }
  };


  const isLoading = form.formState.isSubmitting;

  if (!loading) return <div className="content-body">...loading</div>;

  return (
    <div className="card">
      <div className="card-header ">
        <h4 className="card-title ">Điền Thông Tin</h4>
      </div>
      <div className="card-body">
        <div className="flex flex-col md:flex-row ">
          <div className="basic-form flex-1">
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

                    {selectedBirdType === "Chích chòe than" &&
                      birdTypeProcess1 && (
                        <>
                          <div className="form-group">
                            <FormField
                              control={form.control}
                              name="cockId"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ID chim trống</FormLabel>
                                  <Select
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      const selectedBird =
                                        birdTypeProcess1.cock.find(
                                          (item) => item.birdId === value
                                        );
                                      setSelectedBirdCockInfo(
                                        selectedBird || null
                                      );
                                      setShowInfoBird(true);
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Chọn ID chim trống" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {birdTypeProcess1.cock.map((item) => (
                                        <SelectItem
                                          value={item.birdId}
                                          key={item.birdId}
                                        >
                                          <strong>ID:</strong> {item.birdId}{" "}
                                          <strong> - Tỉ lệ đột biến:</strong>{" "}
                                          {item.mutationRate != null
                                            ? `${item.mutationRate}%`
                                            : "Chưa có thông tin"}{" "}
                                          <strong>
                                            {" "}
                                            - Tỉ lệ sinh sản thành công:
                                          </strong>{" "}
                                          {item.superReproduct != null
                                            ? `${item.superReproduct}%`
                                            : "Chưa có thông tin"}
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
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      const selectedBird =
                                        birdTypeProcess1.hen.find(
                                          (item) => item.birdId === value
                                        );
                                      setSelectedBirdHenInfo(
                                        selectedBird || null
                                      );
                                      setShowInfoBird(true);
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Chọn ID chim mái" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {birdTypeProcess1.hen.map((item) => (
                                        <SelectItem
                                          value={item.birdId}
                                          key={item.birdId}
                                        >
                                          <strong>ID:</strong> {item.birdId}{" "}
                                          <strong> - Tỉ lệ đột biến:</strong>{" "}
                                          {item.mutationRate != null
                                            ? `${item.mutationRate}%`
                                            : "Chưa có thông tin"}{" "}
                                          <strong>
                                            {" "}
                                            - Tỉ lệ sinh sản thành công:
                                          </strong>{" "}
                                          {item.superReproduct != null
                                            ? `${item.superReproduct}%`
                                            : "Chưa có thông tin"}
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

                    {selectedBirdType === "Chích chòe lửa" &&
                      birdTypeProcess2 && (
                        <>
                          <div className="form-group">
                            <FormField
                              control={form.control}
                              name="cockId"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ID chim trống</FormLabel>
                                  <Select
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      const selectedBird =
                                        birdTypeProcess2.cock.find(
                                          (item) => item.birdId === value
                                        );
                                      setSelectedBirdCockInfo(
                                        selectedBird || null
                                      );
                                      setShowInfoBird(true);
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Chọn ID chim trống" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {birdTypeProcess2.cock.map((item) => (
                                        <SelectItem
                                          value={item.birdId}
                                          key={item.birdId}
                                        >
                                          <strong>ID:</strong> {item.birdId}{" "}
                                          <strong> - Tỉ lệ đột biến:</strong>{" "}
                                          {item.mutationRate != null
                                            ? `${item.mutationRate}%`
                                            : "Chưa có thông tin"}{" "}
                                          <strong>
                                            {" "}
                                            - Tỉ lệ sinh sản thành công:
                                          </strong>{" "}
                                          {item.superReproduct != null
                                            ? `${item.superReproduct}%`
                                            : "Chưa có thông tin"}
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
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      const selectedBird =
                                        birdTypeProcess2.hen.find(
                                          (item) => item.birdId === value
                                        );
                                      setSelectedBirdHenInfo(
                                        selectedBird || null
                                      );
                                      setShowInfoBird(true);
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Chọn ID chim mái" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {birdTypeProcess2.hen.map((item) => (
                                        <SelectItem
                                          value={item.birdId}
                                          key={item.birdId}
                                        >
                                          <strong>ID:</strong> {item.birdId}{" "}
                                          <strong> - Tỉ lệ đột biến:</strong>{" "}
                                          {item.mutationRate != null
                                            ? `${item.mutationRate}%`
                                            : "Chưa có thông tin"}{" "}
                                          <strong>
                                            {" "}
                                            - Tỉ lệ sinh sản thành công:
                                          </strong>{" "}
                                          {item.superReproduct != null
                                            ? `${item.superReproduct}%`
                                            : "Chưa có thông tin"}
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

          {selectedBirdType === "Chích chòe than" && (
            <div className="md:w-[600px] flex-grow-0 flex flex-col justify-between space-y-2 ">
              {showInfoBird && selectedBirdCockInfo && (
                <BirdInitDetail
                  birdId={selectedBirdCockInfo.birdId}
                  image={selectedBirdCockInfo.image}
                  mutationRate={selectedBirdCockInfo.mutationRate}
                  mutation={selectedBirdCockInfo.mutation}
                  superReproduct={selectedBirdCockInfo.superReproduct}
                  featherColor={selectedBirdCockInfo.featherColor}
                  weight={selectedBirdCockInfo.weight}
                  sex={selectedBirdCockInfo.sex}
                />
              )}
              {showInfoBird && selectedBirdHenInfo && (
                <BirdInitDetail
                  birdId={selectedBirdHenInfo.birdId}
                  image={selectedBirdHenInfo.image}
                  mutationRate={selectedBirdHenInfo.mutationRate}
                  mutation={selectedBirdHenInfo.mutation}
                  superReproduct={selectedBirdHenInfo.superReproduct}
                  featherColor={selectedBirdHenInfo.featherColor}
                  weight={selectedBirdHenInfo.weight}
                  sex={selectedBirdHenInfo.sex}
                />
              )}
            </div>
          )}

          {selectedBirdType === "Chích chòe lửa" && (
            <div className="md:w-[600px] flex-grow-0 flex flex-col justify-between space-y-2  ">
              {showInfoBird && selectedBirdCockInfo && (
                <BirdInitDetail
                  birdId={selectedBirdCockInfo.birdId}
                  image={selectedBirdCockInfo.image}
                  mutationRate={selectedBirdCockInfo.mutationRate}
                  mutation={selectedBirdCockInfo.mutation}
                  superReproduct={selectedBirdCockInfo.superReproduct}
                  featherColor={selectedBirdCockInfo.featherColor}
                  weight={selectedBirdCockInfo.weight}
                  sex={selectedBirdCockInfo.sex}
                />
              )}
              {showInfoBird && selectedBirdHenInfo && (
                <BirdInitDetail
                  birdId={selectedBirdHenInfo.birdId}
                  image={selectedBirdHenInfo.image}
                  mutationRate={selectedBirdHenInfo.mutationRate}
                  mutation={selectedBirdHenInfo.mutation}
                  superReproduct={selectedBirdHenInfo.superReproduct}
                  featherColor={selectedBirdHenInfo.featherColor}
                  weight={selectedBirdHenInfo.weight}
                  sex={selectedBirdHenInfo.sex}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddProcessForm;

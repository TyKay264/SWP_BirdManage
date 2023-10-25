"use client";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/useModal";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  number: z.string(),
  laidDate: z.string(),
});

const AddEggForm = () => {
  const { isOpen, type, onClose, data } = useModal();
  //console.log(data.cage)
  const isModalOpen = isOpen && type === "AddEggForm";

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      laidDate: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    //console.log(data.cage?.cageId)
    console.log(values);
    try {
      await axios.post(
        `https://bird-swp.azurewebsites.net/api/birdreproductions/addegg/${data.cage?.cageId}`,
        values
      );
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Thêm trứng</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm trứng</DialogTitle>
        </DialogHeader>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Nhập thông tin trứng</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="row">
                    {/* <div className="col-xl-4"></div> */}

                    <div className="col-xl-12">
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="number"
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
                                    <SelectValue placeholder="Chọn số lượng trứng" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Chọn khu vực</SelectLabel>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
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
                          name="laidDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ngày ấp trứng</FormLabel>
                              <FormControl>
                                <Input
                                  type="date"
                                  placeholder="Chọn ấp trứng"
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
                          className="btn btn-primary float-end "
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

export default AddEggForm;

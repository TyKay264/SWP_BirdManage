import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
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
  number: z.coerce.number(),
  laidDate: z.string().min(1),
});


const AddEggForm = () => {
  const { isOpen, type, onClose, data } = useModal();

  const isModalOpen = isOpen && type === "AddEggForm";

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      laidDate: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TO DO xử lý form (api)
    console.log(values);
    try {
      await axios.post(
        "https://bird-swp.azurewebsites.net/api/eggs/create",
        values
      );
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Thêm trứng</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:min-w-[500px]">
        <DialogHeader>
          <DialogTitle>Thêm trứng</DialogTitle>
          {/* <DialogDescription>
            Nhập số lượng trứng cần thêm và ngày thêm vào
          </DialogDescription> */}
        </DialogHeader>
        <div className="card">
          <div className="card-header ">
            <h4 className="card-title ">Nhập Thông Tin</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="form-group">
                        <FormField
                          control={form.control}
                          name="number"
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
                                    <SelectValue placeholder="Chọn số lượng trứng" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Chọn số lượng trứng</SelectLabel>
                                    <SelectItem value="1">
                                      1
                                    </SelectItem>
                                    <SelectItem value="2">
                                      2
                                    </SelectItem>
                                    <SelectItem value="3">
                                      3
                                    </SelectItem>
                                    <SelectItem value="4">
                                      4
                                    </SelectItem>
                                    <SelectItem value="5">
                                      5
                                    </SelectItem>
                                    {/* <SelectItem value="6">
                                      6
                                    </SelectItem>
                                    <SelectItem value="7">
                                      7
                                    </SelectItem>
                                    <SelectItem value="8">
                                      9
                                    </SelectItem>
                                    <SelectItem value="10">
                                      10
                                    </SelectItem> */}
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
                              {/* <FormLabel>Ngày thêm trứng</FormLabel> */}
                              <FormControl>
                                <Input
                                  type="date"
                                  placeholder="Chọn ngày thêm trứng"
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
      </DialogContent>
    </Dialog>
  )
}

export default AddEggForm

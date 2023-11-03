"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod";
import axios from "axios";


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useState } from "react";


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
const LoginForm = () => {
    const { login, user, logout } = useAuth();
    const [error, setError] = useState(null);

    console.log(user);

    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await login(values.username, values.password);
        router.push("/")

    };

    return (
        <div className="">

            <h4 className="title">Đăng nhập</h4>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="form-group">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tài khoản</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập tài khoản" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {form.formState.errors.username && (
                        <p>{form.formState.errors.username.message}</p>
                    )}

                    <div className="form-group">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Nhập mật khẩu" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {form.formState.errors.password && (
                        <p>{form.formState.errors.password.message}</p>
                    )}

                    <Button type="submit">Đăng nhập</Button>
                    {error && <p>{error}</p>}
                </form>
            </Form>
        </div>


    )
}

export default LoginForm;

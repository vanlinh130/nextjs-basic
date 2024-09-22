'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterBody, RegisterBodyType } from '@/schemaValidations/auth.schema';
import { useEffect, useState } from 'react';
import envConfig from '@/config';
import authApiRequest from '@/apiRequests/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { handleErrorApi } from '@/lib/utils';

export default function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    useEffect(() => {
        console.log(envConfig.NEXT_PUBLIC_API_ENDPOINT);
    }, []);

    // 1. Define your form.
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: {
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: RegisterBodyType) {
        if (loading) return;
        setLoading(true);
        try {
            const result = await authApiRequest.register(values);
            toast({
                description: result.payload.message,
            });
            await authApiRequest.auth({ sessionToken: result.payload.data.token });
            router.push('/me');
        } catch (error: any) {
            handleErrorApi({
                error,
                setError: form.setError,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-2 max-w-[600px] w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="!mt-8 w-full">
                    Đăng ký
                </Button>
            </form>
        </Form>
    );
}

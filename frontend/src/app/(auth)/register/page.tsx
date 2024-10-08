"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Lock, Mail, User } from "lucide-react";

import type { RegisterFormData } from "@/types/auth.types";
import { registerFormSchema } from "@/lib/schemas";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";
import { useAuth } from "@/context/useAuth";

export default function RegisterPage() {
	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const { isLoading, register, state } = useAuth();

	const handleRegister = (formData: RegisterFormData) => register(formData);

	return (
		<AuthLayout
			error={state.errorMessage}
			title="Join TubeNote Today"
			description="Unlock the full potential of video learning with our powerful tools"
		>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleRegister)}
						className="space-y-4"
					>
						<FormInput
							name="username"
							type="username"
							label="Username"
							placeholder="You Username"
							icon={User}
							control={form.control}
						/>
						<FormInput
							name="email"
							type="email"
							label="Email"
							placeholder="you@example.com"
							icon={Mail}
							control={form.control}
						/>
						<FormInput
							name="password"
							type="password"
							label="Password"
							placeholder="********"
							icon={Lock}
							control={form.control}
						/>
						<Button
							type="submit"
							className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700"
							disabled={isLoading}
						>
							{isLoading ? "Registering..." : "Register"}
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="justify-center">
				<p className="text-sm text-gray-600">
					Already have an account?{" "}
					<Link href="/login" className="text-red-600 hover:underline">
						Login here
					</Link>
				</p>
			</CardFooter>
		</AuthLayout>
	);
}

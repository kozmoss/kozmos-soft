"use client";
import { AuthForm } from "@/components/auth-form";
import { register, type RegisterActionState } from '../actions';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { SubmitButton } from "@/components/submit-form-button";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
  
    const [state, formAction] = useActionState<RegisterActionState, FormData>(
      register,
      {
        status: 'idle',
      },
    );
  
  const { update: updateSession } = useSession();

  useEffect(() => {
    if (state.status === "user_exists") {
      toast.error("'Account already exists!' ");
    } else if (state.status === "failed") {
      toast.error('Failed to create account!');
    } else if (state.status === "invalid_data") {
        toast.error("Failed validating your submission!");
      } else if (state.status === "success") {
        toast.success('Account created successfully!')
      setIsSuccessful(true);
      updateSession();
      router.refresh();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden w-full ">
      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-gradient-to-r from-[#ffffff10] to-[#121212] backdrop-blur-sm  shadow-2xl p-8 flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center w-24 h-24 rounded-fullmb-6 shadow-lg">
          <Image height={64} width={64} alt="logo" src="/static/image/kozmos.png" />
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Sign Up
        </h2>
        <p className="text-sm mb-6 text-gray-500 dark:text-zinc-400">
          Create an account with your email and password
        </p>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton isSuccessful={isSuccessful}>Sign Up</SubmitButton>
          <div className="w-full text-center mt-2">
            <span className="text-xs text-gray-400">
              Already have an account?
              <Link
                href="/login"
                className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
              >
                {" "}
                Sign in{" "}
              </Link>
              {' instead.'}
            </span>
          </div>
        </AuthForm>
      </div>
    </div>
  );
}

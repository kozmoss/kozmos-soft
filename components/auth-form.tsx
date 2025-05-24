"use client";

import * as React from "react";
import Form from "next/form";


export const AuthForm = ({
  action,
  defaultEmail,
  children,
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
  defaultEmail?: string;
}) => {
  return (
    <Form action={action} className="flex flex-col w-full gap-4">
      <div className="w-full flex flex-col gap-3">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          autoFocus
          defaultValue={defaultEmail}
          className="w-full px-5 py-3 rounded-xl  bg-white/10 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          required
          className="w-full px-5 py-3 rounded-xl  bg-white/10 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <hr className="opacity-10" />
      {children}
    </Form>
  );
};

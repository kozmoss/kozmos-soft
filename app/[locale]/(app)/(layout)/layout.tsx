import MainLayout from "@/layout/sidebar";
import React from "react";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

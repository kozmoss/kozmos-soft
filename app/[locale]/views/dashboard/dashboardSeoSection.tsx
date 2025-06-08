/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import Image from "next/image";
import { SkeletonCard } from "@/components/skeleton-card";
import { OptimizedImage, OptimizedVideo } from "@/components/optimized-item";

export default function DashboardSeoSection() {
  const t = useTranslations("Dashboard.seo");

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row lg:pt-20">
      <div className="z-10 w-full p-4 order-2 sm:p-6 lg:w-2/5 lg:p-12 lg:order-1">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
          <div className="flex min-h-[60vh] items-center p-2 lg:h-screen lg:snap-start sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-center mb-4 lg:hidden bg-zinc-950  ">
                <Image
                  src="/static/image/seo.png"
                  alt={""}
                  fill
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed sm:text-base lg:text-xl">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-[30vh] w-full sm:h-[50vh] lg:sticky lg:top-20 lg:order-2 lg:flex lg:h-screen lg:w-3/5">
        <div className="flex h-full w-full items-center justify-center px-4 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <Suspense fallback={<SkeletonCard />}>
              <OptimizedImage
                src={"/static/image/seo.png"}
                alt={t(`description`)}
                className="w-full h-full object-contain  rounded-lg"
                priority={true}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import Image from "next/image";
import { SkeletonCard } from "@/components/skeleton-card";
import { OptimizedImage, OptimizedVideo } from "@/components/optimized-item";



export default function DashboarbWebSection() {
  const t = useTranslations("Dashboard.webComponent");

  const sections = [
    {
      key: "userExperienceAndDesign",
      image: "/static/image/mobile-web-1.png",
      priority: true,
    },
    {
      key: "technicalInfrastructure",
      image: "/static/image/mobile-web-2.png",
      priority: false,
    },
    {
      key: "securityAndDataManagement",
      image: "/static/image/mobile-web-3.png",
      priority: false,
    },
    {
      key: "continuousIntegration",
      image: "/static/image/mobile-web-4.png",
      priority: false,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row lg:pt-20">
      {/* Metin Alanı - Genişliği lg:w-2/5 olarak güncellendi */}
      <div className="z-10 w-full p-4 order-2 sm:p-6 lg:w-2/5 lg:p-12 lg:order-1">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
          {sections.map(({ key, image, priority }) => (
            <div
              key={key}
              className="flex min-h-[60vh] items-center p-2 lg:h-screen lg:snap-start sm:p-4 lg:p-12"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-center mb-4 lg:hidden">
                  <OptimizedImage
                    src={image}
                    alt={t(`${key}.title`)}
                    className="h-auto w-full max-w-xs rounded-md object-contain sm:max-w-sm"
                    priority={priority}
                  />
                </div>

                <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
                  {t(`${key}.title`)}
                </h2>
                <p className="text-sm leading-relaxed sm:text-base lg:text-xl">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Alanı - Genişliği lg:w-3/5 olarak güncellendi */}
      <div className="hidden h-[30vh] w-full sm:h-[50vh] lg:sticky lg:top-20 lg:order-2 lg:flex lg:h-screen lg:w-3/5">
        <div className="flex h-full w-full items-center justify-center px-4 lg:px-8">
          {/* Maksimum genişlik artırıldı */}
          <div className="h-auto w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <Suspense fallback={<SkeletonCard />}>
              <OptimizedVideo
                src="/static/videos/dashboard/dashboard.mp4"
                className="h-auto max-h-[80vh] w-full rounded-lg object-contain shadow-2xl"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
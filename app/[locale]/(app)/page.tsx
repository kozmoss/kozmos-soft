// app/dashboard/page.js

import React from "react";
import DashboarbMobileSection from "../views/dashboard/dashboarbMobileSection";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { SplineScene } from "@/components/spline/spline";
import DashboarbWebSection from "../views/dashboard/dashboarbSectionWeb";
import { Separator } from "@/components/ui/separator";

import DashboardAiSection from "../views/dashboard/dashboardaiSection";
import { CardMarquee } from "@/components/marque";
import { cards } from "@/components/MarqueCard";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations('Dashboard');
  return (
    <div className="@container grid flex-1   ">
      {/* Ana Görsel Bölümü */}
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/static/image/dashboardmain.jpg"
            alt={t('mainImage.alt')}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute left-4 sm:left-6 md:left-10 top-4 sm:top-6 md:top-10 flex flex-col z-10">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            {t('mainHeading.line1')}
          </div>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            {t('mainHeading.line2')}
          </div>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            {t('mainHeading.line3')}
          </div>
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
            {t('mainHeading.subtitle')}
          </div>
        </div>
      </section>


      <div className="flex flex-col gap-y-12">
        <section className="container">
          <div className="p-24 text-center">
            <h1 className="text-8xl font-extrabold mb-6">{t('mobile.title')}</h1>
            <p className="text-5xl mx-auto">
              {t('mobile.description')}
            </p>
          </div>
          <DashboarbMobileSection />
        </section>
        <Separator />
        <section className="container">
          <div className="p-24 text-center">
            <h1 className="text-8xl font-extrabold mb-6">{t('web.title')}</h1>
            <p className="text-5xl mx-auto">
              {t('web.description')}
            </p>
          </div>

          <DashboarbWebSection />
        </section>
        <Separator />

        <section className="flex flex-col">
          <div className="container">
            <div className="p-24 text-center">
              <h1 className="text-8xl font-extrabold mb-6">{t('3d.title')}</h1>
              <p className="text-3xl lg:text-5xl mx-auto">
                {t('3d.description')}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-16 gap-x-5">
            <Card className="w-full md:h-[700px] h-[300px] bg-black/[0.96] relative overflow-hidden rounded-none">
              <div className="flex h-full">
                {/* Right content */}
                <div className="flex-1 relative">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>

            <section className="">
              <div className="container">
                <div className="p-24 text-center">
                  <h1 className="text-8xl font-extrabold mb-6">
                    {t('ai.title')}
                  </h1>
                  <p className="text-3xl lg:text-5xl mx-auto">
                    {t('ai.description')}
                  </p>
                </div>
              </div>

              <DashboardAiSection />
            </section>
          </div>
        </section>

        <section className="h-screen flex flex-col bg-zinc-950 text-white">
          <div className="pt-10 pb-6 px-6 md:pt-16 md:pb-8">
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-[85px] leading-tight md:leading-[88px] text-center">
              {t('colors.title')}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-5 flex-1">
            {/* Video Area */}
            <div className="w-full md:w-3/5 flex-1 relative">
              <div className="absolute inset-0 flex w-full">
                <video
                  src="/static/image/colorpallate.mov"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4 md:p-8 lg:p-12">
              <p className="font-normal text-xl md:text-2xl leading-relaxed md:leading-[38px] text-[#5A5A5A] text-center md:text-left">
                {t('colors.description')}
              </p>
            </div>
          </div>
        </section>

        <Separator />
        <section className="h-screen flex flex-col">
          <div className="pt-10 pb-6 px-6 md:pt-16 md:pb-8">
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-[85px] leading-tight md:leading-[88px] text-[#080808] text-center">
              {t('seo.title')}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-5 flex-1">
            {/* Text Area */}
            <div className="w-full md:w-2/5 p-4 md:p-8 lg:p-12">
              <p className="font-normal text-xl md:text-2xl leading-relaxed text-center md:leading-[38px] text-[#5A5A5A]">
                {t('seo.description')}
              </p>
            </div>

            {/* Image Area with Black Background */}
            <div className="w-full md:w-3/5 bg-zinc-950 flex-1 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/static/image/seo.png"
                  alt={t('seo.imageAlt')}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-zinc-950 py-16 -mt-12">
          <div className="max-w-full px-4 relative">
            <CardMarquee items={cards} speed={50} gap={32} />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

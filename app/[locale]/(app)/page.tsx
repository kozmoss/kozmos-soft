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
import ChatPage from "@/components/ai-input";
import { Typewriter } from "@/components/ui/typewriter-text";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");

  return (
    <div className="@container grid flex-1">
      {/* Ana Görsel Bölümü */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/static/image/dashboardmain.jpg"
            alt={t("mainImage.alt")}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute left-4 sm:left-6 md:left-10 top-4 sm:top-6 md:top-10 flex flex-col z-10">
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            {t("mainHeading.line1")}
          </div>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            {t("mainHeading.line2")}
          </div>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            {t("mainHeading.line3")}
          </div>
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mt-2 sm:mt-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[60%]">
            {t("mainHeading.subtitle")}
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6">
              {t("mobile.title")}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto px-4">
              {t("mobile.description")}
            </p>
          </div>
          <DashboarbMobileSection />
        </section>
        
        <Separator />
        
        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6">
              {t("web.title")}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto px-4">
              {t("web.description")}
            </p>
          </div>
          <DashboarbWebSection />
        </section>
        
        <Separator />

        <section className="flex flex-col">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6">
                {t("3d.title")}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto px-4">
                {t("3d.description")}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16">
            <Card className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-black/[0.96] relative overflow-hidden rounded-none">
              <div className="flex h-full">
                <div className="flex-1 relative">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>

            <section>
              <div className="container px-4 sm:px-6 lg:px-8">
                <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6">
                    {t("ai.title")}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto px-4">
                    {t("ai.description")}
                  </p>
                </div>
              </div>
              <DashboardAiSection />
            </section>
          </div>
        </section>

        <Separator />
        
        <section className="grid lg:grid-cols-2 w-full min-h-screen lg:divide-x-1 lg:divide-dashed">
          {/* Left Side */}
          <div className="flex flex-col justify-start w-full order-2 lg:order-1">
            {/* Heading */}
            <div className="pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6 md:pt-12 md:pb-8 lg:pt-16 w-full">
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85px] leading-tight sm:leading-[1.1] md:leading-[88px] text-center">
                Chat AI
              </h1>
            </div>

            {/* Card - Centered */}
            <div className="flex flex-1 items-center justify-center px-4 pb-8 lg:pb-0">
              <Card className="p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full max-w-[600px]">
                <div className="bg-muted text-xs sm:text-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow border w-fit max-w-[85%] sm:max-w-[80%] ml-auto">
                  <p className="text-muted-foreground">
                    {t("chat.userQuestion")}
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground text-xs sm:text-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow w-fit max-w-[85%] sm:max-w-[80%] mt-3 sm:mt-4">
                  <Typewriter
                    text={[t("chat.aiResponse1")]}
                    speed={60}
                    loop={true}
                    className="text-xs sm:text-sm"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center w-full p-4 sm:p-6 md:p-8 order-1 lg:order-2 min-h-[400px] lg:min-h-auto">
            <ChatPage />
          </div>
        </section>

        <Separator />
        
        <section className="min-h-screen flex flex-col bg-zinc-950 text-white">
          <div className="pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6 md:pt-12 md:pb-8 lg:pt-16">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85px] leading-tight sm:leading-[1.1] md:leading-[88px] text-center">
              {t("colors.title")}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 flex-1">
            {/* Video Area */}
            <div className="w-full lg:w-3/5 flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-auto">
              <div className="absolute inset-0 flex w-full">
                <video
                  src="/static/image/colorpallate.mov"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/5 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center">
              <p className="font-normal text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-[1.6] md:leading-[38px] text-[#5A5A5A] text-center lg:text-left">
                {t("colors.description")}
              </p>
            </div>
          </div>
        </section>

        <Separator />
        
        <section className="min-h-screen flex flex-col">
          <div className="pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6 md:pt-12 md:pb-8 lg:pt-16">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85px] leading-tight sm:leading-[1.1] md:leading-[88px] text-[#080808] text-center">
              {t("seo.title")}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 flex-1">
            {/* Text Area */}
            <div className="w-full lg:w-2/5 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center order-2 lg:order-1">
              <p className="font-normal text-lg sm:text-xl md:text-2xl leading-relaxed text-center sm:leading-[1.6] md:leading-[38px] text-[#5A5A5A] lg:text-left">
                {t("seo.description")}
              </p>
            </div>

            {/* Image Area with Black Background */}
            <div className="w-full lg:w-3/5 bg-zinc-950 flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-auto order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/static/image/seo.png"
                  alt={t("seo.imageAlt")}
                  fill
                  className="object-contain p-4 sm:p-6 md:p-8"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-zinc-950 py-8 sm:py-12 md:py-16 -mt-6 sm:-mt-8 md:-mt-12">
          <div className="max-w-full px-2 sm:px-4 relative">
            <CardMarquee items={cards} speed={50} gap={32} />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
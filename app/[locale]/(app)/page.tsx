// app/dashboard/page.js

import React from "react";
import DashboarbMobileSection from "../views/dashboard/dashboarbMobileSection";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/spline/spline";
import DashboarbWebSection from "../views/dashboard/dashboarbSectionWeb";
import { Separator } from "@/components/ui/separator";
import DashboardAiSection from "../views/dashboard/dashboardaiSection";
import { CardMarquee } from "@/components/marque";
import { cards } from "@/components/MarqueCard";
import { useTranslations } from "next-intl";

import { Typewriter } from "@/components/ui/typewriter-text";
import { HeroSection } from "@/components/blocks/hero-section";
import DashboardColorSection from "../views/dashboard/dashboardColorSection";
import DashboardSeoSection from "../views/dashboard/dashboardSeoSection";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");

  return (
    <div className=" grid flex-1">
      <section className="h-screen bg-section-dark">
        <HeroSection
          title={t("mainHeading.line1")}
          description={t("mainHeading.subtitle")}
          image={{
            light: "",
            dark: "",
            alt: "",
          }}
        />
      </section>

      <div className="flex flex-col">
        <section className=" px-4 sm:px-6 lg:px-8">
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

        <section className=" px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center sm:py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
              {t("web.title")}
            </h1>
            <p className="mx-auto px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
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
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center sm:py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
              {t("ai.title")}
            </h1>
            <p className="mx-auto px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {t("ai.description")}
            </p>
          </div>
          <DashboardAiSection />
        </section>

        <Separator />

        <section className="grid lg:grid-cols-2 w-full min-h-screen divide-x-1 divide-dashed">
          <div className="flex flex-col justify-center w-full order-2 lg:order-1 p-4 sm:p-6 lg:p-8">
            <div className="w-full text-center mb-6 md:mb-10">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Chat AI
              </h1>
            </div>

            <div className="flex flex-1 items-center justify-center w-full">
              <div className="p-4 sm:p-6 rounded-2xl shadow-xl border w-full max-w-[600px] min-h-[450px] md:min-h-[500px] flex flex-col gap-4">
                <div className="bg-muted text-sm p-3 rounded-xl rounded-br-none shadow border w-fit max-w-[85%] self-end">
                  <p className="text-muted-foreground">
                    {t("chat.userQuestion1")}
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground text-sm p-3 rounded-xl rounded-bl-none shadow w-fit max-w-[85%] self-start">
                  <p>{t("chat.aiResponse1")}</p>
                </div>

                <div className="bg-muted text-sm p-3 rounded-xl rounded-br-none shadow border w-fit max-w-[85%] self-end">
                  <p className="text-muted-foreground">
                    {t("chat.userQuestion2")}
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground text-sm p-3 rounded-xl rounded-bl-none shadow w-fit max-w-[85%] self-start">
                  <Typewriter
                    text={[t("chat.aiResponse2")]}
                    speed={50}
                    loop={false} // Genellikle son cevabın döngüde olmaması daha doğaldır
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/30 flex flex-col justify-center gap-4 p-8 text-left md:gap-8 md:p-10 lg:p-16 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("ai.subAi.title")}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 md:mb-8">
              {t("ai.subAi.subtitle")}
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground text-lg">
                  {t("ai.subAi.headline1")}
                </span>
                <p className="text-base">- {t("ai.subAi.desc1")}</p>
              </li>
              <li>
                <span className="font-semibold text-foreground text-lg">
                  {t("ai.subAi.headline2")}
                </span>
                <p className="text-base">- {t("ai.subAi.desc2")}</p>
              </li>
              <li>
                <span className="font-semibold text-foreground text-lg">
                  {t("ai.subAi.headline3")}
                </span>
                <p className="text-base">- {t("ai.subAi.desc3")}</p>
              </li>
              <li>
                <span className="font-semibold text-foreground text-lg">
                  {t("ai.subAi.headline4")}
                </span>
                <p className="text-base">- {t("ai.subAi.desc4")}</p>
              </li>
              <li>
                <span className="font-semibold text-foreground text-lg">
                  {t("ai.subAi.headline5")}
                </span>
                <p className="text-base">- {t("ai.subAi.desc5")}</p>
              </li>
            </ul>
          </div>
        </section>

        <Separator />

        <section className=" px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center sm:py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
              {t("colors.title")}
            </h1>
          </div>
          <DashboardColorSection />
        </section>

        <Separator />

        <section className=" px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center sm:py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
              {t("seo.title")}
            </h1>
          </div>
          <DashboardSeoSection />
        </section>

        <div className="w-full py-8 sm:py-12 md:py-16 -mt-6 sm:-mt-8 md:-mt-12 bg-section-dark">
          <div className="max-w-full px-2 sm:px-4 relative">
            <CardMarquee items={cards} speed={50} gap={32} />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

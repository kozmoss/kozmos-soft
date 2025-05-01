"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { LineChart, Brain } from "lucide-react";
import { AnimatedCardDemo } from "@/components/animation-card";
import ChatPage from "@/components/ai-input";
import { OrbitingCirclesDemo } from "@/components/orbiting-demos";
import { Typewriter } from "@/components/ui/typewriter-text";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toolRegistry } from "@/contants/tabContant";
import { useState } from "react";


type Category = 'sales' | 'research' | 'featured' | 'marketing';

export default function AIPage() {
  const t = useTranslations("AIPage");
  const [activeTab, setActiveTab] = useState("marketing"); 

  const generateToolKeysByCategory = (): { [key: string]: string[] } => {
    const categories: { [key: string]: string[] } = {
      sales: [],
      research: [],
      featured: [],
      marketing: []
    };
    
    Object.entries(toolRegistry).forEach(([key, details]) => {
      if (categories[details.category]) {
        categories[details.category].push(key);
      }
    });
    
    return categories;
  };
  

  const getIconForTool = (key: string): string => {
    return toolRegistry[key]?.icon || '❓'; // Araç bulunamazsa varsayılan ikon
  };
  
  const getCategoryDisplayName = (category: Category): string => {
    const displayNames: Record<Category, string> = {
      sales: "Sales",
      research: "Research",
      featured: "Featured",
      marketing: "Marketing"
    };
    return displayNames[category] || category;  // Burada "category" her zaman geçerli olacak, ancak fallback olarak da "category" dönebiliriz.
  };


  const categories = generateToolKeysByCategory();
  const categoryKeys: Category[] = ['sales', 'research', 'featured', 'marketing'];

  return (
    <div className=" mx-auto max-w-screen-2xl flex flex-col border-x border-dashed h-full">
      <section className="flex w-full flex-col md:flex-row h-screen ">
        <div className="border-dashed dark:border-border w-full space-y-4 border-0 md:w-1/2 md:border-r">
          <div className="text-foreground flex flex-col gap-4 p-8 text-left md:gap-8 md:p-10 lg:p-16">
            <h1 className="md:text-5xl font-bold ">{t("hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("hero.subtitle")}
            </p>
            <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
              <li>
                <span className="text-foreground font-medium">
                  {t("hero.headline1")}
                </span>
                - {t("hero.desc1")}
              </li>
              <li>
                <span className="text-foreground font-medium">
                  {" "}
                  {t("hero.headline2")}
                </span>
                - {t("hero.desc2")}
              </li>
              <li>
                <span className="text-foreground font-medium">
                  {" "}
                  {t("hero.headline3")}
                </span>
                - {t("hero.desc3")}
              </li>
              <li>
                <span className="text-foreground font-medium">
                  {" "}
                  {t("hero.headline4")}
                </span>
                - {t("hero.desc4")}
              </li>
              <p>
                <span className="text-foreground font-medium">
                  {t("hero.headline5")}{" "}
                </span>
                - {t("hero.desc5")}
              </p>
            </ul>
          </div>
        </div>

        <div className="flex flex-col  max-w-4xl  p-4 w-full border-dashed border-t md:h-auto md:w-1/2 md:border-0 md:p-8 ">
          <ChatPage />
        </div>
      </section>

      <section className="w-full flex-col items-center justify-center border-dashed border-t">
        <div className="relative mx-4 border-dashed sm:mx-14">
          <div className="flex flex-col gap-4 px-4 py-16 text-center sm:px-8 sm:py-32">
            <h2 className="text-foreground leading-tight text-3xl font-semibold text-balance">
              {t("whatIs.title")}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg mb-6">
              {t("whatIs.subtitle")}
            </p>
            <div className="mx-auto mt-8 max-w-4xl p-6">
              <ol className="list-decimal space-y-6 pl-6 text-left text-lg leading-relaxed sm:text-xl">
                <li>{t("whatIs.point1")}</li>
                <li>{t("whatIs.point2")}</li>
                <li>{t("whatIs.point3")}</li>
                <li>{t("whatIs.point4")}</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 overflow-hidden border-t md:grid-cols-2 border-dashed ">
          <div className="flex flex-col justify-center items-center border-dashed border-b md:border-r md:border-b-1">
            <AnimatedCardDemo
              title={t("features.intelligence.title")}
              description={t("features.intelligence.description")}
            />
          </div>

          <div className="flex flex-col border-dashed overflow-hidden border-b p-8">
            <OrbitingCirclesDemo />
            <div className="">
              <h3 className="text-xl font-medium ">
                {t("features.integration.title")}
              </h3>
              <p className=" text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
                {t("features.integration.description")}
              </p>
            </div>
          </div>
          <div className="p-8 flex flex-col  border-dashed md:border-r">
            <div className="w-full  space-y-4">
              {/* Kullanıcı mesajı */}
              <div className="bg-muted text-sm p-3 rounded-2xl shadow border w-fit max-w-[80%] ml-auto">
                <p className="text-muted-foreground">
                  Web sitemi hızlıca nasıl kurabilirim?
                </p>
              </div>

              {/* Yapay zekâ cevabı - Typewriter efekti */}
              <div className="bg-primary text-primary-foreground text-sm p-3 rounded-2xl shadow w-fit max-w-[80%]">
                <Typewriter
                  text={[
                    "Merhaba! 🚀 kişisel yapay zeka ile sadece birkaç adımda modern bir web sitesi oluşturabilirsin.",
                    "Bileşenleri sürükleyip bırak, stilleri özelleştir ve yayınla!",
                  ]}
                  speed={60}
                  loop={true}
                  className="text-sm"
                />
              </div>
            </div>

            {/* Sabit metin başlık ve açıklama */}
            <h3 className="text-xl font-medium mt-6 mb-2">
              {t("features.automation.title")}
            </h3>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
              {t("features.automation.description")}
            </p>
          </div>
          <div className="p-8 flex flex-col min-h-[350px] ">
            <div className="relative w-full h-full">
              <Image
                alt="aaa"
                src="/static/image/AI-Agents.jpg"
                className="object-contain"
                fill
              />
            </div>

            <h3 className="text-xl font-medium mb-2">
              {t("features.communication.title")}
            </h3>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
              {t("features.communication.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-4 border-dashed border-y px-8 py-32 text-center">
          <h2 className="text-foreground leading-tight text-3xl font-semibold text-balance">
            {t("capabilities.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-balance mb-12">
            {t("capabilities.subtitle")}
          </p>
        </div>

        <div className="mt-10">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-6">
        <TabsList>
          {categoryKeys.map((category) => (
            <TabsTrigger key={category} value={category}>
              {getCategoryDisplayName(category)}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {categoryKeys.map((category) => (
        <TabsContent key={category} value={category} className="p-4 text-center text-xs text-muted-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories[category].map((toolKey) => (
              <Card
                key={toolKey}
                className="hover:border-gray-500 transition-colors"
              >
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <span className="text-xl">{getIconForTool(toolKey)}</span>
                  <CardTitle className="text-lg">
                    {t(`capabilities.tabs.${category}.aitools.${toolKey}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600">
                    {t(`capabilities.tabs.${category}.aitools.${toolKey}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-4 border-dashed border-y px-8 py-32 text-center">
          <h2 className="text-foreground leading-tight font-semibold text-3xl text-balance">
            {t("howWorks.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl mb-16">
            {t("howWorks.subtitle")}
          </p>
        </div>

        <div className="divide-border divide-y border-dashed">
          <div className="divide-border border-dashed grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="border-dashed border-b md:border-b-0 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-6">
                  <Brain className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  {t("howWorks.step1.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howWorks.step1.description")}
                </p>
              </div>
            </div>
            <div className="border-dashed border-b md:border-b-0 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-6">
                  <LineChart className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  {t("howWorks.step2.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howWorks.step2.description")}
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
               

                <h3 className="text-xl font-medium mb-3">
                  {t("howWorks.step3.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howWorks.step3.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-border border-dashed grid grid-cols-1 divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="border-dashed border-b md:col-span-3 md:border-b-0 p-8">
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-2xl font-medium mb-4">
                  {t("howWorks.integration.title")}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t("howWorks.integration.description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      {t("howWorks.integration.system1.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("howWorks.integration.system1.description")}
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      {t("howWorks.integration.system2.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("howWorks.integration.system2.description")}
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      {t("howWorks.integration.system3.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("howWorks.integration.system3.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 p-8 flex flex-col justify-center">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-3 text-center">
                  {t("howWorks.stats.title")}
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">
                        {t("howWorks.stats.metric1.label")}
                      </span>
                      <span className="text-sm font-medium">
                        {t("howWorks.stats.metric1.value")}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">
                        {t("howWorks.stats.metric2.label")}
                      </span>
                      <span className="text-sm font-medium">
                        {t("howWorks.stats.metric2.value")}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">
                        {t("howWorks.stats.metric3.label")}
                      </span>
                      <span className="text-sm font-medium">
                        {t("howWorks.stats.metric3.value")}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mb-px w-full">
        <div className="flex flex-col gap-4 border-t border-dashed px-8 py-32">
          <h2 className="text-foreground leading-tight font-semibold text-3xl text-center text-balance">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-balance text-center mb-12">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 divide-x text-left md:grid-cols-2 border-t">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">
                {t("faq.left.q1")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a1")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">
                {t("faq.left.q2")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a2")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">
                {t("faq.left.q3")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a3")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">
                {t("faq.left.q4")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a4")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6">
                {t("faq.left.q5")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a5")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">
                {t("faq.right.q1")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.right.a1")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">
                {t("faq.right.q2")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.right.a2")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">
                {t("faq.right.q3")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.right.a3")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">
                {t("faq.right.q4")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.right.a4")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6">
                {t("faq.right.q5")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.right.a5")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { AnimatedCardDemo } from "@/components/animation-card";
import ChatPage from "@/components/ai-input";
import { OrbitingCirclesDemo } from "@/components/orbiting-demos";
import { Typewriter } from "@/components/ui/typewriter-text";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function AIPage() {
  const t = useTranslations("AIPage");

  const images = Array.from(
    { length: 9 },
    (_, i) => `/static/image/ai/ai-${i + 1}.svg`,
  );

  return (
    <div className=" mx-auto max-w-screen-2xl flex flex-col border-x border-dashed h-full">
      <section className="flex w-full flex-col md:flex-row h-full ">
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

        <div className="flex flex-col  max-w-4xl p-4 w-full border-dashed border-t md:h-auto md:w-1/2 md:border-0 md:p-8 ">
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
              <Card className="p-4 md:p-8 min-h-[300px]">
                <div className="bg-muted text-sm p-3 rounded-2xl shadow border w-fit max-w-[80%] ml-auto">
                  <p className="text-muted-foreground">
                    {t("chat.userQuestion")}
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground text-sm p-3 rounded-2xl shadow w-fit max-w-[80%]">
                  <Typewriter
                    text={[t("chat.aiResponse1")]}
                    speed={60}
                    loop={true}
                    className="text-sm"
                  />
                </div>
              </Card>
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

            <h3 className="text-xl font-medium m-2">
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
          <h2 className="text-foreground leading-tight font-semibold text-3xl text-balance">
            {t("howWorks.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl mb-16">
            {t("howWorks.subtitle")}
          </p>
        </div>

        <div className="divide-border divide-y border-dashed">
          <div className="divide-border border-dashed grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="border-dashed border-b md:border-b-0 p-4">
              <Card>
                <CardHeader>
                  <CardTitle> {t("howWorks.step1.title")}</CardTitle>
                </CardHeader>
                <CardContent className="justify-center flex">
                  <Image
                    src={"/static/image/brain.png"}
                    width={160}
                    height={160}
                    alt="brain"
                  ></Image>
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    {" "}
                    {t("howWorks.step3.description")}
                  </CardDescription>
                </CardFooter>
              </Card>
            </div>

            <div className="border-dashed border-b md:border-b-0 p-4 ">
              <Card>
                <CardHeader>
                  <CardTitle> {t("howWorks.step3.title")}</CardTitle>
                </CardHeader>
                <h3 className="text-xl font-medium "></h3>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {images.map((src, index) => (
                      <div className="flex justify-center" key={index}>
                        <Image
                          src={src}
                          alt={`ai-${index + 1}`}
                          width={36}
                          height={36}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    {" "}
                    {t("howWorks.step3.description")}
                  </CardDescription>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:divide-x md:divide-dashed  ">
            <div className="w-full md:w-1/2 p-4">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{t("howWorks.tools.title")}</CardTitle>
                </CardHeader>
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image
                    src="/static/image/tools.png"
                    fill
                    alt="tools"
                    className="rounded-lg object-contain object-center"
                  />
                </div>

                <CardFooter>
                  <CardDescription>
                    {t("howWorks.tools.description")}
                  </CardDescription>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{t("howWorks.persona.title")}</CardTitle>
                </CardHeader>
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image
                    src={"/static/image/persona.png"}
                    fill
                    alt="persona"
                    className="rounded-lg object-contain"
                  />
                </div>

                <CardFooter>
                  <CardDescription>
                    {t("howWorks.persona.description")}
                  </CardDescription>
                </CardFooter>
              </Card>
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
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">
                {t("faq.left.q4")}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {t("faq.left.a4")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

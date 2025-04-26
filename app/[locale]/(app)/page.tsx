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

export default function DashboardPage() {
  return (
    <div className="@container grid flex-1   ">
      {/* Ana Görsel Bölümü */}
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/static/image/dashboardmain.jpg"
            alt="Görsel"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute left-4 sm:left-6 md:left-10 top-4 sm:top-6 md:top-10 flex flex-col z-10">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Ideas
          </div>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Beyond
          </div>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            the Horizon
          </div>
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
            Ideas that transform your digital presence
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-y-12">
        <section className="container">
          <div className="p-24">
            <h1 className="text-8xl font-extrabold mb-6">Mobil</h1>
            <p className="text-5xl ">
              Kullanıcı deneyimini merkeze alan mobil uygulama çözümlerimiz,
              modern tasarım ilkeleri ve ileri seviye yazılım teknolojileriyle
              geliştirilmektedir. Hız, güvenlik, kullanıcı odaklılık ve estetik;
              tüm mobil projelerimizin temel taşlarını oluşturur.
            </p>
          </div>
          <DashboarbMobileSection />
        </section>
        <Separator />
        <section className="container">
          <div className="p-24">
            <h1 className="text-8xl font-extrabold mb-6">Web</h1>
            <p className="text-5xl">
              Modern web çözümlerimiz; performans, güvenlik ve kullanıcı
              deneyimini teknolojinin sınırlarını zorlayarak bir araya
              getiriyor. Next.js ve React tabanlı mimarimizle ölçeklenebilir,
              hızlı ve etkileyici dijital deneyimler sunuyoruz.
            </p>
          </div>

          <DashboarbWebSection />
        </section>
        <Separator />

        <section className="flex flex-col ">
          <div className=" container">
            <div className="p-24">
              <h1 className="text-8xl font-extrabold mb-6">3D Design</h1>
              <p className="text-3xl lg:text-5xl">
                İş süreçlerinizi yapay zekâ ile daha akıllı hale getirin. Veri
                analizi, otomasyon ve karar destek sistemleriyle işletmenizin
                verimliliğini en üst düzeye taşıyoruz.
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
                <div className="p-24">
                  <h1 className="text-8xl font-extrabold mb-6">
                    AI & AI Agent
                  </h1>
                  <p className="text-3xl lg:text-5xl">
                    From automating repetitive tasks to revolutionizing complex
                    workflows, AI agents are redefining productivity and
                    innovation for the businesses of tomorrow.
                  </p>
                </div>
              </div>

              <DashboardAiSection />
            </section>
          </div>
        </section>

        <section className="h-screen flex flex-col bg-zinc-950 text-white ">
          <div className="pt-10 pb-6 px-6 md:pt-16 md:pb-8">
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-[85px] leading-tight md:leading-[88px] text-center">
              Alternatif Renkler
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-5 flex-1">
            {/* Text Area */}

            <div className="w-full md:w-3/5 flex-1 relative">
              <div className="absolute inset-0 flex w-full">
                <video
                  src="/static/image/colorpallate.mov"
                  autoPlay
                  loop
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4 md:p-8 lg:p-12">
              <p className="font-normal text-xl md:text-2xl leading-relaxed md:leading-[38px] text-[#5A5A5A]">
                Her bir renk tonunun, bir duyguyu yansıttığına inanıyoruz.{" "}
                <br /> <br />
                Sizin için özenle oluşturduğumuz alternatif renk paletleri,
                markanızın ruhunu en doğru şekilde yansıtmak için tasarlandı.
                <br />
                <br />
                İster cesur ve dinamik, ister sade ve zarif bir dokunuş arayın,
                burada her zevke ve her vizyona hitap eden bir renk hikâyesi
                bulacaksınız.
                <br />
                <br />
                Şimdi renklerin büyüsüne adım atın ve markanıza yeni bir soluk
                kazandırın.
              </p>
            </div>
          </div>
        </section>

        <Separator />
        <section className="h-screen flex flex-col">
          <div className="pt-10 pb-6 px-6 md:pt-16 md:pb-8">
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-[85px] leading-tight md:leading-[88px] text-[#080808] text-center">
              SEO controls
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-5 flex-1">
            {/* Text Area */}
            <div className="w-full md:w-2/5 p-4 md:p-8 lg:p-12">
         
              <p className="font-normal text-xl md:text-2xl leading-relaxed md:leading-[38px] text-[#5A5A5A]">
                Sadece dijitalde var olmak yetmez, bulunabilir olmak gerekir!
                Biz, web uygulamalarınızı yalnızca estetik açıdan etkileyici
                kılmakla kalmıyor, aynı zamanda arama motorlarında kolayca
                keşfedilebilir bir altyapıyla inşa ediyoruz. SEO uyumlu
                yapılarımız sayesinde potansiyel müşterileriniz tam da ihtiyaç
                duydukları anda size ulaşır. Gelin, görünürlüğünüzü artıralım ve
                işinizi büyütelim!
              </p>
            </div>

            {/* Image Area with Black Background - Now Much Larger */}
            <div className="w-full md:w-3/5 bg-zinc-950 flex-1 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/static/image/seo.png"
                  alt="SEO Illustration"
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-zinc-950 py-16  -mt-12">
          <div className="max-w-full px-4 relative">
            <CardMarquee items={cards} speed={50} gap={32} />
            <div className=" absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent x"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

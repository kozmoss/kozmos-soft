// app/dashboard/page.js

import React from "react";
import DashboarbMobileSection from "../views/dashboard/dashboarbMobileSection";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SplineScene } from "@/components/spline/spline";
import DashboarbWebSection from "../views/dashboard/dashboarbSectionWeb";

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full ">
      {/* Ana Görsel Bölümü */}
      <section className="w-full relative overflow-hidden">
        <img
          src={"/static/image/dashboardmain.jpg"}
          alt={"Görsel"}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-10 top-10 flex flex-col">
          <div className="text-white text-5xl font-bold">Ideas</div>
          <div className="text-white text-5xl font-bold">
            Beyond the Horizon
          </div>
          <div className="text-white text-3xl font-bold text-wrap mt-4">
            Ideas that transform your digital presence
          </div>
        </div>
      </section>

      <div className="p-5 ">
        <section>
          <DashboarbMobileSection />
        </section>

        <section>
          <DashboarbWebSection />
        </section>

        <section className="w-full mb-10 ">
          <div className="flex flex-col md:flex-row gap-5 h-full">
            <Card className=" w-full lg:w-1/2 rounded-none">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-3">
                      Alternatif Renkler
                    </h1>
                    <p className="mb-4 text-lg text-muted-foreground">
                      Özenle seçilmiş renk kombinasyonlarına göz atın ve size
                      hitap edeni bulun.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center p-4">
                    <Image
                      src="/static/image/colorpallatte.svg"
                      alt="Color Palette"
                      width={300}
                      height={300}
                      className=" h-auto "
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-1/2 rounded-none ">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-3">
                      SEO Optimizasyonu
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Sadece güzel görünen değil, aynı zamanda bulunabilir web
                      uygulamaları geliştiriyoruz. SEO uyumlu yapılarımız
                      sayesinde müşterileriniz sizi kolayca bulsun.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center p-4">
                    <Image
                      src="/static/image/seo.svg"
                      alt="SEO Illustration"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="flex flex-col">
          <h1 className="font-bold text-5xl text-center p-10">
            Start with Kozmos
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-5">
            <Card className="w-full md:h-[500px] h-[300px] rounded-none overflow-hidden">
              <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-bold">Mobil</h1>
                  <p className="mt-4 max-w-lg">
                    İşletmenizi cebinize taşıyın. iOS ve Android için özel
                    olarak geliştirilen mobil uygulamalarımız sayesinde
                    kullanıcılarınıza her an, her yerde ulaşın. Hızlı, güvenli
                    ve kullanıcı dostu mobil deneyimler sunuyoruz.
                  </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative">
                  <Image
                    src="/static/image/stickimage.png"
                    alt="Creative Image"
                    width={300}
                    height={300}
                    className=""
                  />
                </div>
              </div>
            </Card>

            <Card className="w-full md:h-[500px] h-[300px] bg-black/[0.96] relative overflow-hidden rounded-none">
              <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    AI
                  </h1>
                  <p className="mt-4 text-neutral-300 max-w-lg">
                    İş süreçlerinizi yapay zekâ ile daha akıllı hale getirin.
                    Veri analizi, otomasyon ve karar destek sistemleriyle
                    işletmenizin verimliliğini en üst düzeye taşıyoruz.
                  </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>

            <Card className="w-full md:h-[500px] h-[300px] bg-black/[0.96] relative overflow-hidden rounded-none hover:scale-105">
              <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    3D
                  </h1>
                  <p className="mt-4 text-neutral-300 max-w-lg">
                    Ürünlerinizi veya fikirlerinizi 3D sahnelerle hayata
                    geçirin. Etkileşimli ve göz alıcı tasarımlar sayesinde
                    kullanıcılarınıza unutulmaz bir deneyim sunun.
                  </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>

            <Card className="w-full md:h-[500px] h-[300px] rounded-none">
              <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-bold">Web</h1>
                  <p className="mt-4 max-w-lg">
                    Modern, hızlı ve ölçeklenebilir web çözümleriyle dijital
                    varlığınızı güçlendiriyoruz. İhtiyacınıza özel geliştirilen
                    web siteleri ve panellerle her cihazda kusursuz bir
                    kullanıcı deneyimi sunuyoruz.
                  </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative">
                  <Image
                    src="/static/image/webdetails.svg"
                    alt="Creative Image"
                    width={300}
                    height={300}
                    className="h-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

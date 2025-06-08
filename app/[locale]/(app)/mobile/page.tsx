import { OptimizedImage, OptimizedVideo } from "@/components/optimized-item";
import { SkeletonCard } from "@/components/skeleton-card";
import { MobileSections } from "@/data/mobile";
import { useTranslations } from "next-intl";
import React, { Suspense } from "react";

export default function MobilePage() {
  const t = useTranslations("mobile");

  return (
    <div>
      {/* Hero Section - Fixed, not included in the mapping */}
      <section className="mx-auto">
        <div className="h-screen flex lg:flex-row flex-col items-center">
          <div className="lg:w-3/5 p-16 lg:p-24 text-center">
            <p className="text-5xl font-bold">{t("hero.title")}</p>
            <p className="text-xl mt-6">{t("hero.description")}</p>
          </div>
          <div className="lg:w-2/5 flex h-full relative w-full overflow-hidden">
            <Suspense fallback={<SkeletonCard />}>
              <OptimizedVideo
                src={"/static/videos/mobile/mobile-video-1.mp4"}
                className="lg:h-full object-cover w-full"
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Mapped Content Sections */}
      {MobileSections.map((section, index) => (
        <div
          key={index}
          className="min-h-screen flex flex-col lg:flex-row items-center gap-8 lg:gap-5 py-12 lg:py-0"
        >
          {/* For even indices (0-based), media on the left, content on the right */}
          {index % 2 === 0 ? (
            <>
              <div className="w-full lg:w-1/2 order-2 lg:order-none px-6 lg:px-12 lg:h-auto relative flex items-center justify-center">
                {section.media.type === "image" ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Suspense fallback={<SkeletonCard />}>
                      <OptimizedImage
                        src={section.media.src}
                        alt={""}
                         className="w-full h-full object-contain"
                        priority={true}
                      />
                    </Suspense>
                  </div>
                ) : (
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    src={section.media.src}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-none px-6 lg:px-12 flex flex-col justify-center space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  {t(section.title)}
                </h2>
                {section.description && (
                  <p className="text-lg lg:text-xl mt-2 lg:mt-4">
                    {t(section.description)}
                  </p>
                )}
                <ul className="list-disc space-y-3 pl-5">
                  {section.features.map((feature, i) => (
                    <li key={i} className="text-base lg:text-lg">
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            /* For odd indices, content on the left, media on the right */
            <>
              <div className="w-full lg:w-1/2 order-1 lg:order-none px-6 lg:px-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  {t(section.title)}
                </h2>
                {section.description && (
                  <p className="text-lg lg:text-xl mt-2 lg:mt-4">
                    {t(section.description)}
                  </p>
                )}
                <ul className="mt-4 lg:mt-8 space-y-3 list-disc pl-5">
                  {section.features.map((feature, i) => (
                    <li key={i} className="text-base lg:text-lg">
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 order-2 lg:order-none px-6 lg:px-12  lg:h-auto relative flex items-center justify-center">
                {section.media.type === "image" ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Suspense fallback={<SkeletonCard />}>
                      <OptimizedImage
                        src={section.media.src}
                        alt={""}
                         className="w-full h-full object-contain"
                        priority={true}
                      />
                    </Suspense>
                  </div>
                ) : (
                  <Suspense fallback={<SkeletonCard />}>
                    <OptimizedVideo
                      src={section.media.src}
                      className="w-full h-full object-contain"
                    />
                  </Suspense>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

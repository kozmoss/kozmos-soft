import { useTranslations } from "next-intl";
import React from "react";

export default function MobilePage() {
  const t = useTranslations("mobile");
  const sections = [
    {
      id: 1,
      title: t("section1.title"),
      description: t("section1.description"),
      features: [
        t("section1.features.0"),
        t("section1.features.1"),
        t("section1.features.2"),
      ],
      media: {
        type: "image",
        src: "/static/image/mobile/mobile-1.png",
        alt: "Website management on mobile",
      },
    },
    {
      id: 2,
      title: t("section2.title"),
      description: t("section2.description"),
      features: [
        t("section2.features.0"),
        t("section2.features.1"),
        t("section2.features.2"),
      ],
      media: {
        type: "video",
        src: "/static/videos/mobile/mobile-video-2.mov",
        poster: "/static/image/mobile/video-poster-1.jpg",
      },
    },
    {
      id: 3,
      title: t("section3.title"),
      description: t("section3.description"),
      features: [
        t("section3.features.0"),
        t("section3.features.1"),
        t("section3.features.2"),
      ],
      media: {
        type: "image",
        src: "/static/image/mobile/mobile-2.png",
        alt: "Business analytics dashboard",
      },
    },
    {
      id: 4,
      title: t("section4.title"),
      description: t("section4.description"),
      features: [
        t("section4.features.0"),
        t("section4.features.1"),
        t("section4.features.2"),
      ],
      media: {
        type: "video",
        src: "/static/videos/mobile/mobile-video-4.mov",
        poster: "/static/image/mobile/video-poster-2.jpg",
      },
    },
    {
      id: 5,
      title: t("section5.title"),
      description: t("section5.description"),
      features: [
        t("section5.features.0"),
        t("section5.features.1"),
        t("section5.features.2"),
      ],
      media: {
        type: "image",
        src: "/static/image/mobile/mobile-3.png",
        alt: "Mobile appointment scheduling",
      },
    },
    {
      id: 6,
      title: t("section6.title"),
      description: t("section6.description"),
      features: [
        t("section6.features.0"),
        t("section6.features.1"),
        t("section6.features.2"),
      ],
      media: {
        type: "image",
        src: "/static/image/mobile/mobile-4.png",
        alt: "Community building features",
      },
    },
    {
      id: 7,
      title: t("section7.title"),
      description: t("section7.description"),
      features: [
        t("section7.features.0"),
        t("section7.features.1"),
        t("section7.features.2"),
      ],
      media: {
        type: "image",
        src: "/static/image/mobile/mobile-5.png",
        alt: "Mobile payment processing",
      },
    },
  ];

  return (
    <div>
      {/* Hero Section - Fixed, not included in the mapping */}
      <section className="mx-auto">
        <div className="h-screen flex lg:flex-row flex-col items-center">
          <div className="lg:w-3/5 lg:p-24 text-center">
            <p className="text-5xl font-bold">{t("hero.title")}</p>
            <p className="text-xl mt-6">{t("hero.description")}</p>
          </div>
          <div className="lg:w-2/5 flex justify-center h-full">
            <video
              src="/static/videos/mobile/mobile-video-1.mov"
              loop
              autoPlay
              muted
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Mapped Content Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className="py-16 lg:py-0">
          <div className="min-h-screen lg:h-screen flex-col gap-8 lg:gap-5 flex lg:flex-row items-center">
            {/* For even indices (0-based), media on the left, content on the right */}
            {index % 2 === 0 ? (
              <>
                <div className="lg:w-1/2 w-full order-2 lg:order-none flex justify-start lg:h-9/12 px-6 lg:px-0">
                  {section.media.type === "image" ? (
                    <img
                      src={section.media.src}
                      alt={section.media.alt}
                      className="w-full object-contain"
                    />
                  ) : (
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      src={section.media.src}
                      className="w-full h-auto lg:h-full object-contain"
                    />
                  )}
                </div>
                <div className="lg:w-1/2 w-full order-1 lg:order-none px-6 lg:p-24 flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl lg:text-5xl font-bold">{section.title}</h2>
                  {section.description && (
                    <p className="text-lg lg:text-xl mt-2 lg:mt-4">{section.description}</p>
                  )}
                  <ul className="list-disc space-y-3 pl-5">
                    {section.features.map((feature, i) => (
                      <li key={i} className="text-base lg:text-lg">{feature}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              /* For odd indices, content on the left, media on the right */
              <>
                <div className="lg:w-1/2 w-full order-1 lg:order-none px-6 lg:p-24 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-5xl font-bold">{section.title}</h2>
                  {section.description && (
                    <p className="text-lg lg:text-xl mt-2 lg:mt-4">{section.description}</p>
                  )}
                  <ul className="mt-4 lg:mt-8 space-y-3 list-disc pl-5">
                    {section.features.map((feature, i) => (
                      <li key={i} className="text-base lg:text-lg">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full order-2 lg:order-none justify-end lg:h-9/12 px-6 lg:px-0 mt-6 lg:mt-0">
                  {section.media.type === "image" ? (
                    <img
                      src={section.media.src}
                      alt={section.media.alt}
                      className="w-full object-contain"
                    />
                  ) : (
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      src={section.media.src}
                      className="w-full h-auto lg:h-full object-contain"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
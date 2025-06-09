"use client";
import React, { useState } from "react";
import Image from "next/image";
import DashboarbMobileSection1 from "./dashboarbMobileSection1";
import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImagePlaceholder = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  alt,
  className,
}: {
  alt: string;
  className: string;
}) => (
  <div
    className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
  >
    <svg
      className="w-12 h-12 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className: string;
  priority: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ImagePlaceholder alt={alt} className={className} />;
  }

  return (
    <div className="relative">
      {isLoading && <ImagePlaceholder alt={alt} className={className} />}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        priority={priority}
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDySj"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default function DashboardMobileSection() {
  const t = useTranslations("Dashboard.mobileComponent");

  const sections = [
    {
      id: "section1",
      image: "/static/image/mobile-mobile-1.png",
      priority: true, // İlk resim için priority
    },
    {
      id: "section2",
      image: "/static/image/mobile-mobile-2.png",
      priority: false,
    },
    {
      id: "section3",
      image: "/static/image/mobile-mobile-3.png",
      priority: false,
    },
    {
      id: "section4",
      image: "/static/image/mobile-mobile-4.png",
      priority: false,
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-12 z-10 relative order-2 lg:order-1">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
          {sections.map(({ id, image, priority }) => (
            <div
              key={id}
              className="lg:snap-start min-h-[60vh] lg:h-screen flex items-center p-2 sm:p-4 lg:p-12"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="lg:hidden mb-4 flex justify-center">
                  <OptimizedImage
                    src={image}
                    alt={t(`${id}.title`)}
                    className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-md"
                    priority={priority}
                  />
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                  {t(`${id}.title`)}
                </h2>
                <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                  {t(`${id}.content`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full hidden lg:block lg:w-1/2 lg:sticky lg:top-20 h-[80vh] sm:h-[60vh] lg:h-screen order-1 lg:order-2">
        <div className="w-full h-full justify-center flex items-center">
          <DashboarbMobileSection1 />
        </div>
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import React from "react";

export default function DashboarbWebSection() {
  const t = useTranslations("Dashboard.webComponent")
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-12 z-10 relative order-2 lg:order-1">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {t('userExperienceAndDesign.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('userExperienceAndDesign.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {t('technicalInfrastructure.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('technicalInfrastructure.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {t('securityAndDataManagement.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('securityAndDataManagement.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {t('continuousIntegration.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('continuousIntegration.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 h-[50vh] sm:h-[60vh] lg:h-screen p-2 sm:p-4 lg:p-5 order-1 lg:order-2">
        <video
          src="/static/videos/dashboard/dashboard.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-lg lg:rounded-none"
        />
      </div>
    </div>
  );
}
import React from "react";
import DashboarbMobileSection1 from "./dashboarbMobileSection1";
import { useTranslations } from 'next-intl';

export default function DashboardMobileSection() {
  const t = useTranslations('Dashboard.mobileComponent');

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-12 z-10 relative order-2 lg:order-1">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
          <div className="lg:snap-start min-h-[60vh] lg:h-screen flex items-center p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                {t('section1.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                {t('section1.content')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen flex items-center p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                {t('section2.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                {t('section2.content')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen flex items-center p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                {t('section3.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                {t('section3.content')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen flex items-center p-2 sm:p-4 lg:p-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                {t('section4.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                {t('section4.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 h-[80vh] sm:h-[60vh] lg:h-screen order-1 lg:order-2">
        <div className="w-full h-full justify-center flex items-center">
          <DashboarbMobileSection1 />
        </div>
      </div>
    </div>
  );
}
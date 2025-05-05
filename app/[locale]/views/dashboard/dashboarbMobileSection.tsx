import React from "react";
import DashboarbMobileSection1 from "./dashboarbMobileSection1";
import { useTranslations } from 'next-intl';

export default function DashboardMobileSection() {
  const t = useTranslations('Dashboard.mobileComponent');

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/2 p-6 md:p-12 z-10 relative">
        <div className="space-y-16 snap-y snap-mandatory">
          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                {t('section1.title')}
              </h2>
              <p className="text-md lg:text-xl">
                {t('section1.content')}
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                {t('section2.title')}
              </h2>
              <p className="text-md lg:text-xl">
                {t('section2.content')}
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                {t('section3.title')}
              </h2>
              <p className="text-md lg:text-xl">
                {t('section3.content')}
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                {t('section4.title')}
              </h2>
              <p className="text-md lg:text-xl">
                {t('section4.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block md:w-1/2 sticky top-30 h-full">
        <div className="w-full h-full justify-center flex">
          <DashboarbMobileSection1 />
        </div>
      </div>
    </div>
  );
}
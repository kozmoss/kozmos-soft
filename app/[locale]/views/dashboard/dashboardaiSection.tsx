import { useTranslations } from "next-intl";
import React from "react";

export default function DashboardAiSection() {
  const t = useTranslations('Dashboard.aiComponent');
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative">
    <div className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-12 z-10 relative order-2 lg:order-1">
      <div className="space-y-8 sm:space-y-12 lg:space-y-16 lg:snap-y lg:snap-mandatory">
        <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            {t('intelligentAgentIntegration.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('intelligentAgentIntegration.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            {t('customModelsAndFinetuning.title')}
              </h2>
              <p className="text-md lg:text-xl">
              {t('customModelsAndFinetuning.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
          <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
          {t('autonomousProcesses.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('autonomousProcesses.description')}
              </p>
            </div>
          </div>

          <div className="lg:snap-start min-h-[60vh] lg:h-screen items-center flex p-2 sm:p-4 lg:p-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            {t('realtimeAnalysis.title')}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
              {t('realtimeAnalysis.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-3/5 sticky top-20 right-0 h-full">
        <video
          src="/static/videos/dashboard/ai.mov"
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      
      <div className="md:hidden w-full flex z-10">
        <video
          src={"/static/videos/dashboard/ai.mov"}
          loop
          autoPlay
        />
      </div>
    </div>
  );
}
"use client";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations("AboutUs");

  // Stats data with translation keys
  const statsData = [
    {
      number: "",
      text: "",
      description: t("companyDescription"),
    },
    { updateDate: "04/2025", number: "100+", text: t("projects") },
    { updateDate: "04/2025", number: "40+", text: t("clients") },
    { updateDate: "04/2025", number: "5+", text: t("experience") },
    { updateDate: "04/2025", number: "100%", text: t("satisfaction") },
    { updateDate: "04/2025", number: "8", text: t("technologies") },
    { updateDate: "04/2025", number: "24/7", text: t("support") },
    { updateDate: "04/2025", number: "70%", text: t("repeatClients") },
    { updateDate: "04/2025", number: "3g", text: t("deliveryTime") }, // 3 gün
    { updateDate: "04/2025", number: "5+", text: t("countries") },
    { updateDate: "04/2025", number: "15+", text: t("openSource") },
    { updateDate: "04/2025", number: "99.9%", text: t("uptime") },
    { updateDate: "04/2025", number: "2s", text: t("responseTime") }, // 2 saat
  ];

  return (
    <div className="w-full bg-card">
      <div className="font-black text-6xl md:text-8xl lg:text-[12rem] text-center">
        {t("title")}
      </div>

      <div className="w-full border-t-2"></div>

      <div className="mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar - empty space */}
          <div className="hidden md:block md:w-1/3" />

          <div className="w-full md:w-2/3 relative min-h-[300vh]">
            {statsData.map((card, index) => (
              <div
                key={index}
                className="flex flex-row rounded-none h-24 overflow-scroll md:h-64 sticky transition-all duration-[1000ms] bg-card"
                style={{
                  top: `${4 + index * 3}rem`,
                  zIndex: 10 + index,
                }}
              >
                <div
                  className={`${
                    index !== 0 ? "border-t-2" : ""
                  } h-full w-1/3 text-md md:text-xl italic`}
                >
                  {card.text
                    ? card.text.charAt(0) + card.text.slice(1).toLowerCase()
                    : ""}
                </div>
                <div
                  className={`${
                    index !== 0 ? "border-t-2" : ""
                  } border-l-2 w-full flex justify-between h-full`}
                >
                  <div className="flex gap-2">
                    <p
                      className={`${
                        card.description
                          ? "italic text-base sm:text-lg md:text-2xl text-center sm:mb-0 sm:p-4 md:p-6 lg:p-24"
                          : "hidden"
                      }`}
                    >
                      {card.description}
                    </p>
                    <p className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
                      {card.number}
                    </p>
                    {card.updateDate ? (
                      <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-muted-foreground">
                        Upt({card.updateDate})
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-5xl font-bold">.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

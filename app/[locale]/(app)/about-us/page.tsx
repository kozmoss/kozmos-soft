"use client";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations("AboutUs");

  // Stats data with translation keys

  const statsData = [
    // ... (statsData aynı kalır)
    {
      description: t("introduction"),
    },
    {
      updateDate: "10/2025",
      number: "2+",
      text: t("AI&MLProjects"),
    },
    {
      updateDate: "10/2025",
      number: "4+",
      text: t("YearsofLearning"),
    },
    {
      updateDate: "10/2025",
      number: "Next.js / NestJS",
      text: t("FullStackExperience"),
    },
    {
      updateDate: "10/2025",
      number: "Plant Disease Detection",
      text: t("ComputerVision"),
    },
    {
      updateDate: "10/2025",
      number: "Chat Bot",
      text: t("NLP&Conversational AI"),
    },
    {
      updateDate: "10/2025",
      number: "TensorFlow / PyTorch",
      text: t("DeepLearningTools"),
    },
  ];

  return (
    <div className="flex flex-1">
      <div className="w-full">
        <div className="font-black text-5xl md:text-8xl lg:text-[12rem] text-center">
          {t("title")}
        </div>

        <div className="w-full border-t-2"></div>

        <div className="mx-auto  ">
          <div className="flex flex-col md:flex-row">
            {/* Left sidebar - empty space */}
            <div className="hidden md:block md:w-1/3" />

            {/* Bu kısım sağdaki sütun ve tüm kartları içeriyor. */}
            <div className="w-full md:w-2/3 relative min-h-[300vh] bg-card">
              {statsData.map((card, index) => {
                const lastIndex = index === statsData.length - 1;

                // **ÖNEMLİ DEĞİŞİKLİK:** lastIndex için yükseklik sınıflarını koşullu yapıyoruz
                const heightClasses = lastIndex
                  ? "h-auto min-h-[50vh]" // Son eleman için kalan yüksekliği görsel olarak dolduracak sınıflar
                  : "h-24 overflow-scroll  md:h-64"; // Diğer elemanlar için sabit yükseklik

                return (
                  <div
                    key={index}
                    // heightClasses değişkeni burada kullanılıyor
                    className={`flex flex-row rounded-none sticky transition-all duration-[1000ms] ${heightClasses}`}
                    style={{
                      top: `${4 + index * 3}rem`,
                      zIndex: 10 + index,
                    }}
                  >
                    <div
                      className={`${
                        index !== 0 ? "border-t-2" : ""
                      } h-full w-1/3  text-[8px] md:text-[12px] lg:text-lg  italic pl-4`}
                    >
                      {card.text
                        ? card.text.charAt(0) + card.text.slice(1).toLowerCase()
                        : ""}
                    </div>
                    <div
                      className={`${
                        index !== 0 ? "border-t-2 bg-card" : ""
                      }  border-l-2 w-full flex justify-between  `}
                    >
                      <div className="flex gap-2 h-full">
                        <p
                          className={`${
                            card.description
                              ? "italic text-[12px] sm:text-lg md:text-2xl text-center sm:mb-0 sm:p-4 md:p-6 lg:p-24"
                              : "hidden"
                          }`}
                        >
                          {card.description}
                        </p>
                        <p className="font-black text-2xl  sm:text-3xl md:text-4xl lg:text-6xl">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
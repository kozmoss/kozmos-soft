"use client";


const AboutUsPage = () => {
  // Stats data
  const statsData = [
    {
      number: "",
      text: "",
      description:
        "    Kozmos Soft olarak 3 yılı aşkın süredir yazılım dünyasında; web geliştirme, mobil uygulama ve yapay zeka çözümleri sunuyoruz.  Yaratıcılığı, güvenilirliği ve sürekli gelişimi esas alarak, müşterilerimizin iş hedeflerine ulaşmalarını sağlıyoruz.",
    },
    { number: "5M", text: "KULLANICI", updateDate: "04/2025" },
    { number: "10K", text: "GÜNLÜK KULLANICI", updateDate: "04/2025" },
    { number: "20+", text: "ÜLKE", updateDate: "04/2025" },
    { number: "500+", text: "PROJE", updateDate: "04/2025" },
    { number: "24/7", text: "DESTEK", updateDate: "04/2025" },
    { number: "99%", text: "MEMNUNİYET", updateDate: "04/2025" },
    { number: "15+", text: "YIL TECRÜBESİ", updateDate: "04/2025" },
    { number: "200+", text: "UZMAN", updateDate: "04/2025" },
    { number: "50M+", text: "GÖRÜNTÜLENME", updateDate: "04/2025" },
  ];

  return (
    <div className="w-full bg-card">
      <div className="font-black text-6xl md:text-8xl lg:text-[12rem] text-center">
        ABOUT US
      </div>

      <div className="w-full border-t-2 "></div>

      <div className=" mx-auto ">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar - empty space */}
          <div className="md:w-1/3" />

          <div className="md:w-2/3 relative min-h-[300vh] ">
            {statsData.map((card, index) => (
              <div
                key={card.number}
                className="flex flex-row rounded-none h-96 sticky transition-all duration-[1000ms] bg-card
                "
                style={{
                  top: `${4 + index * 3}rem`,
                  zIndex: 10 + index,
                }}
              >
                <div className={`${index !== 0 ? "border-t-2": ""}   h-full w-1/3 text-xl italic"`}>
                  {card.text.charAt(0) + card.text.slice(1).toLocaleLowerCase()}
                </div>
                <div className={`${index !== 0 ? "border-t-2": ""}  border-l-2 w-full flex justify-between  h-full`}>
                  <div className="flex gap-2">
                    <p className="p-24 italic text-2xl">{card.description}</p>
                    <p className="font-black text-9xl">{card.number}</p>
                    {card.updateDate ? (
                      <p className="text-sm mt-2 text-muted-foreground">
                        Upt({card.updateDate})
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-5xl font-bold ">.</p>
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

import React from "react";

export default function DashboardAiSection() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-2/5 p-6 md:p-12 z-10 relative">
        <div className="space-y-16 snap-y snap-mandatory">
          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Akıllı AI Agent Entegrasyonu
              </h2>
              <p className="text-xl">
                Uygulamalarınıza entegre ettiğimiz AI agent&apos;ler, kullanıcı deneyimini yeni nesil seviyelere taşır. 
                Doğal dil işleme (NLP) ve makine öğrenimi tabanlı agent&apos;lerimiz, kullanıcı etkileşimlerini anında analiz ederek 
                kişiselleştirilmiş yanıtlar üretir. Multi-agent sistemlerimizle karmaşık iş akışlarını otomatize ediyor, 
                gerçek zamanlı karar destek sistemleri sunuyoruz. Agent&apos;leriniz veri kaynaklarınızla sürekli öğrenerek 
                kendini geliştirir ve iş süreçlerinize akıllı optimizasyonlar getirir.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Özel AI Modelleri ve Finetuning
              </h2>
              <p className="text-md lg:text-xl">
                Sektörünüze özel fine-tune edilmiş AI modelleri geliştiriyoruz. LLM&apos;lerinizi (Large Language Models) 
                kendi verilerinizle eğiterek şirketinizin bilgi birikimini dijital asistanlarınıza aktarıyoruz. 
                RAG (Retrieval Augmented Generation) mimarileriyle gerçek zamanlı veri erişimi sağlayan, 
                hallüsinasyona düşmeyen akıllı chatbot&apos;lar oluşturuyoruz. Özel embedding&apos;ler ve vektör veritabanları 
                kullanarak kurumsal bilgi yönetiminizi dönüştürüyoruz. Model performansını sürekli izleyerek 
                otomatik retraining pipeline&apos;ları kuruyoruz.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">
                Otonom İş Süreçleri ve Otomasyon
              </h2>
              <p className="text-md lg:text-xl">
                AI agent&apos;lerimizle rutin iş süreçlerinizi tam otonom hale getiriyoruz. Doküman işleme, veri analizi, 
                müşteri hizmetleri gibi alanlarda kendi kendine karar verebilen dijital çalışanlar yaratıyoruz. 
                Workflow otomasyonu ile insan-AI işbirliğini optimize ediyor, operasyonel verimliliğinizi katlıyoruz. 
                Agent&apos;leriniz API&apos;ler aracılığıyla mevcut sistemlerinizle sorunsuz entegre olurken, 
                güvenli veri paylaşımı için gelişmiş yetkilendirme mekanizmaları sunuyoruz.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">
                Gerçek Zamanlı Analiz ve Öngörüler
              </h2>
              <p className="text-md lg:text-xl
              ">
                AI destekli analitik platformumuzla verilerinizden anlamlı öngörüler çıkarıyoruz. Anomali tespiti, 
                trend analizi ve tahminleme modelleriyle proaktif karar alma süreçlerinizi destekliyoruz. 
                Multimodal AI yaklaşımımızla metin, ses ve görüntü verilerinizi birlikte analiz ederek 
                bütünsel bir bakış açısı sunuyoruz. Özelleştirilebilir dashboard&apos;lar ve otomatik raporlama araçlarıyla 
                karmaşık verileri anlaşılır hale getiriyoruz. Agent&apos;leriniz kritik değişiklikleri anında tespit ederek 
                ilgili ekiplere bildirim gönderir.
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
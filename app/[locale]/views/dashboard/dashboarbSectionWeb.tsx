import { Iphone16Pro } from "@/components/iphone";
import React from "react";

export default function DashboarbWebSection() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/2 p-6 md:p-12 z-10 relative">
        <div className="space-y-16 snap-y snap-mandatory">
          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Kullanıcı Deneyimi ve Arayüz Tasarımı
              </h2>
              <p className="text-md lg:text-xl">
                Web uygulamalarımız, kullanıcı odaklı tasarım prensipleriyle
                geliştirilmiş olup sezgisel gezinme deneyimi sunar. Modern UI/UX
                standartlarına uygun şekilde tasarlanan arayüzler, estetik
                görünümün yanı sıra yüksek kullanılabilirlik sağlar. Responsive
                tasarım yaklaşımıyla tüm cihazlarda tutarlı bir deneyim
                sunarken, erişilebilirlik standartlarına uygun olarak
                geliştirilmiştir. Kullanıcı akışları detaylı analizlerle
                optimize edilerek, işlemlerin minimum tıklamayla
                tamamlanabilmesi sağlanmıştır. Arayüz bileşenleri, kullanıcı
                alışkanlıkları dikkate alınarak konumlandırılmıştır.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Teknolojik Altyapı ve Performans Optimizasyonu
              </h2>
              <p className="text-md lg:text-xl">
                Next.js, React ve modern web teknolojileri kullanılarak
                geliştirilen uygulamalarımız, yüksek performans ve
                ölçeklenebilirlik sunar. Server-side rendering ve static
                generation özellikleriyle hızlı yüklenme süreleri sağlanırken,
                lazy loading teknikleriyle kaynak kullanımı optimize edilmiştir.
                CDN entegrasyonu ve caching mekanizmaları sayesinde global
                ölçekte düşük gecikme süreleri hedeflenir. Performans metriklere
                dayalı sürekli iyileştirmeler yapılırken, Lighthouse skorları
                düzenli olarak takip edilir. Veritabanı sorguları ve API
                çağrıları optimize edilerek sunucu yükü minimize edilmiştir.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">
              Güvenlik ve Veri Yönetimi
            </h2>
            <p className="text-md lg:text-xl">
              Web uygulamalarımız OWASP Top 10 güvenlik standartlarına uygun
              olarak geliştirilmiştir. Veri iletiminde end-to-end şifreleme,
              CSRF koruması, XSS önlemleri ve diğer güvenlik katmanları
              uygulanmıştır. Rol tabanlı erişim kontrolü (RBAC) ile kullanıcı
              yetkilendirmeleri yönetilirken, tüm girişler validation&apos;dan
              geçirilir. Düzenli güvenlik denetimleri ve penetrasyon testleri
              yapılarak olası açıklar önceden tespit edilir. GDPR ve KVKK
              uyumluluğu sağlanarak kullanıcı verilerinin güvenliği ve
              mahremiyeti garanti altına alınmıştır. Veri yedekleme ve felaket
              kurtarma prosedürleri otomatize edilmiştir.
            </p>
            </div>
       
          </div>

          <div className="snap-start h-screen items-center flex p-6 md:p-12">
            <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">
              Sürekli Entegrasyon ve Geliştirme Süreci
            </h2>
            <p className="text-md lg:text-xl">
              Agile metodolojisiyle yönetilen geliştirme sürecimiz, kullanıcı
              geri bildirimlerini hızla ürüne yansıtmayı hedefler. CI/CD
              pipeline&apos;ları sayesinde günde birden fazla production deploy&apos;ı
              yapabilme esnekliğine sahibiz. A/B testing mekanizmalarıyla yeni
              özelliklerin etkisi ölçülürken, feature flag&apos;ler ile kontrollü
              roll-out stratejileri uygulanır. Uygulama sağlığı ve kullanım
              istatistikleri gerçek zamanlı olarak izlenir, performans
              anomalileri otomatik alarmlarla bildirilir. Dokümantasyon ve
              developer portalı ile tüm API&apos;ler standartlaştırılmıştır.
              Mikroservis mimarisi sayesinde sistem bileşenleri bağımsız olarak
              ölçeklendirilebilir.
            </p>
            </div>
        
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 sticky  top-30 right-0 h-full p-5">
        <video
          src="/static/videos/dashboard/dashboard.mp4"
          autoPlay
          muted
          loop
      
        />
      </div>

     
      <div className="md:hidden w-full flex justify-center py-12 z-10">
        <Iphone16Pro
          src={"/static/videos/dashboard/dashboard.mp4"}
          video={true}
        />
      </div>
    </div>
  );
}

import React from "react";
import DashboarbMobileSection1 from "./dashboarbMobileSection1";

export default function DashboarbMobileSection() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/2 p-6 md:p-12 z-10 relative">
        <div className="space-y-16 snap-y snap-mandatory">
          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Kullanıcı Deneyimi ve Arayüz
              </h2>
              <p className="text-md lg:text-xl">
                Mobil uygulamalarımız, kullanıcıların ihtiyaçlarına özel olarak
                tasarlan sezgisel bir gezinme yapısı sunar. Modern UI/UX
                prensipleri doğrultusunda oluşturulan arayüzler, hem estetik
                açıdan çekici hem de son derece fonksiyonel bir kullanım sağlar.
                Kullanıcı alışkanlıklarını analiz ederek geliştirdiğimiz menü
                yapıları sayesinde tüm özelliklere kolayca ulaşılabilir.
                Responsive tasarım anlayışıyla her ekran boyutuna ve çözünürlüğe
                uyumlu şekilde optimize edilen arayüzlerimiz, tutarlı bir
                deneyim sunar.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Teknik Altyapı ve Performans
              </h2>
              <p className="text-md lg:text-xl">
                React Native, Flutter ve Swift gibi güncel teknolojiler
                kullanarak geliştirdiğimiz uygulamalar, cihaz kaynaklarını
                verimli kullanarak optimum performans sunar. Arka planda çalışan
                gelişmiş optimizasyon teknikleri sayesinde düşük güç tüketimi
                ile yüksek performansı bir arada sunuyoruz. Uygulamalarımız,
                yoğun kullanım senaryolarında bile akıcı çalışma performansını
                korurken, arka plan işlemlerini minimum düzeyde tutarak pil
                ömrünü uzatır. Periyodik performans testleri ve güncellemelerle
                bu standardı sürekli olarak koruyoruz.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                Kişiselleştirme ve Güvenlik
              </h2>
              <p className="text-md lg:text-xl">
                Kullanıcılarımıza sunduğumuz geniş kişiselleştirme seçenekleri
                sayesinde herkes kendi tercihlerine göre bir deneyim
                oluşturabilir. Tema renkleri, bildirim ayarları, kullanım
                alışkanlıklarına yönelik öneriler gibi birçok alanda esnek
                yapılandırma imkanı sunuyoruz. Güvenlik konusunda ise OWASP
                standartlarına uygun olarak geliştirilen uygulamalarımızda veri
                şifreleme, çift faktörlü kimlik doğrulama, oturum yönetimi gibi
                birçok koruma katmanı bulunur. Kullanıcı verilerinin güvenliği
                için düzenli güvenlik denetimleri ve güncellemeler yapıyoruz.
              </p>
            </div>
          </div>

          <div className="snap-start h-screen flex items-center p-6 md:p-12">
            <div className="space-y-4">
              {" "}
              <h2 className="text-3xl font-bold mb-4">
                Sürekli Gelişim ve Destek
              </h2>
              <p className="text-md lg:text-xl">
                Uygulamalarımızı kullanıcı geri bildirimleri ve teknolojik
                gelişmeler doğrultusunda sürekli olarak iyileştiriyoruz. Düzenli
                aralıklarla yayınladığımız güncellemelerle yeni özellikler
                ekliyor, performans iyileştirmeleri yapıyor ve güvenlik
                açıklarını kapatıyoruz. Canlı destek ekibimiz,
                kullanıcılarımızın karşılaştığı sorunları hızlıca çözmek için
                7/24 hizmet veriyor. Ayrıca kapsamlı dokümantasyon ve nasıl
                yapılır rehberleriyle kullanıcıların uygulamalarımızdan maksimum
                verim almalarını sağlıyoruz.
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

import React from "react";
import DashboarbMobileSection1 from "./dashboarbMobileSection1";

export default function DashboarbMobileSection() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative ">
      {/* Sol taraf içerik bölümü - scrollable */}
      <div className="w-full md:w-1/2 p-6 md:p-12 z-10 relative">
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold mb-6">
            Mobil Uygulama Tasarımı ve Teknolojisi
          </h1>
          <p className="text-lg ">
            Kullanıcı deneyimini merkeze alan mobil uygulama çözümlerimiz,
            modern tasarım ilkeleri ve ileri seviye yazılım teknolojileriyle
            geliştirilmektedir. Hız, güvenlik, kullanıcı odaklılık ve estetik;
            tüm mobil projelerimizin temel taşlarını oluşturur.
          </p>
        </div>

        {/* Scroll edilebilir içerik */}
        <div className="space-y-16">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">Kolay Navigasyon</h2>
            <p className="">
              Kullanıcılar için sezgisel ve sade bir gezinme deneyimi sunuyoruz.
              Menü yapıları, kullanıcı alışkanlıklarına uygun şekilde
              düzenlenerek her özelliğe hızlıca erişim sağlanır.
            </p>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Estetik ve İşlevsel Arayüz
            </h2>
            <p className="">
              Modern UI/UX prensiplerine göre hazırlanan arayüzlerimiz, görsel
              olarak dikkat çekici olduğu kadar fonksiyonel kullanım da sağlar.
              Her ekran farklı çözünürlüklere uyumlu olacak şekilde optimize
              edilir.
            </p>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-4">Yüksek Performans</h2>
            <p className="">
              React Native, Flutter ve Swift gibi modern teknolojiler kullanarak
              geliştirilen uygulamalarımız, cihaz kaynaklarını verimli
              kullanarak yüksek performans sunar.
            </p>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Kişiselleştirilebilir Deneyim
            </h2>
            <p className="">
              Uygulamalarımızda kullanıcıların tercihlerine göre temalar,
              bildirim ayarları ve kullanım alışkanlıkları doğrultusunda
              kişiselleştirme yapılabilir.
            </p>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Gelişmiş Güvenlik Önlemleri
            </h2>
            <p className="">
              Veri şifreleme, kimlik doğrulama, oturum yönetimi gibi güvenlik
              önlemleriyle kullanıcı verileri korunur. Mobil uygulamalarımız
              OWASP standartlarına uygun şekilde geliştirilir.
            </p>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Sürekli Güncellenen Yapı
            </h2>
            <p className="">
              Geri bildirimlere dayalı güncellemelerle uygulamalarımızı sürekli
              iyileştiriyoruz. Yeni özellikler, performans artışları ve güvenlik
              yamaları düzenli olarak yayınlanır.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:block md:w-1/2 sticky top-10 h-full ">
        <div className="w-full h-full justify-center flex">
          <DashboarbMobileSection1 />
        </div>
      </div>
    </div>
  );
}

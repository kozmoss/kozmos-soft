"use client";
import { ContactUs } from "@/components/forms/contact-us";
import { MorphingText } from "@/components/ui/liquid-text";
import { Typewriter } from "@/components/ui/typewriter-text";
import { useTranslations } from "next-intl";
import { contact } from "../actions";
import { toast } from "sonner";
import { ContactFormData } from "@/types/contact-us";


export default function ProfileForm() {


  const t = useTranslations("contact-us");
  const texts = [
    "Birlikte üretelim",
    "Kozmos-Soft ile tanışın",
    "Size bir tık uzaktayız",
    "Hayallerinizi dijitale taşıyalım",
    "Sorularınız mı var?",
    "Kozmos-Soft yanınızda",
    "Teknolojiyi birlikte şekillendirelim",
    "Biz buradayız",
  ];


  const handleSubmit = async (data: ContactFormData) => {
    const response = await contact(data);
  
    if (response.status === "success") {
      toast("Form başarıyla gönderildi!");
    } else if (response.status === "invalid_data") {
      toast("Form verileri geçersiz.");
    } else {
      toast("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2 divide-x divide-dashed">
      {/* Sol taraf - İletişim formu */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="font-black text-6xl md:text-6xl lg:text-[8rem] text-center">
          {t("title")}
        </div>
        <div className="flex flex-1 items-center justify-center border-dashed border rounded-lg">
          <div className="w-full max-w-lg">
            <ContactUs action={handleSubmit}/>
          </div>
        </div>
      </div>

      {/* Sağ taraf - MorphingText ve Typewriter */}
      <div className="relative hidden lg:flex flex-col justify-between p-6 md:p-10 h-full">
        {/* MorphingText üst kısımda */}
        <div className="flex justify-center pt-10">
          <MorphingText texts={texts} />
        </div>

        {/* Typewriter orta kısımda */}
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-primary text-primary-foreground text-sm p-3 rounded-2xl shadow w-fit max-w-[80%] max-h-96">
            <Typewriter
              text={[t("projectInformation")]}
              speed={60}
              className="text-lg"
            />
          </div>
        </div>

        {/* Alt boşluk */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

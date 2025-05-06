import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";

export function ContactUs() {
  const t = useTranslations("contact-us");
  
  // Define schema with translations
  const formSchema = z.object({
    fullName: z.string().min(2, {
      message: `${t("errors.fullNameMin")}`,
    }),
    email: z.string().email({
      message: `${t("errors.invalidEmail")}`,
    }),
    phone: z.string().refine((val) => /^\d+$/.test(val), {
      message: `${t("errors.phoneDigits")}`,
    }),
    message: z.string()
      .min(10, {
        message: `${t("errors.messageMin")}`,
      })
      .max(500, {
        message: `${t("errors.messageMax")}`,
      }),
  });

  // Initialize form with validation
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
    // İletişim formu gönderme işlemi burada yapılır
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("fullName")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("fullNamePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("emailPlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("phone")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("phonePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("messagePlaceholder")} className="min-h-24" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full mt-4">
            {t("submit")}
          </Button>
        </form>
      </Form>
    </div>
  );
}



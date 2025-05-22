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
import { ContactFormData } from "@/types/contact-us";
import { toast } from "sonner";

interface ContactFormProps {
  onFormSubmitSuccess?: () => void
}

export function ContactUs({onFormSubmitSuccess}: ContactFormProps) {
  const t = useTranslations("contact-us");
 
  
  const contactFormSchema = z.object({
    fullName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, { // Basic phone validation
      message: "Phone number must be at least 10 digits.",
    }).regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number (e.g., +1234567890)."
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }).max(500, {
      message: "Message must not exceed 500 characters."
    }),
  });

  // Initialize form with validation
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  

  async function onSubmit(values: ContactFormData) {
    try {
      
      if (values) {
        toast.success("Inquiry Submitted!", {
          description: "Thank you for contacting us. We will get back to you shortly.",
         
        })
        form.reset();
        if(onFormSubmitSuccess) {
          onFormSubmitSuccess()
        }
      } 
    } catch (error) {
      toast.error("Unexpected Error", {
      description: `An unexpected error occurred. ${error instanceof Error ? error.message : ''}`,
      })
    }
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



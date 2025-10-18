/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useImageUpload } from "@/hooks/use-image-upload";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Upload,
  AlertCircle,
  CheckCircle2,
  X,
  ImagePlus,
  Trash2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  image: z.string().min(1, {
    message: "An image is required for upload.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ImageUpload() {
  const {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    currentFile,
  } = useImageUpload({
    onUpload: (url) => {
      form.setValue("image", url, { shouldValidate: true });
    },
    onRemove: () => {
      form.setValue("image", "");
    },
  });

  const t = useTranslations("PlantDiseaseDetection");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
    mode: "onChange",
  });

  const [isUploading, setIsUploading] = useState(false);
  const [results, setResults] = useState<{
    prediction: any;
    url: any;
    name: any;
    contentType: any;
  } | null>(null);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/plant/files/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const { url, pathname, contentType } = data;

        return {
          prediction: data.prediction,
          url,
          name: pathname,
          contentType: contentType,
        };
      }
      const { error } = await response.json();
      toast.error(error);
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload file, please try again!");
    }
  };

  const onSubmit = async () => {
    if (!currentFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    setIsUploading(true);
    try {
  const result = await uploadFile(currentFile);

  setResults(result ?? null);
  if (result) {
    toast.success(
      `Image uploaded successfully! URL: ${result.url.substring(0, 30)}...`,
    );
  }
    } catch {
      // Error handling is already in uploadFile
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen items-center justify-center bg-background p-3 sm:p-4 md:p-6 overflow-hidden flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 border-dashed px-3 sm:px-4 py-3 sm:py-4">
        <h2 className="text-foreground leading-tight font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-balance">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-balance text-center mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
          {t("description")}
        </p>
      </div>
      <div className="space-y-4 sm:space-y-6 w-full max-w-2xl rounded-xl border border-border bg-card p-4 sm:p-5 md:p-6 shadow-sm">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg font-medium">{t('image_upload')}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t('supported_formarts')}
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <FormField
              control={form.control}
              name="image"
              render={({}) => (
                <FormItem>
                  <FormControl>
                    {!previewUrl ? (
                      <div
                        onClick={handleThumbnailClick}
                        className="flex h-48 sm:h-56 md:h-64 cursor-pointer flex-col items-center justify-center gap-3 sm:gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted"
                      >
                        <div className="rounded-full bg-background p-2 sm:p-3 shadow-sm">
                          <ImagePlus className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                        </div>
                        <div className="text-center px-4">
                          <p className="text-xs sm:text-sm font-medium">
                            Click to select
                          </p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">
                            Select an image file
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="group relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg border">
                          <Image
                            src={previewUrl}
                            alt="Preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={handleThumbnailClick}
                              className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                              type="button"
                            >
                              <Upload className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={handleRemove}
                              className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                              type="button"
                            >
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        </div>
                        {fileName && (
                          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="truncate max-w-[150px] sm:max-w-[200px]">
                              {fileName}
                            </span>
                            <button
                              onClick={handleRemove}
                              className="ml-auto rounded-full p-1 hover:bg-muted flex-shrink-0"
                              type="button"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full text-sm sm:text-base"
              disabled={!previewUrl || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
          </form>
        </Form>
      </div>

      <div className="space-y-4 sm:space-y-6 w-full max-w-2xl">
        {results && (
          <>
            {/* Primary Result */}
            <Card className="bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-2xl border-0">
              <CardHeader className="pb-1 p-4 sm:p-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  <CardTitle className="text-base sm:text-lg font-medium opacity-90">
                  {t('primary_diagnosis')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-2 sm:pt-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {results.prediction.prediction.replace(/___/g, " - ")}
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-xs sm:text-sm opacity-90">
                     {t('confidence')}:
                    </div>
                    <div className="text-xl sm:text-2xl font-bold">
                      {results.prediction.confidence.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Results */}
            {results.prediction.top_5_predictions.length > 0 && (
              <Card className="shadow-xl border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-semibold">
                    {t("alternative_diagnoses")}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {t("ranked_by_confidence")}
                    
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    {results.prediction.top_5_predictions
                      .slice(1)
                      .map((alt:any, index:number) => {
                        const confidencePercentage = alt.confidence * 100;
                        const barWidth = Math.min(confidencePercentage, 100);

                        return (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 rounded-xl border border-dashed transition-colors"
                          >
                            <div className="flex items-center gap-3 sm:gap-4 flex-1">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                                {index + 2}
                              </div>
                              <span className="font-medium text-sm sm:text-base">
                                {alt.class.replace(/___/g, " - ")}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 ml-10 sm:ml-0">
                              <div className="w-20 sm:w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-slate-600 h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${barWidth}%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold min-w-[3rem] text-right">
                                {confidencePercentage > 0.01
                                  ? confidencePercentage.toFixed(2)
                                  : confidencePercentage.toExponential(1)}
                                %
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            )}
            {/* Warning Alert */}
            <Alert className="shadow-lg p-3 sm:p-4">
              <AlertCircle color="red" className="h-4 w-4 sm:h-5 sm:w-5" />
              <AlertDescription className="text-red-400 font-medium text-xs sm:text-sm">
               {t('subDescription')}
              </AlertDescription>
            </Alert>
          </>
        )}
      </div>
    </div>
  );
}

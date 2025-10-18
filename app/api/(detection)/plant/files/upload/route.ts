import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const FileSchema = z.object({
  file: z
    .instanceof(Blob)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size should be less than 5MB",
    })
    // Update the file type based on the kind of files you want to accept
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "File type should be JPEG or PNG",
    }),
});

export async function POST(request: NextRequest) {
  if (request.body === null) {
    return new Response("Request body is empty", { status: 400 });
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const validatedFile = FileSchema.safeParse({ file });

    if (!validatedFile.success) {
      const errorMessage = validatedFile.error.errors
        .map((error) => error.message)
        .join(", ");

      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const blob = await put(
      `plant-disease-detection/${file.name}`, // Klasör yolu
      file,
      {
        access: "public", // veya 'private'
        addRandomSuffix: true, // Aynı isimli dosyalar için benzersiz URL
      },
    );


    const backendFormData = new FormData();
    backendFormData.append("file", file);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prediction/analyze`, {
      method: "POST",
      body: backendFormData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to analyze image" },
        { status: response.status },
      );
    }

    const result = await response.json();

    // Başarılı yanıt
    return NextResponse.json({
      blobUrl: blob.url,
      url: result.data?.url || file.name, // Backend'den URL geliyorsa kullan
      pathname: file.name,
      contentType: file.type,
      prediction: result.data, // Tahmin sonuçları
      message: result.message,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file, please try again!" },
      { status: 500 },
    );
  }
}

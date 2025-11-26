import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Client } from "@gradio/client";
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

    await put(
      `plant-disease-detection/${file.name}`, // Klasör yolu
      file,
      {
        access: "public", // veya 'private'
        addRandomSuffix: true, // Aynı isimli dosyalar için benzersiz URL
      },
    );

    const backendFormData = new FormData();
    backendFormData.append("file", file);

    console.log("Dosya alındı:", file.name, file.type, file.size);

    const client = await Client.connect("Sbzc/plant-model-api");

    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type });

    // Tahmin yap
    const result = await client.predict("/predict", {
      image: blob,
    });

    return NextResponse.json({
      success: true,
      url: URL.createObjectURL(blob), // Preview için URL
      name: file.name,
      contentType: file.type,
      prediction: result.data,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file, please try again!" },
      { status: 500 },
    );
  }
}

import { Client } from "@gradio/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'Resim bulunamadı' }, 
        { status: 400 }
      );
    }

    console.log('Dosya alındı:', file.name, file.type, file.size);

    
    const client = await Client.connect("Sbzc/insect-classifier");
    
    
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
      prediction: result.data
    });
    
  } catch (error) {
    console.error('Tahmin hatası:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu'
    }, { status: 500 });
  }
}

// Route config
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Gradio işlemleri için timeout artırıldı
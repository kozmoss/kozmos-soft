// src/data/imageData.ts

// Görsel verisi için bir tip tanımı (interface)
export interface ImageData {
    id: number;
    src: string; // /static/images/... gibi public klasörüne göre yol
    alt: string;
    category: string;
    displayType: 'mobile' | 'desktop'; // Sadece bu iki değer olabilir
  }
  
  const imageData: ImageData[] = [
     {
      id: 1,
      src: '/static/image/website.png',
      alt: 'Re.vert konsept görseli',
      category: 'eCommerce',
      displayType: 'desktop',
    },
    {
      id: 2,
      src: '/static/image/busines.png',
      alt: 'Mobilite konsept görseli',
      category: 'Business & Services',
      displayType: 'desktop',
    },
    {
      id: 3,
      src: '/static/image/mobilePhoto.png',
      alt: 'Fotoğrafçılık konsept görseli',
      category: 'Photography',
      displayType: 'mobile',
    },
    {
      id: 4,
      src: '/static/image/bitcoin.png',
      alt: 'Tasarımcı portföy görseli',
      category: 'Portfolio',
      displayType: 'mobile',
    },
     {
      id: 5,
      src: '/static/image/food.png',
      alt: 'Yoza Kura restoran görseli',
      category: 'Restaurant',
      displayType: 'desktop',
    },
     {
      id: 6,
      src: '/static/image/creative.png',
      alt: 'Void konsept görseli',
      category: 'Creative',
      displayType: 'desktop',
    },
    // ... diğer görseller
  ];
  
  export default imageData;
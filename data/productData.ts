export const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    images: [
      "/static/image/WirelessHeadphones.jpg",
      "/static/image/WirelessHeadphones1.jpg",
      "/static/image/WirelessHeadphones2.jpg",
      "/static/image/WirelessHeadphones3.jpg",
      "/static/image/WirelessHeadphones4.jpg",
    ],
    rating: 4,
    reviews: 128,
    description:
      "Premium wireless headphones with noise cancellation and long battery life.",
    fullDescription:
      "Experience immersive sound with our premium wireless headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear audio while blocking out unwanted background noise. With up to 30 hours of battery life, comfortable ear cushions, and intuitive touch controls, they're perfect for music lovers, travelers, and professionals alike.",
    specifications: [
      { name: "Battery Life", value: "30 hours" },
      { name: "Bluetooth Version", value: "5.0" },
      { name: "Noise Cancellation", value: "Active" },
      { name: "Weight", value: "250g" },
      { name: "Charging", value: "USB-C" },
      { name: "Warranty", value: "2 years" },
    ],
    reviewsList: [
      {
        user: "John D.",
        rating: 5,
        date: "March 15, 2023",
        comment:
          "These headphones are amazing! The sound quality is excellent and the noise cancellation works perfectly on my commute.",
      },
      {
        user: "Sarah M.",
        rating: 4,
        date: "February 28, 2023",
        comment:
          "Very comfortable and great sound. Battery life is impressive. The only downside is they're a bit bulky for travel.",
      },
      {
        user: "Michael T.",
        rating: 5,
        date: "January 10, 2023",
        comment:
          "Best headphones I've ever owned. Worth every penny for the sound quality alone.",
      },
    ],
  },
];

export const relatedProducts = [
  {
    id: "2",
    name: "Smart Watch",
    category: "electronics",
    price: 199.99,
    image: "/static/image/smartwatch.jpg",
    rating: 4,
  },
  {
    id: "6",
    name: "smartPhone",
    category: "electronics",
    price: 699.99,
    image: "/static/image/smartphone.jpg",
    rating: 5,
  },
  {
    id: "9",
    name: "bluetoothSpeaker",
    category: "electronics",
    price: 79.99,
    image: "/static/image/BluetoothSpeaker.jpg",
    rating: 4,
  },
  {
    id: "10",
    name: "wirelessEarbuds",
    category: "electronics",
    price: 89.99,
    image: "/static/image/earbuds.jpg",
    rating: 3,
  },
];

export const featuredProducts = [
  {
    id: "1",
    name: "wirelessHeadphones",
    category: "electronics",
    price: 129.99,
    image: "/static/image/WirelessHeadphones.jpg",
  },
  {
    id: "2",
    name: "smartWatch",
    category: "electronics",
    price: 199.99,
    image: "/static/image/SmartWatch.jpg",
  },
  {
    id: "3",
    name: "runningShoes",
    category: "sportsOutdoors",
    price: 89.99,
    image: "/static/image/RunningShoes.jpg",
  },
  {
    id: "4",
    name: "coffeeMaker",
    category: "homeKitchen",
    price: 59.99,
    image: "/static/image/CoffeeMaker.jpg",
  },
  { 
    id: "5",
    name: "backpack",
    category: "fashion",
    price: 49.99,
    image: "/static/image/backpack.jpg",
  },
  {
    id: "6",
    name: "smartphone",
    category: "electronics",
    price: 699.99,
    image: "/static/image/smartphone.jpg",
  },
  {
    id: "7",
    name: "yogaMat",
    category: "sportsOutdoors",
    price: 29.99,
    image: "/static/image/yogamat.jpg",
  },
  {
    id: "8",
    name: "deskLamp",
    category: "homeKitchen",
    price: 39.99,
    image: "/static/image/desklamb.jpg",
  },
];

export const categories = [
  {
    id: "electronics",
    name: "electronics",
    image: "/static/image/electronic.jpg",
  },
  {
    id: "fashion",
    name: "fashion",
    image: "/static/image/fashion.jpg",
  },
  {
    id: "home",
    name: "homeKitchen",
    image: "/static/image/home-kitchen.jpg",
  },
  {
    id: "sports",
    name: "sportsOutdoors",
    image: "/static/image/Sports&Outdoors.jpg",
  },
];

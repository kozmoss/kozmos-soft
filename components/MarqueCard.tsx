import Image from "next/image";

export const cards = [
  {
    id: 1,
    content: (
      <Image
        src="/static/image/website.png"
        alt="Website Screenshot"
        width={600}
        height={300}
        className=" w-full h-full object-contain "
      />
    ),
  },
  {
    id: 2,
    content: (
      <Image
        className="w-full h-full object-contain"
        src="/static/image/busines.png"
        width={600}
        height={300}
        alt="Business Website Screenshot"
      />
    ),
  },
  {
    id: 3,
    content: (
      <Image
        className="w-full h-full object-contain"
        src="/static/image/creative.png"
        width={600}
        height={300}
        alt="Mobile App Screenshot"
      />
    ),
  },
  {
    id: 4,
    content: (
      <Image
        className="w-full h-full object-contain"
        src="/static/image/mobile-mobile-1.png"
        width={600}
        height={300}
        alt="Website Screenshot"
      />
    ),
  },
  {
    id: 5,
    content: (
      <Image
        className="w-full h-full object-contain "
        src="/static/image/mobile-mobile-2.png"
        width={600}
        height={300}
        alt="Mobile App Interface Screenshot"
      />
    ),
  },
  {
    id: 6,
    content: (
      <Image
        className="w-full h-full object-fill"
        src="/static/image/mobile-mobile-3.png"
        width={600}
        height={300}
        alt="Website Screenshot"
      />
    ),
  },
  {
    id: 7,
    content: (
      <Image
        className="w-full h-full object-contain"
        src="/static/image/mobile-mobile-4.png"
        width={600}
        height={300}
        alt="Website Screenshot"
      />
    ),
  },
];

import Image from "next/image";
export const OptimizedImage = ({
    src,
    alt,
    className,
    priority = false,
  }: {
    src: string;
    alt: string;
    className: string;
    priority: boolean;
  }) => {
    return (
      <div className="relative w-full flex justify-center mb-5">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className={`${className}  opacity-100 transition-opacity duration-300`}
          priority={priority}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDySj"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  };


  export const OptimizedVideo = ({
    src,
    className,
  }: {
    src: string;
    className: string;
  }) => {
    return (
      <div className="relative h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`${className} opacity-100 transition-opacity duration-500`}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
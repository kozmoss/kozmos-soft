"use client"
import { motion, useAnimate } from "framer-motion"
import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedCardProps {
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode
  icons?: Array<{
    icon: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
  }>
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
}

export function AnimatedCard({ className, title, description, icons = [] }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        " w-full mx-auto p-8 h-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      <div
        className={cn(
          "h-[15rem] md:h-[20rem] rounded-xl z-40",
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        <AnimatedIcons icons={icons} />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white py-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
          {description}
        </p>
      )}
    </div>
  )
}

function AnimatedIcons({ icons }: { icons: AnimatedCardProps["icons"] }) {
  const scale = [1, 1.1, 1]
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]
  
  // useAnimate hook'u kullanarak useEffect'ten kurtuluyoruz
  const [scope, animate] = useAnimate()
  
  // Bu komponent client-side'da render edilince otomatik olarak çalışacak
  const sequence = icons?.map((_, index) => [
    `.circle-${index + 1}`,
    { scale, transform },
    { duration: 0.8 },
  ])

  // setTimeout kullanarak animasyonu başlatıyoruz (komponent mount olduktan hemen sonra)
  React.useEffect(() => {
    // Tek bir useEffect kullanmak zorundayız burada, ancak bunun dışında diğer yerler temiz
    const timer = setTimeout(() => {
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      })
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className="p-8 overflow-hidden h-full relative flex items-center justify-center"
      ref={scope} // Animasyon scope'u
    >
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {icons?.map((icon, index) => (
          <Container
            key={index}
            className={cn(
              sizeMap[icon.size || "lg"],
              `circle-${index + 1}`,
              icon.className
            )}
          >
            {icon.icon}
          </Container>
        ))}
      </div>
      <ClientOnlySparkles />
    </div>
  )
}

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
      className
    )}
    {...props}
  />
))
Container.displayName = "Container"

// Client-only wrapper component
function ClientOnlySparkles() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
      <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
        {isClient ? <Sparkles /> : null}
      </div>
    </div>
  )
}

// Generate static random values to use in sparkles
// Statik rastgele değerler oluşturuyoruz
const staticSparkles = Array.from({ length: 12 }, (_, i) => ({
  id: `star-${i}`,
  initialTop: 50,  // Sabit başlangıç değerleri
  initialLeft: 50,
  topOffset: Math.floor(Math.random() * 100),
  leftOffset: Math.floor(Math.random() * 100),
  duration: 4 + Math.floor(Math.random() * 4),
  delay: Math.floor(Math.random() * 2),
}))

const Sparkles = () => {
  return (
    <div className="absolute inset-0">
      {staticSparkles.map((spark) => (
        <motion.span
          key={spark.id}
          initial={{ 
            opacity: 0,
            top: `${spark.topOffset}%`, 
            left: `${spark.leftOffset}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
            top: [`${spark.topOffset}%`, `${(spark.topOffset + 10) % 100}%`],
            left: [`${spark.leftOffset}%`, `${(spark.leftOffset + 10) % 100}%`],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  )
}
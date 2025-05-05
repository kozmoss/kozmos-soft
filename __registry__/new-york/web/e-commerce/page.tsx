import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { categories, featuredProducts } from "@/data/productData"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Web")
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="" className="flex items-center gap-2 font-bold text-xl">
            <span>KosmozShop</span>
          </Link>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <Input type="search" placeholder={t("e-commerce.common.search")} className="max-w-sm" />
          </div>
          <div className="flex items-center gap-4">
            <Link href="">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  3
                </span>
              </Button>
            </Link>
            <Button>{t("e-commerce.common.signIn")}</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-8">{t("e-commerce.home.featuredProducts")}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link href={""} key={product.id}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg pt-0 gap-3">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{t(`e-commerce.products.${product.name}`)}</CardTitle>
                    </CardHeader>
                    <CardContent className=" pl-4 ">
                      <p className="text-sm text-muted-foreground">{t(`e-commerce.categories.${product.category}`)}</p>
                    </CardContent>
                    <CardFooter className="pl-4 flex items-center justify-between">
                      <p className="font-medium">${product.price.toFixed(2)}</p>
                      <Button size="sm">{t("e-commerce.common.addToCart")}</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{t("e-commerce.home.categories")}</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <Link href={""} key={category.id}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg pt-0">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-center">{t(`e-commerce.categories.${category.name}`)}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
          {t('e-commerce.common.copyright', { year: "2025" })}
          </p>
          <div className="flex gap-4">
            <Link href="" className="text-sm text-muted-foreground hover:underline">
             {t("e-commerce.common.terms")}
            </Link>
            <Link href="" className="text-sm text-muted-foreground hover:underline">
              {t("e-commerce.common.privacy")}
            </Link>
            <Link href="" className="text-sm text-muted-foreground hover:underline">
             {t("e-commerce.common.contact")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}



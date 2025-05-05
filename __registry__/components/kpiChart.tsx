"use client"

import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function KpiCards() {
  const t = useTranslations("Web.erp")
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("totalRevenue")}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$845,231.89</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">YTD (Year to Date)</p>
            <p className="text-xs text-emerald-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +20.1%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("newOrders")}</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">{t("thisMonth")}</p>
            <p className="text-xs text-emerald-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +12.4%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("totalProducts")}</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,324</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">{t("totalProducts")}</p>
            <p className="text-xs text-rose-500 flex items-center">
              <ArrowDown className="mr-1 h-3 w-3" />
              -4.5%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("activeCustomers")}</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">{t("totalActive")}</p>
            <p className="text-xs text-emerald-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +18.1%
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

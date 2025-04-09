"use client"

import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
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
          <CardTitle className="text-sm font-medium">New Orders</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">This month</p>
            <p className="text-xs text-emerald-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +12.4%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,324</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">Total products</p>
            <p className="text-xs text-rose-500 flex items-center">
              <ArrowDown className="mr-1 h-3 w-3" />
              -4.5%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-muted-foreground">Total active</p>
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

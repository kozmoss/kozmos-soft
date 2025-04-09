"use client";

import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerAcquisitionChart } from "./customeracquisitionChart";
import { InventoryStatusChart } from "./InventoryStatusChart";
import { KpiCards } from "./kpiChart";
import { RecentOrdersTable } from "./recent-order-table";
import { RevenueChart } from "./revenue-chart";
import { SalesChart } from "./sales-chart";
import { InventoryChart } from "./inventoryChart2";

export function ErmDashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business performance and metrics
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <KpiCards />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly sales performance</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SalesChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentOrdersTable />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    +20.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversion Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    +3.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Order Value
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$259.35</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    -1.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New vs returning customers</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerAcquisitionChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Products
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,324</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Low Stock Items
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    +12%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Inventory Value
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$425,890</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>Stock levels by category</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryStatusChart />
              </CardContent>
            </Card>

            <Card className="col-span-2 lg:col-span-1">  <InventoryChart /></Card>
          
          </div>
        </TabsContent>

        <TabsContent value="finance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$845,231.89</div>
                <p className="text-xs text-muted-foreground">
                  YTD (Year to Date)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$356,789.42</div>
                <p className="text-xs text-muted-foreground">
                  YTD (Year to Date)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Net Profit
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$488,442.47</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    +8.2%
                  </span>{" "}
                  from last year
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue vs Expenses</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex items-center justify-center h-full">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Detailed financial charts will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

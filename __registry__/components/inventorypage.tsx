"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, BarChart3, Package, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InventoryTrendsChart } from "./Inventory-trends-chart"
import { InventoryCategoryChart } from "./Inventory-category-chart"

// Sample inventory data
const inventoryItems = [
  {
    id: "INV001",
    name: "Laptop Computer",
    category: "Electronics",
    stock: 24,
    price: "$999.99",
    status: "In Stock",
    location: "Warehouse A",
    lastUpdated: "2023-04-01",
  },
  {
    id: "INV002",
    name: "Office Chair",
    category: "Furniture",
    stock: 15,
    price: "$189.99",
    status: "In Stock",
    location: "Warehouse B",
    lastUpdated: "2023-04-02",
  },
  {
    id: "INV003",
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 8,
    price: "$149.99",
    status: "Low Stock",
    location: "Warehouse A",
    lastUpdated: "2023-04-03",
  },
  {
    id: "INV004",
    name: "Desk Lamp",
    category: "Lighting",
    stock: 32,
    price: "$49.99",
    status: "In Stock",
    location: "Warehouse C",
    lastUpdated: "2023-04-04",
  },
  {
    id: "INV005",
    name: "Smartphone",
    category: "Electronics",
    stock: 0,
    price: "$799.99",
    status: "Out of Stock",
    location: "Warehouse A",
    lastUpdated: "2023-04-05",
  },
  {
    id: "INV006",
    name: "Ergonomic Keyboard",
    category: "Electronics",
    stock: 12,
    price: "$129.99",
    status: "In Stock",
    location: "Warehouse A",
    lastUpdated: "2023-04-06",
  },
  {
    id: "INV007",
    name: "Whiteboard",
    category: "Office Supplies",
    stock: 5,
    price: "$89.99",
    status: "Low Stock",
    location: "Warehouse B",
    lastUpdated: "2023-04-07",
  },
  {
    id: "INV008",
    name: "Printer",
    category: "Electronics",
    stock: 3,
    price: "$299.99",
    status: "Low Stock",
    location: "Warehouse C",
    lastUpdated: "2023-04-08",
  },
]

export function InventoryPageComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = inventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Manage your product inventory and stock levels</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                +3
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventoryItems.filter((item) => item.status === "Low Stock").length}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                +2
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventoryItems.filter((item) => item.status === "Out of Stock").length}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4" />
                -1
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$425,890</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>Manage your product inventory and stock levels</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search inventory..."
                  className="h-9 md:w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === "In Stock"
                              ? "default"
                              : item.status === "Low Stock"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Inventory Trends</CardTitle>
                <CardDescription>Stock level trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryTrendsChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Inventory by Category</CardTitle>
                <CardDescription>Distribution across categories</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryCategoryChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="warehouses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Management</CardTitle>
              <CardDescription>Manage warehouse locations and inventory distribution</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <Package className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Warehouse Management</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Manage warehouse locations, track inventory across locations, and optimize storage.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

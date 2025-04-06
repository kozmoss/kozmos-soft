"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MoreHorizontal,
  Users,
  DollarSign,
  TrendingUp,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Chart1 } from "./chart-1";
import { Chart2 } from "./chart-2";
import { SalesTargetGauge } from "./sales-target";
import { CustomerSatisfactionRadar } from "./custormes-satisfaction";
import { DealScatterChart } from "./deal-scatter";

const CrmDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Örnek veri
  const salesData = [
    { name: "Oca", satis: 4000, musteri: 24, karlilik: 78 },
    { name: "Şub", satis: 3000, musteri: 13, karlilik: 65 },
    { name: "Mar", satis: 5000, musteri: 22, karlilik: 82 },
    { name: "Nis", satis: 2780, musteri: 19, karlilik: 71 },
    { name: "May", satis: 1890, musteri: 14, karlilik: 56 },
    { name: "Haz", satis: 2390, musteri: 15, karlilik: 60 },
    { name: "Tem", satis: 3490, musteri: 25, karlilik: 75 },
  ];

  const customerData = [
    {
      id: 1,
      isim: "Ahmet Yılmaz",
      sirket: "ABC Ltd.",
      durum: "Aktif",
      deger: "₺125,000",
      son_islem: "2 gün önce",
    },
    {
      id: 2,
      isim: "Ayşe Kaya",
      sirket: "XYZ A.Ş.",
      durum: "Görüşmede",
      deger: "₺76,500",
      son_islem: "Bugün",
    },
    {
      id: 3,
      isim: "Mehmet Demir",
      sirket: "123 Holding",
      durum: "Aktif",
      deger: "₺245,000",
      son_islem: "1 hafta önce",
    },
    {
      id: 4,
      isim: "Zeynep Çelik",
      sirket: "Tekno A.Ş.",
      durum: "Beklemede",
      deger: "₺52,000",
      son_islem: "3 gün önce",
    },
    {
      id: 5,
      isim: "Ali Öztürk",
      sirket: "Global Ltd.",
      durum: "Aktif",
      deger: "₺180,000",
      son_islem: "Dün",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Üst menü */}
      <header className=" p-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Son 30 gün" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Son 7 gün</SelectItem>
                <SelectItem value="30">Son 30 gün</SelectItem>
                <SelectItem value="90">Son 90 gün</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Ana içerik */}
      <div className="flex-1 overflow-auto">
        <Tabs
          defaultValue="overview"
          className="space-y-4"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <TabsList>
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="customers">Müşteriler</TabsTrigger>
            <TabsTrigger value="sales">Satışlar</TabsTrigger>
          </TabsList>

          {/* Genel Bakış Sekmesi */}
          <TabsContent value="overview" className="space-y-4">
            {/* Üst kısım metrikleri */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Toplam Satış
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₺16,890</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% artış
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Yeni Müşteri
                  </CardTitle>
                  <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+48</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% artış
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Ortalama Sipariş
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₺1,230</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +3.1% artış
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dönüşüm Oranı
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.8%</div>
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />
                    -2.5% düşüş
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Grafik ve Tablo alanı */}
            <div className="grid gap-4 md:grid-cols-2">
              <CustomerSatisfactionRadar />
              <SalesTargetGauge></SalesTargetGauge>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Chart1 />
              <Chart2 />
            </div>

            {/* Son Müşteri Tablosu */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Son Müşteriler</CardTitle>
                <CardDescription>
                  Son eklenen müşteriler ve durumları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Müşteri</TableHead>
                        <TableHead>Şirket</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Değer</TableHead>
                        <TableHead>Son İşlem</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customerData.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell className="font-medium">
                            {customer.isim}
                          </TableCell>
                          <TableCell>{customer.sirket}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                customer.durum === "Aktif"
                                  ? "bg-green-100 text-green-800"
                                  : customer.durum === "Görüşmede"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {customer.durum}
                            </span>
                          </TableCell>
                          <TableCell>{customer.deger}</TableCell>
                          <TableCell>{customer.son_islem}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Müşteriler Sekmesi */}
          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Tüm Müşteriler</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Müşteri ara..."
                        className="w-64 pl-8"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-36">
                        <SelectValue placeholder="Filtrele" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tümü</SelectItem>
                        <SelectItem value="active">Aktif</SelectItem>
                        <SelectItem value="inactive">Beklemede</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Müşteri</TableHead>
                        <TableHead>Şirket</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Değer</TableHead>
                        <TableHead>Son İşlem</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customerData.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell className="font-medium">
                            {customer.isim}
                          </TableCell>
                          <TableCell>{customer.sirket}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                customer.durum === "Aktif"
                                  ? "bg-green-100 text-green-800"
                                  : customer.durum === "Görüşmede"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {customer.durum}
                            </span>
                          </TableCell>
                          <TableCell>{customer.deger}</TableCell>
                          <TableCell>{customer.son_islem}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Satışlar Sekmesi */}
          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Satış Analizi</CardTitle>
                <CardDescription>Satış performansı ve oranları</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="satis"
                      name="Satış (₺)"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="karlilik"
                      name="Karlılık (%)"
                      stroke="#82ca9d"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <DealScatterChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CrmDashboard;

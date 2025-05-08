"use client"

import { useState } from "react"
import { ArrowUp, Download, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { employees } from "@/contants/web"
import { useTranslations } from "next-intl"


export function HrPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const t = useTranslations("Web.erp")

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("hr.title")}</h1>
        <p className="text-muted-foreground">{t("hr.subtitle")}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> {t("hr.export")}
          </Button>
          <Button>
          <Plus className="mr-2 h-4 w-4" /> {t("hr.add_employee")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("hr.total_employees")}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                +12
              </span>
              {t("hr.from_last_year")}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("hr.departmentsJust")}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("hr.new_hires")}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">{t("hr.this_quarter")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("hr.turnover_rate")}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2%</div>
            <p className="text-xs text-muted-foreground">{t("hr.annual_rate")}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
        <TabsTrigger value="employees">{t("hr.tabs.employees")}</TabsTrigger>
          <TabsTrigger value="departments">{t("hr.tabs.departments")}</TabsTrigger>
          <TabsTrigger value="recruitment">{t("hr.tabs.recruitment")}</TabsTrigger>
          <TabsTrigger value="payroll">{t("hr.tabs.payroll")}</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
            <CardTitle>{t("hr.directory.title")}</CardTitle>
            <CardDescription>{t("hr.directory.description")}</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
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
                  <TableHead>{t("hr.table.employee")}</TableHead>
                    <TableHead>{t("hr.table.position")}</TableHead>
                    <TableHead>{t("hr.table.department")}</TableHead>
                    <TableHead>{t("hr.table.join_date")}</TableHead>
                    <TableHead>{t("hr.table.status")}</TableHead>

                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={employee.name} />
                            <AvatarFallback>
                              {employee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.joinDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            employee.status === "active"
                              ? "default"
                              : employee.status === "on-leave"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {["departments", "recruitment", "payroll"].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t(`hr.${tab}.title`)}</CardTitle>
                <CardDescription>{t(`hr.${tab}.description`)}</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">{t(`hr.${tab}.heading`)}</h3>
                  <p className="text-sm text-muted-foreground max-w-md">{t(`hr.${tab}.body`)}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

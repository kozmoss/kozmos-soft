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

// Sample employees data
const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Senior Developer",
    department: "Engineering",
    email: "john.smith@example.com",
    status: "active",
    joinDate: "2020-05-12",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    email: "sarah.j@example.com",
    status: "active",
    joinDate: "2019-11-23",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    position: "Sales Representative",
    department: "Sales",
    email: "michael.b@example.com",
    status: "active",
    joinDate: "2021-02-15",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "HR Specialist",
    department: "Human Resources",
    email: "emily.d@example.com",
    status: "active",
    joinDate: "2018-07-10",
  },
  {
    id: "EMP005",
    name: "Robert Wilson",
    position: "Financial Analyst",
    department: "Finance",
    email: "robert.w@example.com",
    status: "on-leave",
    joinDate: "2020-01-05",
  },
  {
    id: "EMP006",
    name: "Jennifer Lee",
    position: "Product Manager",
    department: "Product",
    email: "jennifer.l@example.com",
    status: "active",
    joinDate: "2019-09-18",
  },
  {
    id: "EMP007",
    name: "David Miller",
    position: "UI/UX Designer",
    department: "Design",
    email: "david.m@example.com",
    status: "active",
    joinDate: "2021-04-22",
  },
  {
    id: "EMP008",
    name: "Lisa Thompson",
    position: "Customer Support",
    department: "Support",
    email: "lisa.t@example.com",
    status: "inactive",
    joinDate: "2020-08-30",
  },
]

export function HrPage() {
  const [searchTerm, setSearchTerm] = useState("")

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
          <h1 className="text-3xl font-bold tracking-tight">Human Resources</h1>
          <p className="text-muted-foreground">Manage employees, departments, and HR processes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                +12
              </span>{" "}
              from last year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Hires</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Turnover Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2%</div>
            <p className="text-xs text-muted-foreground">Annual rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Directory</CardTitle>
              <CardDescription>Manage your company&apos;s employees</CardDescription>
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
                    <TableHead>Employee</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
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

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Management</CardTitle>
              <CardDescription>Manage company departments and structure</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <Users className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Department Structure</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Create and manage departments, assign managers, and organize company structure.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recruitment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recruitment</CardTitle>
              <CardDescription>Manage job openings and applications</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <Users className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Recruitment Pipeline</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Post job openings, track applications, schedule interviews, and manage the hiring process.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Management</CardTitle>
              <CardDescription>Manage employee compensation and benefits</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <Users className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Payroll Processing</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Process payroll, manage benefits, track time off, and generate payroll reports.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

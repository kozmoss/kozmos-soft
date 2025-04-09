"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    status: "completed",
    date: "2023-04-01",
    total: "$245.99",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    status: "processing",
    date: "2023-04-02",
    total: "$129.50",
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    status: "completed",
    date: "2023-04-03",
    total: "$79.99",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    status: "pending",
    date: "2023-04-04",
    total: "$349.99",
  },
  {
    id: "ORD-005",
    customer: "Robert Wilson",
    status: "completed",
    date: "2023-04-05",
    total: "$189.50",
  },
]

export function RecentOrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "completed" ? "default" : order.status === "processing" ? "destructive" : "secondary"
                }
              >

                
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

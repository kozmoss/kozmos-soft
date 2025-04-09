"use client"

import { Bar, BarChart, CartesianGrid, Legend,  XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CardContent } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    new: 120,
    returning: 80,
  },
  {
    name: "Feb",
    new: 140,
    returning: 95,
  },
  {
    name: "Mar",
    new: 170,
    returning: 110,
  },
  {
    name: "Apr",
    new: 150,
    returning: 125,
  },
  {
    name: "May",
    new: 190,
    returning: 140,
  },
  {
    name: "Jun",
    new: 210,
    returning: 160,
  },
]

export function CustomerAcquisitionChart() {
  const chartConfig = {
    new: {
      label: "New Customers",
      color: "hsl(var(--chart-1))",
    },
    returning: {
      label: "Returning Customers",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
                <Legend />
            <Bar dataKey="new" fill="var(--color-new)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="returning" fill="var(--color-returning)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
   
  )
}



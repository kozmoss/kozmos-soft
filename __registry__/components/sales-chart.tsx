"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CardContent, CardFooter } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const data = [
  {
    name: "Jan",
    sales: 18000,
    target: 20000,
  },
  {
    name: "Feb",
    sales: 22000,
    target: 22000,
  },
  {
    name: "Mar",
    sales: 32000,
    target: 24000,
  },
  {
    name: "Apr",
    sales: 28000,
    target: 26000,
  },
  {
    name: "May",
    sales: 35000,
    target: 28000,
  },
  {
    name: "Jun",
    sales: 42000,
    target: 30000,
  },
  {
    name: "Jul",
    sales: 38000,
    target: 32000,
  },
  {
    name: "Aug",
    sales: 45000,
    target: 34000,
  },
  {
    name: "Sep",
    sales: 48000,
    target: 36000,
  },
  {
    name: "Oct",
    sales: 52000,
    target: 38000,
  },
  {
    name: "Nov",
    sales: 49000,
    target: 40000,
  },
  {
    name: "Dec",
    sales: 58000,
    target: 42000,
  },
]

export function SalesChart() {


  const chartConfig = {
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-1))",
    },
    target: {
      label: "Target",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (


      <><CardContent>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />} />
          <Area
            dataKey="sales"
            type="natural"
            fill="var(--color-sales)"
            fillOpacity={0.4}
            stroke="var(--color-sales)"
            stackId="a" />
          <Area
            dataKey="target"
            type="natural"
            fill="var(--color-target)"
            fillOpacity={0.4}
            stroke="var(--color-target)"
            stackId="a" />
        </AreaChart>
      </ChartContainer>
    </CardContent><CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter></>
  
  )
}

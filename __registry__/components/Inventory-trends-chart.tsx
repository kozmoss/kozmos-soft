"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    month: "Jan",
    electronics: 120,
    furniture: 85,
    office: 45,
  },
  {
    month: "Feb",
    electronics: 115,
    furniture: 82,
    office: 52,
  },
  {
    month: "Mar",
    electronics: 108,
    furniture: 78,
    office: 48,
  },
  {
    month: "Apr",
    electronics: 118,
    furniture: 88,
    office: 55,
  },
  {
    month: "May",
    electronics: 125,
    furniture: 90,
    office: 60,
  },
  {
    month: "Jun",
    electronics: 132,
    furniture: 95,
    office: 65,
  },
]

export function InventoryTrendsChart() {
  const chartConfig = {
    electronics: {
      label: "Electronics",
      color: "hsl(var(--chart-1))",
    },
    furniture: {
      label: "Furniture",
      color: "hsl(var(--chart-2))",
    },
    office: {
      label: "Office Supplies",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <div className="w-full h-[300px]">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" className="text-xs" tickLine={false} axisLine={false} />
            <YAxis className="text-xs" tickLine={false} axisLine={false} />
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="electronics"
              stroke="var(--color-electronics)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="furniture"
              stroke="var(--color-furniture)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="office"
              stroke="var(--color-office)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

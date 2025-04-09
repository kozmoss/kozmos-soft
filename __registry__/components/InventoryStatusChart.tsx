"use client";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  CardContent,
} from "@/components/ui/card";

const data = [
  {
    name: "Electronics",
    inStock: 245,
    lowStock: 35,
    outOfStock: 12,
  },
  {
    name: "Furniture",
    inStock: 180,
    lowStock: 22,
    outOfStock: 5,
  },
  {
    name: "Clothing",
    inStock: 320,
    lowStock: 15,
    outOfStock: 8,
  },
  {
    name: "Home Goods",
    inStock: 210,
    lowStock: 30,
    outOfStock: 15,
  },
  {
    name: "Office",
    inStock: 160,
    lowStock: 18,
    outOfStock: 7,
  },
];

export function InventoryStatusChart() {
  const chartConfig = {
    inStock: {
      label: "In Stock",
      color: "hsl(var(--chart-1))",
    },
    lowStock: {
      label: "Low Stock",
      color: "hsl(var(--chart-2))",
    },
    outOfStock: {
      label: "Out of Stock",
      color: "hsl(var(--chart-3))",
    },
  };

  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="name"
            className="text-xs"
            tickLine={false}
            axisLine={false}
          />
          <YAxis className="text-xs" tickLine={false} axisLine={false} />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="inStock"
            stackId="a"
            fill="var(--color-inStock)"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="lowStock"
            stackId="a"
            fill="var(--color-lowStock)"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="outOfStock"
            stackId="a"
            fill="var(--color-outOfStock)"
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
}

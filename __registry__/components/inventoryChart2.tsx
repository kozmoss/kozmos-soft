"use client";

import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "sales", visitors: 275, fill: "var(--color-sales)" },
  { browser: "hr", visitors: 200, fill: "var(--color-hr)" },
  { browser: "rd", visitors: 187, fill: "var(--color-rd)" },
  { browser: "finance", visitors: 173, fill: "var(--color-finance)" },
  { browser: "support", visitors: 90, fill: "var(--color-support)" },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  hr: {
    label: "HR",
    color: "hsl(var(--chart-2))",
  },
  rd: {
    label: "R&D",
    color: "hsl(var(--chart-3))",
  },
  finance: {
    label: "Finance",
    color: "hsl(var(--chart-4))",
  },
  support: {
    label: "Support",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function InventoryChart() {
  return (
    <>
      <CardHeader className="items-center pb-0">
        <CardTitle>Departmental Activity</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="visitors" />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Representing departmental activity over the last{" "}
          <span className="font-medium text-foreground">6 months</span>.
        </div>
      </CardFooter>
    </>
  );
}

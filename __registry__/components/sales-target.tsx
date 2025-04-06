"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Achieved", value: 75 },
  { name: "Remaining", value: 25 },
]

const COLORS = ["hsl(12, 76%, 61%)", "hsl(220, 14%, 96%)"]

export function SalesTargetGauge() {
  const percentage = data[0].value

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Target</CardTitle>
        <CardDescription>Progress towards quarterly sales goal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="h-[200px] w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius="60%"
                  outerRadius="100%"
                  paddingAngle={0}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center">
            <div className="text-4xl font-bold">{percentage}%</div>
            <div className="text-sm text-muted-foreground">of quarterly target</div>
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col items-center rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Target</div>
              <div className="text-xl font-bold">$1,200,000</div>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Achieved</div>
              <div className="text-xl font-bold">$900,000</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


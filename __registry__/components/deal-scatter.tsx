"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts"

// Generate some random data for the scatter plot
const generateData = () => {
  const data = []
  for (let i = 0; i < 50; i++) {
    const dealSize = Math.floor(Math.random() * 100000) + 5000
    const daysToClose = Math.floor(Math.random() * 90) + 10
    const probability = Math.floor(Math.random() * 100)

    data.push({
      dealSize,
      daysToClose,
      probability,
      name: `Deal ${i + 1}`,
    })
  }
  return data
}

const data = generateData()

export function DealScatterChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal Analysis</CardTitle>
        <CardDescription>Relationship between deal size and time to close</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="daysToClose"
                name="Days to Close"
                label={{ value: "Days to Close", position: "insideBottom", offset: -10 }}
              />
              <YAxis
                type="number"
                dataKey="dealSize"
                name="Deal Size"
                label={{ value: "Deal Size ($)", angle: -90, position: "insideLeft" }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <ZAxis type="number" dataKey="probability" range={[50, 400]} name="Probability" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Deal Size</span>
                            <span className="font-bold">${payload[0]?.payload?.dealSize?.toLocaleString()}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Days to Close</span>
                            <span className="font-bold">{payload[0]?.payload?.daysToClose} days</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Probability</span>
                            <span className="font-bold">{payload[0]?.payload?.probability}%</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Scatter name="Deals" data={data} fill="hsl(12, 76%, 61%)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}


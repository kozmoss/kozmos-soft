"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { subject: "Product Quality", A: 90, B: 75, fullMark: 100 },
  { subject: "Customer Service", A: 85, B: 80, fullMark: 100 },
  { subject: "Pricing", A: 70, B: 85, fullMark: 100 },
  { subject: "User Experience", A: 95, B: 70, fullMark: 100 },
  { subject: "Reliability", A: 80, B: 65, fullMark: 100 },
  { subject: "Features", A: 75, B: 90, fullMark: 100 },
]

export function CustomerSatisfactionRadar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Satisfaction</CardTitle>
        <CardDescription>Comparison of satisfaction metrics year over year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Metric</span>
                            <span className="font-bold">{payload[0]?.payload?.subject}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">This Year</span>
                            <span className="font-bold">{payload[0]?.payload?.A}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Last Year</span>
                            <span className="font-bold">{payload[0]?.payload?.B}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Radar
                name="This Year"
                dataKey="A"
                stroke="hsl(12, 76%, 61%)"
                fill="hsl(12, 76%, 61%)"
                fillOpacity={0.5}
              />
              <Radar
                name="Last Year"
                dataKey="B"
                stroke="hsl(173, 58%, 39%)"
                fill="hsl(173, 58%, 39%)"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(12,76%,61%)]" />
            <span className="text-sm">This Year</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(173,58%,39%)]" />
            <span className="text-sm">Last Year</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


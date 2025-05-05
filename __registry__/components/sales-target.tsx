"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { useTranslations } from "next-intl"

const COLORS = ["hsl(12, 76%, 61%)", "hsl(220, 14%, 96%)"]

export function SalesTargetGauge() {
  const t = useTranslations("Web.crm")
  
  const data = [
    { name: t('salesTarget.labels.achieved'), value: 75 },
    { name: t('salesTarget.labels.remaining'), value: 25 },
  ]

  const percentage = data[0].value
  const targetAmount = "1,200,000"
  const achievedAmount = "900,000"

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('salesTarget.title')}</CardTitle>
        <CardDescription>{t('salesTarget.description')}</CardDescription>
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
            <div className="text-sm text-muted-foreground">
              {t('salesTarget.percentageLabel')}
            </div>
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col items-center rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">
                {t('salesTarget.metrics.target')}
              </div>
              <div className="text-xl font-bold">
                {t('salesTarget.currency')}{targetAmount}
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">
                {t('salesTarget.metrics.achieved')}
              </div>
              <div className="text-xl font-bold">
                {t('salesTarget.currency')}{achievedAmount}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
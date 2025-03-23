"use client"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "@/components/ui/chart"

const data = [
  { name: "Jan", rainfall: 10 },
  { name: "Feb", rainfall: 15 },
  { name: "Mar", rainfall: 30 },
  { name: "Apr", rainfall: 45 },
  { name: "May", rainfall: 60 },
  { name: "Jun", rainfall: 120 },
  { name: "Jul", rainfall: 150 },
  { name: "Aug", rainfall: 130 },
  { name: "Sep", rainfall: 90 },
  { name: "Oct", rainfall: 40 },
  { name: "Nov", rainfall: 20 },
  { name: "Dec", rainfall: 10 },
]

export function RainfallChart() {
  return (
    <ChartContainer className="h-[300px]">
      <Chart>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }}
        />
        <ChartTooltip
          content={<ChartTooltipContent className="border-none bg-white/80 backdrop-blur-sm" label="Rainfall" />}
        />
        <Line
          type="monotone"
          dataKey="rainfall"
          stroke="#0066CC"
          strokeWidth={2}
          dot={{ r: 4, fill: "#0066CC" }}
          activeDot={{ r: 6, fill: "#0066CC" }}
        />
        <Legend />
      </Chart>
    </ChartContainer>
  )
}


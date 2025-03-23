"use client"

import {
  ChartTooltip,
  ChartTooltipContent,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "@/components/ui/chart"

// Mock data for daily rainfall prediction
const data = [
  { date: "Today", rainfall: 5 },
  { date: "Tomorrow", rainfall: 35 },
  { date: "Day 3", rainfall: 15 },
  { date: "Day 4", rainfall: 8 },
  { date: "Day 5", rainfall: 3 },
  { date: "Day 6", rainfall: 0 },
  { date: "Day 7", rainfall: 2 },
]

export function DailyRainfallChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent className="border-none bg-white/80 backdrop-blur-sm" label="Daily Rainfall" />
            }
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


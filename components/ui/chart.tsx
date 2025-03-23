import type React from "react"
export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart">{children}</div>
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

export const ChartTooltip = ({ content }: { content: React.ReactNode }) => {
  return <div className="chart-tooltip">{content}</div>
}

export const ChartTooltipContent = ({ className, label }: { className?: string; label?: string }) => {
  return <div className={className}>{label}</div>
}

export const Line = () => {
  return null
}

export const LineChart = () => {
  return null
}

export const XAxis = () => {
  return null
}

export const YAxis = () => {
  return null
}

export const CartesianGrid = () => {
  return null
}

export const Legend = () => {
  return null
}

export const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="responsive-container">{children}</div>
}


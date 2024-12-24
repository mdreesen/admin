"use client"

import React from "react"

import { BarChart, type BarChartEventProps } from "@/components/charts/BarChart"

const chartdata = [
  {
    name: "January",
    "Revenue of month": 2488,
  },
  {
    name: "February",
    "Revenue of month": 2188,
  },
  {
    name: "March",
    "Revenue of month": 2088,
  },
  {
    name: "April",
    "Revenue of month": 2388,
  },
  {
    name: "May",
    "Revenue of month": 3088,
  },
  {
    name: "June",
    "Revenue of month": 3500,
  },
  {
    name: "July",
    "Revenue of month": 5000,
  },
  {
    name: "August",
    "Revenue of month": 8000,
  },
  {
    name: "September",
    "Revenue of month": 6000,
  },
  {
    name: "October",
    "Revenue of month": 3000,
  },
  {
    name: "November",
    "Revenue of month": 2488,
  },
  {
    name: "December",
    "Revenue of month": 1200,
  },
]

export const UseRevenueBarChart = () => {
  const [value, setValue] = React.useState<BarChartEventProps>(null)
  return (
    <>
      <BarChart
        className="h-72"
        data={chartdata}
        index="name"
        categories={["Revenue of month"]}
        yAxisWidth={45}
        onValueChange={(v) => setValue(v)}
      />
      <pre className="mt-8 rounded-md bg-gray-950 p-3 text-sm text-white">
        {JSON.stringify(value, null, 2)}
      </pre>
    </>
  )
}
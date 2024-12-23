"use client"

import React from "react"

import { DonutChart, DonutChartEventProps } from "@/components/charts/DonutChart"

const chartdata = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
]

export const UseDonutChart = () => {
  const [value, setValue] = React.useState<DonutChartEventProps>(null)
  return (
    <>
      <DonutChart
        className="mx-auto" 
        data={chartdata}
        category="name"
        value="amount"
        onValueChange={(v) => setValue(v)}
      />
      <pre className="mt-8 rounded-md bg-gray-950 p-3 text-sm text-white">
        {JSON.stringify(value, null, 2)}
      </pre>
    </>
  )
}
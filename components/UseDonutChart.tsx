"use client"

import { DonutChart } from "@/components/charts/DonutChart"

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

export const UseDonutChart = () => (
  <div className="flex flex-col items-center justify-center gap-4 h-[100%]">
    <DonutChart
      data={chartdata}
      category="name"
      value="amount"
      valueFormatter={(number: number) =>
        `$${Intl.NumberFormat("us").format(number).toString()}`
      }
    />
  </div>

)
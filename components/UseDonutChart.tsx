"use client"

import { DonutChart } from "@/components/charts/DonutChart"

const chartdata = [
  {
    name: "Employees",
    amount: 15000,
  },
  {
    name: "Materials",
    amount: 8000,
  },
  {
    name: "Vehicles",
    amount: 5000,
  },
  {
    name: "Rent",
    amount: 5120,
  },
  {
    name: "Bills",
    amount: 1000,
  },
]

export const UseDonutChart = () => (
  <div className="flex flex-col items-center justify-center gap-4 h-[100%]">
    <DonutChart
      data={chartdata}
      variant="pie"
      category="name"
      value="amount"
      valueFormatter={(number: number) =>
        `$${Intl.NumberFormat("us").format(number).toString()}`
      }
    />
  </div>

)
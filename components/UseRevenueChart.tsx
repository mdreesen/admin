"use client"

import React from "react"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from '@/lib/formatCurrency';

const data = [
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
    "Revenue of month": 9000,
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

export const UseRevenueChart = () => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis tickFormatter={tick => formatCurrency(tick)} stroke="black" />
          <CartesianGrid stroke="white" />
          <Tooltip formatter={value => formatCurrency(value as number)} />
          <Line name="Revenue Per Month" type="monotone" dataKey="Revenue of month" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
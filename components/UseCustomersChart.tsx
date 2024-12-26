"use client"

import React from "react"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "January",
    "Customers per month": 1000,
  },
  {
    name: "February",
    "Customers per month": 2000,
  },
  {
    name: "March",
    "Customers per month": 5000,
  },
  {
    name: "April",
    "Customers per month": 15000,
  },
  {
    name: "May",
    "Customers per month": 14000,
  },
  {
    name: "June",
    "Customers per month": 16000,
  },
  {
    name: "July",
    "Customers per month": 12000,
  },
  {
    name: "August",
    "Customers per month": 10000,
  },
  {
    name: "September",
    "Customers per month": 18000,
  },
  {
    name: "October",
    "Customers per month": 16000,
  },
  {
    name: "November",
    "Customers per month": 11000,
  },
  {
    name: "December",
    "Customers per month": 9000,
  },
]

export const UseCustomersChart = () => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis stroke="black" />
          <CartesianGrid stroke="white" />
          <Tooltip />
          {/* <Legend /> */}
          <Line name="Customers Per Month" type="monotone" dataKey="Customers per month" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
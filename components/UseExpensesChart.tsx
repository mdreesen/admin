"use client"

import { formatCurrency } from '@/lib/formatCurrency';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: "Employees",
    value: 15000,
  },
  {
    name: "Materials",
    value: 8000,
  },
  {
    name: "Vehicles",
    value: 5000,
  },
  {
    name: "Rent",
    value: 5120,
  },
  {
    name: "Bills",
    value: 1000,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const UseExpensesChart = () => (
  <ResponsiveContainer width="100%" height={500}>
    <PieChart width={1200} height={1200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius='100%'
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
        ))}
      </Pie>
      <Tooltip formatter={value => formatCurrency(value as number)} />
    </PieChart>
  </ResponsiveContainer>
)
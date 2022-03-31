import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLIneChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 4500,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Supplier B",
      price: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "Supplier C",
      price: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      name: "Supplier D",
      price: 4880,
      sales: 3908,
      amt: 2000,
    },
    {
      name: "Supplier E",
      price: 4090,
      sales: 4800,
      amt: 2181,
    },
    {
      name: "Supplier F",
      price: 4590,
      sales: 3800,
      amt: 2500,
    },
    {
      name: "Supplier G",
      price: 5490,
      sales: 4500,
      amt: 2100,
    },
    {
      name: "Supplier H",
      price: 5290,
      sales: 4500,
      amt: 2100,
    },
    {
      name: "Supplier I",
      price: 5190,
      sales: 4500,
      amt: 2100,
    },
    {
      name: "Supplier J",
      price: 5890,
      sales: 4500,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div>
        <LineChart width={800} height={400} data={data}>
          <Line dataKey={"price"} stroke="blue"></Line>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div>
        <BarChart width={800} height={400} data={data} barSize={20}>
          <Bar
            dataKey="price"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          ></Bar>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>
    </div>
  );
};

export default MyLIneChart;

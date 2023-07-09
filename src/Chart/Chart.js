import React, { useEffect, useState } from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("https://rajwadi.onrender.com/graph")
      .then((response) => response.json())
      .then((data) => setVal(data));
  }, []);
  return (
    <div className="main-activites">
      <div className="act-may">
        <h1 className="act">Activities</h1>
        <h1 className="may">May - June 2021</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1000}
          height={359}
          data={val}
          backgroundColor="#ffffff"
          margin={{
            top: 40,
            right: 40,
            left: 20,
            bottom: 80,
          }}
        >
          <div className="chart-head">
            <h1 className="activities">
              Activities<span className="act-date">May-June 2021</span>
            </h1>
          </div>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Users" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

export default function DataChart() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("https://rajwadi.onrender.com/piechart")
      .then((response) => response.json())
      .then((data) => setVal(data));
  }, []);
  
  return (
    <div style={{ width: "135px", height: "135px" }}>
      <PieChart width={135} height={135}>
        <Pie
          data={val}
          cx={61}
          cy={61}
          labelLine={false}
          outerRadius={67}
          fill="#8884d8"
          dataKey="value"
        >
          {val.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const LineGraph = ({ data }) => {

    console.log("data", data);

  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="When" label="When" />
      <YAxis interval={0} allowDecimals={false} label="Count" />
      <Line tickCount={1} allowDecimals={false} dataKey="Count" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineGraph;

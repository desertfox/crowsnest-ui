import { Card } from "@mui/material";
import React from "react";

const History = ({ records }) => {
  return (
    <Card>
      <h2>History</h2>
      <p>Alert Count: {records.alertCount}</p>
      <ul>
        {records.results.map((result) => (
          <li key={result.When} >
            <p>Count: {result.count}</p>
            <p>When: {result.when}</p>
            <p>Alert: {result.alert ? "True" : "False"}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default History;

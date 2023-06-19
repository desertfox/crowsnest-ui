import { Card } from "@mui/material";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

import React from "react";
import LineGraph from "./graph";

const History = ({ records }) => {
  return (
    <Card>
      <h2>History</h2>
      <p>Alert Count: {records.alertCount}</p>
      <LineGraph data={records.results} />
      <List orientation="horizontal">
        {records.results.map((result, index) => (
          <ListItem key={index}>
            <List>
              <ListItem>Count: {result.Count}</ListItem>
              <ListItem>When: {result.When}</ListItem>
              <ListItem>Alert: {result.Alert ? "True" : "False"}</ListItem>
            </List>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default History;

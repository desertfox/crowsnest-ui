import React, { useState, useEffect } from "react";

import { Grid, Typography, Card } from '@mui/material';

import ReloadButton from "../components/reloadbutton.jsx";
import ElapsedTime from "../components/elapsedtime.jsx";

import api from "../service/api.js";

export default function Dashboard() {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const getStatus = async () => {
      const response = await api.GetStatus();

      setStatus({
        startTime: new Date(response.startTime.replace(/CDT/g, "")),
        numJobs: response.numJobs,
      });
    };

    getStatus();
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h3">Dashboard</Typography>
      </Grid>
      <Grid item>
        <Card variant="outlined">
          <Typography variant="h1">Uptime {status ? <ElapsedTime date={status.startTime} /> : "00:00:00"}</Typography>
        </Card>
        <Card variant="outlined" sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h1" sx={{ mb: 2 }}>Jobs Running {status ? status.numJobs : "??"}</Typography>
          <ReloadButton />
        </Card>
      </Grid>
    </Grid>
  );
}

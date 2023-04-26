import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import History from '../components/history.jsx'
import { Card, Grid, Typography } from "@mui/material";

const Job = () => {
  const [jobData] = useState(useLocation().state);

  console.log(jobData);

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
      <Typography variant="h3">Job Details</Typography>
      </Grid>
      <Grid item>
        <Card>
          {jobData ? (
            <div className="job-data-display">
              <h2>{jobData.name}</h2>
              <p>Host: {jobData.host}</p>
              <p>Frequency: {jobData.frequency} minutes</p>
              <p>Verbose: {jobData.verbose ? "Yes" : "No"}</p>
              <p>Teams:</p>
              <ul>
                <li>Name: {jobData.teams.name}</li>
                <li>URL: {jobData.teams.url}</li>
              </ul>
              <p>Offset: {jobData.offset}</p>
              <p>Search:</p>
              <ul>
                <li>Stream ID: {jobData.search.streamid}</li>
                <li>Query: {jobData.search.query}</li>
                <li>Fields: {Array.isArray(jobData.search.fields) ? jobData.search.fields.join(", ") : null}</li>
              </ul>
              <p>Condition:</p>
              <ul>
                <li>Threshold: {jobData.condition.threshold}</li>
                <li>Operator: {jobData.condition.operator}</li>
              </ul>
              <Link to={`/job/${jobData.id}/edit`} state={jobData}><h3>Edit</h3></Link>

            </div>

          ) : (
            <p>Loading...</p>
          )}
        </Card>
        <Card>
          {jobData ? <History records={jobData.history} /> : null}
        </Card>
        </Grid>
    </Grid>
  );
};

export default Job;

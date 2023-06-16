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
                <li>Name: {jobData.teams.Name}</li>
                <li>URL: {jobData.teams.Url}</li>
              </ul>
              <p>Offset: {jobData.offset}</p>
              <p>Search:</p>
              <ul>
                <li>Stream ID: {jobData.search.Streamid}</li>
                <li>Query: {jobData.search.Query}</li>
                <li>Fields: {Array.isArray(jobData.search.Fields) ?  jobData.search.Fields.length > 0 ? jobData.search.fields.join(", ") : "" : ""}</li>
              </ul>
              <p>Condition:</p>
              <ul>
                <li>Threshold: {jobData.condition.Threshold}</li>
                <li>Operator: {jobData.condition.Operator}</li>
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

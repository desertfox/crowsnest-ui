import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { JobDetails } from "../model/job";
import api from "../service/api";
import { Grid, Typography } from "@mui/material";

export default function Jobs() {
  const [jobList, setJobList] = useState([
    new JobDetails("1", "name", "host", "15m", 1,
      {
        "name": "name1", "url": "url1"
      },
      '00:00',
      {
        "streamid": "55555",
        "query": "error",
        "fields": ["SOURCE"],
      }, {
      "threshold": "1",
      "operator": ">",
      }, {
        "results": [
          {
            "count": 1,
            "when": '12:00',
            "alert": "false",
          }
        ]
      }
    )
  ]);


  useEffect(() => {
    const getJobs = async () => {
      const response = await api.GetJobs();

      console.log(response)

      const jobs = response.map((j, i) => {
        const newJob = new JobDetails(i);
        Object.assign(newJob, j)
        return newJob;
      });
      
      console.log(jobs)

      setJobList(jobs);
    };

    getJobs();
  }, []);


  return (
    <Grid conatiner>
      <Grid item>
        <Typography variant="h3">Job List</Typography>
      </Grid>
      <Grid item>
        <ul className="crowsnest-job-list">
          {jobList ? (
            jobList.map((job) => {
              return (
                <li key={job.name}>
                  <Link to={`/job/${job.id}`} state={job}><Typography variant="h6">{job.name}</Typography></Link>
                </li>
              );
            })
          ) : (
            <>Loading...</>
          )}
        </ul>
      </Grid>
    </Grid>
  );
}

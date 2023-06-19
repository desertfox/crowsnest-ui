import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { JobDetails } from "../model/job";
import api from "../service/api";
import { Grid, Typography } from "@mui/material";

export default function Jobs() {
  const [jobList, setJobList] = useState([
    new JobDetails("1", "name", "host", "15m", 1,
      {
        "Name": "name1", "Url": "url1"
      },
      '00:00',
      {
        "Streamid": "55555",
        "Query": "error",
        "Fields": ["SOURCE"],
      }, {
      "Threshold": "1",
      "Operator": ">",
      }, {
        "alertCount": 1,
        "results": [
          {
            "Count": 1,
            "When": Date(2023, 5, 2, 10, 0, 0),
            "Alert": false,
          },
          {
            "Count": 2,
            "When": Date(2023, 5, 2, 11, 0, 0),
            "Alert": true,
          },
          {
            "Count": 5,
            "When": Date(2023, 5, 2, 12, 0, 0),
            "Alert": true,
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
    <Grid>
      <Grid>
        <Typography variant="h3">Job List</Typography>
      </Grid>
      <Grid>
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

import React, { useState } from "react";
import { redirect } from "react-router-dom";  

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography, FormControl, FormControlLabel, MenuItem, TextField, Select, Button, Switch, Slider } from '@mui/material';

import api from "../service/api";

//import "./jobform.module.css";

const JobForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [verbose, setVerbose] = useState(false);
  const [teamsUrl, setTeamsUrl] = useState("");
  const [teamsRoomName, setTeamsRoomName] = useState("");
  const [offset, setOffset] = useState("");
  const [graylogLink, setGraylogLink] = useState("");
  const [operator, setOperator] = useState(">");
  const [ threshold, setThreshold ] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.UpdateJob({
      "name": name,
      "graylogLink": graylogLink,
      "teamsUrl": teamsUrl,
      "teamsRoomName": teamsRoomName,
      "threshold": threshold,
      "operator": operator,
      "verbose": verbose, 
      "offset": offset
    });

    console.log(response);

    redirect(`/job/${response.id}`);
  };

  return (
    <Grid container rowSpacing={1} xs={12}>
      <Grid item xs={12}>
      <Typography variant="h3">New Job</Typography>
      </Grid>
    <Grid>
      <FormControl onSubmit={handleSubmit} size="small">
        <Grid item>
        <TextField
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        </Grid>
        <Grid>
        <TextField
          label="Frequency"
          type="text"
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          size="small"
        />
        </Grid>
        <Grid>
        <FormControlLabel  control={
          <Switch 
            id="verbose"
            checked={verbose}
            onChange={(e) => setVerbose(e.target.checked)}
            size="large"
          />} 
          label="Verbose"
          labelPlacement="start"
           />
        </Grid>
        <Grid> 
        <TextField
          label="Teams URL"
          type="text"
          id="teamsUrl"
          value={teamsUrl}
          onChange={(e) => setTeamsUrl(e.target.value)}
          size="small"
        />
        </Grid> 
        <Grid>
        <TextField
          label="Teams Room Name"
          type="text"
          id="teamsRoomName"
          value={teamsRoomName}
          onChange={(e) => setTeamsRoomName(e.target.value)}
          size="small"
        />
        </Grid>
        <Grid>
        <TextField
          label="OffSet"
          type="text"
          id="offset"
          value={offset}
          onChange={(e) => setOffset(e.target.value)}
          size="small"
        />
        </Grid>
        <Grid>
        <TextField
          label="GrayLog URL"
          type="text"
          id="graylogLink"
          value={graylogLink}
          onChange={(e) => setGraylogLink(e.target.value)}
          size="small"
        />
        </Grid>
        <Grid>

        <FormControlLabel  control={
          <Select
            id="operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <MenuItem value=">">&gt;</MenuItem>
            <MenuItem value="<">&lt;</MenuItem>
          </Select>        
          } 
          label="Operator"
          labelPlacement="start" />
        </Grid>
        <Grid>
         <Slider
            id="threshold"
            value={ typeof threshold === 'number' ? threshold : 0 }
            onChange={(e) => setThreshold(e.target.value)}
          />
          <TextField
            label="Threshold"
            value={threshold}
            size="small"
            onChange={(e) => setThreshold(e.target.value)}
            onBlur={(e) => threshold < 0 ? setThreshold(0) : threshold > 10000 ? setThreshold(10000) : "" }
            TextFieldProps={{
              step: 10,
              min: -10000,
              max: 10000,
              type: 'number',
            }}
          />
        </Grid>
        <Grid xs={2}>
        <Button variant="contained" onClick={handleSubmit}>Create Job</Button>
        </Grid>
      </FormControl>
      </Grid>
    </Grid>
  );
};

export default JobForm;

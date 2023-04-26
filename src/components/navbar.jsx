import React from "react";

import { Link as RouterLink, Outlet } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack, Link, Divider } from "@mui/material";

function Navbar() {
  return (
    <Grid xs={12}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Typography variant="h3">Crowsnest</Typography>
            <Divider orientation="vertical" flexItem sx={{ borderColor: "white" }} />
            <Stack direction="row" sx={{ pt: 2 }} spacing={3}>
              <Link component={RouterLink} color="white" underline="none" to="/">Dashboard</Link>
              <Link component={RouterLink} color="white" underline="none" to="/job">Job List</Link>
              <Link component={RouterLink} color="white" underline="none" to="/job/create">New Job</Link>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Grid sx={{ mt: 2, ml: 2 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Navbar;

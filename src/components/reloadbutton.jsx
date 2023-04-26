import React, { useState}  from "react";
import Button from '@mui/material/Button';

import api from '../service/api.js'

export default function ReloadButton() {
    const [show, setShow ] = useState(1);

    const reload = () => {
        setShow(0);

        api.ReloadJobs();
    }

    return show ? (
        <Button variant="contained" onClick={reload} >Reload Jobs</Button>
    ) : null;
};
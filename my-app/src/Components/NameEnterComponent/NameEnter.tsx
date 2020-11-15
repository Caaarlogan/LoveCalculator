import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './NameEnter.css';

function NameEnter() {
    return (
        <div className="NameEnterContainer">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="user-name"
                        label="Enter Your Name"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="crush-name"
                        label="Enter Your Crush's Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        id="calculate-button"
                        variant="contained"
                        color="secondary"
                    >
                        Calculate Love
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default NameEnter;

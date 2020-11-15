import React from 'react';
import { Grid } from '@material-ui/core';
import logo from "../../Assets/LoveMatcherLogo.png"

function Header() {
  return (
    <div className="header">
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <img
                    alt="loveCalculatorLogo"
                    src={logo}
                    style={{height:"150px"}}
                ></img>
            </Grid>
        </Grid>
    </div>
  );
}

export default Header;

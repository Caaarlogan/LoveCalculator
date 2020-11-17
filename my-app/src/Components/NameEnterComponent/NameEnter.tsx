import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import './NameEnter.css';
import { IUserInput } from '../../Common/Interfaces';

interface INameEnterProps{
    SetUserInput: (a: IUserInput) => void;
}

function NameEnter(props: INameEnterProps) {
    const [UserName, setUserName] = useState<string | null>("");

    const handleUserNameChange = (s: string | null) =>{
        setUserName(s);          
    }

    const [HasUserFocus, setHasUserFocus] = useState<boolean>(false);

    const [CrushName, setCrushName] = useState<string | null>("");

    const handleCrushNameChange = (s: string | null) =>{
        setCrushName(s);          
    }
    
    const [HasCrushFocus, setHasCrushFocus] = useState<boolean>(false);

    //Message to display after pressing button
    const [Message, setMessage] = useState<string | null>("");

    const handleCalculate = () => {
        if (UserName?.length === 0 || UserName === null || UserName === "") {
            setHasUserFocus(true);
            setMessage("Please enter your name");
        }
        else if (CrushName?.length === 0 || CrushName === null || CrushName === ""){
            setHasCrushFocus(true);
            setMessage("Please enter your crush's name");
        }
        else {
            let UserInput: IUserInput = {
                UserName: UserName,
                CrushName: CrushName
            }
            props.SetUserInput(UserInput);
            setMessage("5 people named " + CrushName + " has a crush on someone named " + UserName);
        }
    }

    return (
        <div className="NameEnterContainer">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="user-name"
                        label="Enter Your Name"
                        variant="outlined"
                        error={HasUserFocus && UserName === ""}
                        onClick={() => setHasUserFocus(true)}
                        value={UserName}
                        onChange={e => handleUserNameChange(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="crush-name"
                        label="Enter Your Crush's Name"
                        variant="outlined"
                        error={HasCrushFocus && CrushName === ""}
                        onClick={() => setHasCrushFocus(true)}
                        value={CrushName}
                        onChange={e => handleCrushNameChange(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={handleCalculate}>
                        Calculate Love
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{Message}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default NameEnter;

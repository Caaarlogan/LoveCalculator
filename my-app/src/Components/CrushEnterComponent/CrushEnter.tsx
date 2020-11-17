import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import './CrushEnter.css';
import { IUserInput } from '../../Common/Interfaces';
import { getCrushNameInstances, getCrushNameInstancesProps, getCrushInstances, getCrushOnUserInstances, modifyData, ModifyProps} from '../../Api/Api'

interface INameEnterProps{
    SetUserInput: (a: IUserInput) => void;
}

function CrushEnter(props: INameEnterProps) {
    
    //Your name
    const [UserName, setUserName] = useState<string | null>("");
    const handleUserNameChange = (s: string | null) =>{
        setUserName(s);          
    }
    const [HasUserFocus, setHasUserFocus] = useState<boolean>(false);

    //The name of your crush
    const [CrushName, setCrushName] = useState<string | null>("");
    const handleCrushNameChange = (s: string | null) =>{
        setCrushName(s);          
    }
    const [HasCrushFocus, setHasCrushFocus] = useState<boolean>(false);

    //Message to display after pressing button
    const [Message, setMessage] = useState<string | null>("");

    //Function called when button is pressed
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

            const CrushInput: getCrushNameInstancesProps = {
                crush_Name: CrushName
            }

            const UserNameInput: getCrushNameInstancesProps = {
                crush_Name: UserName
            }

            const ModifyInput: ModifyProps = {
                user_Name: UserName,
                crush_Name: CrushName
            }

            props.SetUserInput(UserInput);

            const updateValues = async () => {
                await modifyData(ModifyInput);

                const CrushNameInstances = await getCrushNameInstances(CrushInput);
                const CrushInstances = await getCrushInstances(ModifyInput);
                const CrushOnUserInstances = await getCrushOnUserInstances(UserNameInput);
    
                setMessage("Out of " + CrushNameInstances + " " + CrushName + "s, " + CrushInstances + " of them have a crush on someone named " + UserName + ". " +
                            CrushOnUserInstances + " people have a crush on someone named " + UserName);
            }

            updateValues();
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

export default CrushEnter;

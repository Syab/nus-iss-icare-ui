import React, {useState,useEffect} from 'react';
import claimStyles from '../../styles/pageViewStyles/ClaimSubmitViewStyles.module.css'
import { useForm } from "react-hook-form";
import {
    Grid, TextField, Divider,
    FormControl, InputLabel, OutlinedInput, InputAdornment, Button
}
from "@material-ui/core";
import DropdownSelect from "../Common/DropdownSelect";
import ClaimDropZone from "./ClaimDropZone";

function ClaimSubmitForm(props){

    const { policytypes, policyprovider, policynames, policynumbers, ...rest } = props;
    const [values, setValues] = React.useState({
        amount: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <div>
            <Grid container spacing={2} columns={12}>
                {/*<form>*/}
                    <Grid item xs={12} className={claimStyles.gridItem}>
                        <DropdownSelect
                            label="Policy Provider"
                            optionList={policyprovider}
                        />
                    </Grid>
                    <Grid item xs={6} className={claimStyles.gridItem}>
                        <DropdownSelect
                            label="Policy Type"
                            optionList={policytypes}
                        />
                    </Grid>
                    <Grid item xs={6} className={claimStyles.gridItem}>
                        <DropdownSelect
                            label="Policy Number"
                            optionList={policynumbers}
                        />
                    </Grid>
                    <Grid item xs={6} className={claimStyles.gridItem}>
                        <DropdownSelect
                            label="Policy Name"
                            optionList={policynames}
                        />
                    </Grid>
                    <Grid item xs={6} className={claimStyles.gridItem}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>

                    {/*<div className={claimStyles.uploadSection}>*/}
                    {/*    <Grid item xs={12} className={claimStyles.gridItem}>*/}
                    {/*        <ClaimDropZone/>*/}
                    {/*    </Grid>*/}
                    {/*</div>*/}
                {/*</form>*/}
            </Grid>
        </div>
        )

}

export default ClaimSubmitForm
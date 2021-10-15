import React from 'react';
import claimStyles from '../../styles/pageViewStyles/ClaimSubmitViewStyles.module.css'
import { Grid, TextField, Divider,
    FormControl, InputLabel, OutlinedInput, InputAdornment }
    from "@material-ui/core";
import DropdownSelect from "../Common/DropdownSelect";
import ClaimDropZone from "./ClaimDropZone";

function ClaimSubmitForm(props){

    const { policytypes, policyprovider, policynames } = props;

    const [values, setValues] = React.useState({
        amount: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <div>
            <Grid container spacing={2} columns={12}>
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
                    <TextField fullWidth label="Policy No." variant="outlined" />
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

                <div className={claimStyles.uploadSection}>
                    <Grid item xs={12} className={claimStyles.gridItem}>
                        <ClaimDropZone/>
                    </Grid>
                </div>
            </Grid>
        </div>
        )

}

export default ClaimSubmitForm
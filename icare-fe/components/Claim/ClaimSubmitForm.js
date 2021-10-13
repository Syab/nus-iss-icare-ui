import React from 'react';
import claimStyles from '../../styles/pageViewStyles/ClaimSubmitViewStyles.module.css'
import { Grid, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment }
    from "@material-ui/core";
import ClaimSubmitSelect from "./ClaimSubmitSelect";

const ClaimSubmitForm = ({props, children}) => {

    const [values, setValues] = React.useState({
        amount: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <div>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={6} className={claimStyles.gridItem}>
                    <ClaimSubmitSelect/>
                </Grid>
                <Grid item xs={6} className={claimStyles.gridItem}>
                    <TextField fullWidth label="Policy No." variant="outlined" />
                </Grid>
                <Grid item xs={6} className={claimStyles.gridItem}>
                    <ClaimSubmitSelect/>
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
                <Grid item xs={12} className={claimStyles.gridItem}>
                    Upload file
                </Grid>
            </Grid>
        </div>
        )

}

export default ClaimSubmitForm
import React, { useState, useEffect} from 'react';
import axios from "axios";
import { claim_SVC, claimsubmit_ENDPOINT } from "../../utils/constants";
import {SERVER} from "../../config";
import styles from '../../styles/Page.module.css'
import useStyles from "../../utils/mstyles";
import { useForm } from "react-hook-form";
import {
    Snackbar,
    TextField,
    FormControl,
    Button, List, ListItem, MenuItem
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SubmitForm = (props) => {

    const { policytypes, policyproviders, policynames, policynumbers, policyids, ...rest } = props;
    const submitAPI = `${SERVER}/api/${claim_SVC}${claimsubmit_ENDPOINT}`;
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [values, setValues] = useState({
        policyprovider : '',
        policytype: '',
        policyname: '',
        policynumber: '',
        policyid: '',
        amount: 0
    })
    const classes = useStyles();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleResetState = () => {
        // setOpen(false)
        setValues({
            policyprovider : '',
            policytype: '',
            policyname: '',
            policynumber: '',
            policyid: '',
            amount: 0
        })
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmitClaim = async (e) => {
        e.preventDefault();
        // console.log(values);
        const response = await fetch(`/api/${claim_SVC}${claimsubmit_ENDPOINT}`,
            {
                method: 'POST',
                body: JSON.stringify({values}),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

        const data = await response.json()
        // console.log(data)
        if (data.code === 200){
            setOpen(true)
            setSeverity('success')
            setMessage('Your claim has been successfully submited!')
            handleResetState();
        } else {
            setOpen(true);
            setSeverity('error');
            setMessage('Something went wrong please try again!')
            handleResetState();
        }
    }

    useEffect(()=>{
       handleResetState()
    },[])

    return(
        <div>
            {/*<Button variant="outlined" onClick={handleClick}>*/}
            {/*    Open success snackbar*/}
            {/*</Button>*/}
            <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <form>
                <FormControl fullWidth>
                    <List>
                        <ListItem>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                id="policyprovider"
                                label="Policy Provider"
                                value={values.policyprovider}
                                onChange={handleChange('policyprovider')}
                            >
                                {policyproviders.map((option)=> (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                        <ListItem>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                id="policyid"
                                label="Policy ID"
                                value={values.policyid}
                                onChange={handleChange('policyid')}
                            >
                                {policyids.map((option)=> (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                        <ListItem>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                id="policynumber"
                                label="Policy Number"
                                value={values.policynumber}
                                onChange={handleChange('policynumber')}
                            >
                                {policynumbers.map((option)=> (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                        <ListItem>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                id="policyname"
                                label="Policy Name"
                                value={values.policyname}
                                onChange={handleChange('policyname')}
                            >
                                {policynames.map((option)=> (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                        <ListItem>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                id="policytype"
                                label="Policy Type"
                                value={values.policytype}
                                onChange={handleChange('policytype')}
                            >
                                {policytypes.map((option)=> (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                        <ListItem>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="amount"
                                label="Amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                            />
                        </ListItem>
                        <ListItem>
                            <Button
                                variant="contained" color="secondary"
                                onClick={handleResetState}
                                fullWidth
                            >
                                CLEAR
                            </Button>
                            <Button
                                variant="contained" color="primary"
                                onClick={handleSubmitClaim}
                                className={classes.submitButton}
                                fullWidth
                            >
                                SUBMIT CLAIM
                            </Button>
                        </ListItem>
                    </List>
                </FormControl>
            </form>
        </div>
    )
}
export default SubmitForm;
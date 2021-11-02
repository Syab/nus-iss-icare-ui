import React, { useState, useEffect} from 'react';
import axios from "axios";
import { claim_SVC, claimsubmit_ENDPOINT } from "../../utils/constants";
import {SERVER} from "../../config";
import styles from '../../styles/Page.module.css'
import useStyles from "../../utils/mstyles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Snackbar,
    TextField,
    FormControl,
    Button, List, ListItem, MenuItem, Typography
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SubmitForm = (props) => {

    const validationSchema = Yup.object()
                                .shape({
                                    amount : Yup.number()
                                        .required('Minimum amount should be more than 0')
                                        .min(10,'Minimum amount is $10')
                                        .max(10000, 'Maximum amount is $10000'),
                                    policyprovider : Yup.string()
                                        .required('This field is required.')
                                        .matches(/^A-Za-z0-9/,'Should only contain alphabets and numbers'),
                                    policyid : Yup.string()
                                        .required('This field is required.')
                                        .matches(/^A-Za-z0-9/,'Should only contain alphabets and numbers')
                                })

    const { policytypes, policyproviders, policynames, policynumbers, policyids, ...rest } = props;
    const submitAPI = `${SERVER}/api/${claim_SVC}${claimsubmit_ENDPOINT}`;
    const {
        control, register, handleSubmit, reset, formState: {errors}
        } = useForm({resolver: yupResolver(validationSchema)});
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('warning')
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
        console.log(values);
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
            reset();
        } else {
            setOpen(true);
            setSeverity('error');
            setMessage('Something went wrong please try again!')
            handleResetState();
            reset();
        }
    }

    const onSubmit = data => console.log(data);

    useEffect(()=>{
       handleResetState()
    },[])

    return(
        <div>
            <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmitClaim}>
                <FormControl fullWidth>
                    <List>
                        <ListItem>
                            <TextField
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                onClick={() => {
                                    handleResetState()
                                    reset()
                                }}
                                fullWidth
                            >
                                CLEAR
                            </Button>
                            <Button
                                type="submit"
                                variant="contained" color="primary"
                                onClick={handleSubmitClaim}
                                className={classes.submitButton}
                                fullWidth
                            >
                                SUBMIT CLAIM
                            </Button>
                            <Button
                                type="submit"
                                variant="contained" color="primary"
                                className={classes.submitButton}
                                fullWidth
                            >
                                TEST VALIDATION
                            </Button>
                        </ListItem>
                    </List>
                </FormControl>
            </form>
        </div>
    )
}
export default SubmitForm;
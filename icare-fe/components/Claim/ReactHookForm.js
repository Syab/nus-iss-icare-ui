import React, { useState, useEffect} from 'react';
import axios from "axios";
import { claim_SVC, claimsubmit_ENDPOINT, onlyDigits, onlyAlpha, onlyAlphaNumeric
} from "../../utils/constants";
import styles from '../../styles/Page.module.css'
import useStyles from "../../utils/mstyles";
import {useForm, Form} from "./useForm";
import Controls from "../Common/Controls";
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

const initialFValues = {
    policyprovider : '',
    policytype: '',
    policyname: '',
    policynumber: '',
    policyid: '',
    amount: 0
}


const ReactHookForm = (props) => {

    const { policytypes, policyproviders, policynames, policynumbers, policyids, ...rest } = props;

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('');
    const classes = useStyles();

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('amount' in fieldValues) {
            temp.amount = onlyDigits.test(fieldValues.amount) ? "" : "This field only accepts digits with 2 decimal places."
        }
        if ('policyprovider' in fieldValues) {
            temp.policyprovider = fieldValues.policyprovider ? "" : "This field is required."
            temp.policyprovider = onlyAlpha.test(fieldValues.policyprovider) ? "" : "This field only allows alphabets."
        }
        if ('policytype' in fieldValues) {
            temp.policytype = fieldValues.policytype ? "" : "This field is required."
            temp.policytype = onlyAlpha.test(fieldValues.policytype) ? "" : "This field only allows alphabets."
        }
        if ('policyname' in fieldValues) {
            // temp.policyname = fieldValues.policyname ? "" : "This field is required."
            temp.policyname = onlyAlpha.test(fieldValues.policyname) ? "" : "This field only allows alphabets, numbers, space and the following special characters '_ + - . ,' "
        }
        if ('policynumber' in fieldValues) {
            temp.policynumber = (fieldValues.policynumber && onlyAlpha.test(fieldValues.policynumber)) ? "" : "This field is required and only allows alphabets and numbers.."
        }
        if ('policyid' in fieldValues) {
            temp.policyid = (fieldValues.policyid && onlyAlpha.test(fieldValues.policyid)) ? "" : "This field is required and only allows alphabets, numbers, space and '_'."
        }

        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('clicked submit')
        if (validate()){
            console.log(values)
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
                resetForm();
            } else {
                setOpen(true);
                setSeverity('error');
                setMessage('Oops! Something went wrong behind the scenes! Please try again in an hour.')
                resetForm();
            }
        } else {
            setOpen(true);
            setSeverity('warning');
            setMessage('Looks like there are unacceptable or missing values in your form.')
            // resetForm()
        }
    }

    useEffect(()=>{
        resetForm()
    },[])

    return(
        <div>
            <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <Form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <List>
                        <ListItem>
                            <Controls.Select
                                name="policyprovider"
                                label="Policy Provider"
                                value={values.policyprovider}
                                onChange={handleInputChange}
                                options={policyproviders}
                                error={errors.policyprovider}
                            />
                        </ListItem>
                        <ListItem>
                            <Controls.Select
                                name="policyid"
                                label="Policy ID"
                                value={values.policyid}
                                onChange={handleInputChange}
                                options={policyids}
                                error={errors.policyid}
                            />
                        </ListItem>
                        <ListItem>
                            <Controls.Select
                                name="policyname"
                                label="Policy Name"
                                value={values.policyname}
                                onChange={handleInputChange}
                                options={policynames}
                                error={errors.policyname}
                            />
                        </ListItem>
                        <ListItem>
                            <Controls.Select
                                name="policynumber"
                                label="Policy Number"
                                value={values.policynumber}
                                onChange={handleInputChange}
                                options={policynumbers}
                                error={errors.policynumber}
                            />
                        </ListItem>
                        <ListItem>
                            <Controls.Select
                                name="policytype"
                                label="Policy Type"
                                value={values.policytype}
                                onChange={handleInputChange}
                                options={policytypes}
                                error={errors.policytype}
                            />
                        </ListItem>
                        <ListItem>
                            <Controls.Input
                                name="amount"
                                label="Amount"
                                value={values.amount}
                                onChange={handleInputChange}
                                error={errors.amount}
                            />
                        </ListItem>
                        <ListItem>
                            <Button
                                variant="contained" color="secondary"
                                onClick={() => {
                                    resetForm()
                                }}
                                fullWidth
                            >
                                CLEAR
                            </Button>
                            <Button
                                type="submit"
                                variant="contained" color="primary"
                                className={classes.submitButton}
                                fullWidth
                            >
                                SUBMIT CLAIM
                            </Button>
                        </ListItem>
                    </List>
                </FormControl>
            </Form>
        </div>
    )
}
export default ReactHookForm ;
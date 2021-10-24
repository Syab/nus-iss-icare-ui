import React, {useEffect, useState} from 'react';
import axios from "axios";
import { SERVER } from "../../config";
import {getUnique, todayYYYYMMDD} from "../../utils/handlers";
import styles from '../../styles/Page.module.css'
import useStyles from "../../utils/mstyles";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography} from "@material-ui/core";
import ClaimSubmitForm from "../../components/Claim/ClaimSubmitForm";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import AlertNotAvailable from "../../components/Common/AlertNotAvailable";

function ClaimSubmitView({children, props}) {
    const classes = useStyles();

    let policyprovider = []
    let policytypes = []
    let policynames = []
    let policynumbers = []

    const API = `${SERVER}/api/policy/viewpolicy`;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    const fetchFieldsData = async() => {
        await axios.get( API,
            {
                headers:{
                    contentType: "application/json"
                }
            })
            .then((result)=>{
                if (result.status === 200){
                    setIsLoading(false)
                    setData(result.data)
                } else {
                    setIsLoading(false);
                }
            })
            .catch((err) =>{
                setIsLoading(false);
                console.log(err.response.data)
                setData(err.response.data)
            })
    }

    useEffect(()=>{
        fetchFieldsData()
    }, [])

    const policies = data

    policies.forEach((obj, i) =>{
        policyprovider.push(obj.policycompany);
        policytypes.push(obj.policytype);
        policynames.push(obj.policyname);
        policynumbers.push(obj.policyno);
    })

    policyprovider = policyprovider.filter(getUnique);
    policytypes = policytypes.filter(getUnique);
    policynames = policynames.filter(getUnique);
    policynumbers = policynumbers.filter(getUnique);

    const content = ((policies) ?
        <div>
            <Paper className={classes.paper}>
                <Typography variant='h5' className={classes.subtitle}>
                    Claim Submission Details
                </Typography>
                <ClaimSubmitForm
                    policyprovider={policyprovider}
                    policytypes={policytypes}
                    policynames={policynames}
                    policynumbers={policynumbers}
                />
            </Paper>
        </div> : <AlertNotAvailable/>
    )


    return (
        <div>
            <CustomHeader
                title="Submit a Claim"
                subtitle="Complete the form below and upload your invoice or receipts to process your claims"
            />
            {content}
        </div>
    )
}

export default ClaimSubmitView;
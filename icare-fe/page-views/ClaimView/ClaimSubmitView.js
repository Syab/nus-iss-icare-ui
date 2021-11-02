import React, {useEffect, useState} from 'react';
import axios from "axios";
import { SERVER } from "../../config";
import {getUnique, todayYYYYMMDD} from "../../utils/handlers";
import useStyles from "../../utils/mstyles";
import { Paper, Grid, Typography} from "@material-ui/core";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import AlertNotAvailable from "../../components/Common/AlertNotAvailable";
import SubmitForm from "../../components/Claim/SubmitForm";
import ReactHookForm from "../../components/Claim/ReactHookForm";

function ClaimSubmitView({children, props}) {
    const classes = useStyles();

    let policyproviders = []
    let policytypes = []
    let policynames = []
    let policynumbers = []
    let policyids = []

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
                // console.log(err.response.data)
                setData(err.response.data)
            })
    }

    useEffect(()=>{
        fetchFieldsData()
    }, [])

    const policies = data

    policies.forEach((obj, i) =>{
        policyproviders.push(obj.policycompany);
        policytypes.push(obj.policytype);
        policynames.push(obj.policyname);
        policynumbers.push(obj.policyno);
        policyids.push(obj.policyid)
    })

    policyproviders = policyproviders.filter(getUnique);
    policytypes = policytypes.filter(getUnique);
    policynames = policynames.filter(getUnique);
    policynumbers = policynumbers.filter(getUnique);
    policyids = policyids.filter(getUnique);

    const content = ((policies) ?
        <div>
            <Paper className={classes.paper}>
                <Typography variant='h5' className={classes.subtitle}>
                    Claim Submission Details
                </Typography>
                <ReactHookForm
                    policyproviders={policyproviders}
                    policytypes={policytypes}
                    policynames={policynames}
                    policynumbers={policynumbers}
                    policyids={policyids}
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
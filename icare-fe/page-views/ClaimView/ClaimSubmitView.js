import React, {useEffect, useState} from 'react';
import axios from "axios";
import { SERVER } from "../../config";
import { getUnique } from "../../utils/handlers";
import styles from '../../styles/Page.module.css'
import claimViewStyles from '../../styles/pageViewStyles/ClaimSubmitViewStyles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography} from "@material-ui/core";
import ClaimSubmitForm from "../../components/Claim/ClaimSubmitForm";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    subtitle: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
}));

function ClaimSubmitView({children, props}) {
    const classes = useStyles();

    let policyprovider = []
    let policytypes = []
    let policynames = []

    const API = `${SERVER}/api/private`;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    const fetchData = async() => {
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
                console.log("some error")
            })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const policies = data

    policies.forEach((obj, i) =>{
        policyprovider.push(obj.policycompany);
        policytypes.push(obj.policytype);
        policynames.push(obj.policyname);
    })

    policyprovider = policyprovider.filter(getUnique);
    policytypes = policytypes.filter(getUnique);
    policynames = policynames.filter(getUnique);

    return (
        <div>
            <main className={styles.main}>
                <h2 className={claimViewStyles.title}>
                    Submit a Claim
                </h2>
                <Typography variant='body1' className={claimViewStyles.description}>
                    Complete the form below and upload your invoice or receipts to process your claims
                </Typography>
                <Paper className={classes.paper}>
                    <Typography variant='h5' className={classes.subtitle}>
                        Claim Submission Details
                    </Typography>
                    <ClaimSubmitForm
                        policyprovider={policyprovider}
                        policytypes={policytypes}
                        policynames={policynames}
                    />
                </Paper>
            </main>
        </div>
    )
}

export default ClaimSubmitView;
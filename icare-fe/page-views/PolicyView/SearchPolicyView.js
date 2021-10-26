import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from "axios";
import {SERVER} from "../../config";
import {policy_SVC, search_ENDPOINT} from "../../utils/constants";
import styles from '../../styles/Page.module.css';
import useStyles from "../../utils/mstyles";
import searchPolicyStyles from '../../styles/pageViewStyles/SerchPolicyViewStyles.module.css';
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import {
    Chip, Card, CardActionArea, CardContent,
    CardMedia, Grid, Typography
}
    from "@material-ui/core";
import AlertNotAvailable from "../../components/Common/AlertNotAvailable";


export default function SearchPolicyView({props}) {

    const classes = useStyles();
    const API = `${SERVER}/api/${policy_SVC}${search_ENDPOINT}`;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0)

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
                    setStatus(result.status)
                    setData(result.data)
                } else {
                    setIsLoading(false);
                }
            })
            .catch((err) =>{
                setData(err.response.data)
            })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    // const policies = data
    const content = ((data) ?
        <div>
        <CustomHeader
            title="Policy Marketplace"
            subtitle="Start searching for a policy for you and your loved ones"
            description="Click each policy to find out more"
        />
        <Grid container spacing={3} className={classes.gridContainer}>
            {data.map((policy)=>(
                <Grid item md={4} key={policy.policy_id}>
                    <Card className={classes.card}>
                        <CardMedia>
                            <Image
                                // className={searchPolicyStyles.cover}
                                src={policy.policy_company_logo}
                                height={60}
                                width={60}
                            />
                        </CardMedia>
                        <div
                            className={searchPolicyStyles.details}
                        >
                            <CardContent
                                // classes={{root: classes.cardRoot}}
                            >
                                <CardActionArea>
                                    <a target="_blank" href={policy.policy_link} rel="noopener noreferrer">
                                        <Typography variant="h6" color="textSecondary">
                                            {policy.policy_company}
                                        </Typography>
                                        <Typography variant='h5'>
                                            {policy.policy_name}
                                        </Typography>
                                        <p className={searchPolicyStyles.para}>
                                            <Chip variant="outlined" size="small" label={policy.policy_type}/> &nbsp;&nbsp; {policy.policy_description}
                                        </p>
                                    </a>
                                </CardActionArea>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </div> : <main className={styles.main}>
                    <AlertNotAvailable/>
                 </main>)
    return (
        <div>
            {content}
        </div>
    )
}
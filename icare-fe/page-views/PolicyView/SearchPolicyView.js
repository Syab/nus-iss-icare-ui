import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from "axios";
import {SERVER} from "../../config";
import styles from '../../styles/Page.module.css';
import searchPolicyStyles from '../../styles/pageViewStyles/SerchPolicyViewStyles.module.css'
import {Chip, Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles}
    from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        padding: '0',
        paddingLeft: 16,
    }
});

export default function SearchPolicyView({props}) {

    const classes = useStyles();
    const API = `${SERVER}/api/public`;
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

    return (
        <div>
            <main className={styles.main}>
                <h2 className={searchPolicyStyles.title}>
                    Policy Marketplace
                </h2>
                <Typography variant='body1' className={searchPolicyStyles.description}>
                    Start searching for a policy for you and your loved ones
                </Typography>

                {policies.map((policy)=>(
                    <Card className={searchPolicyStyles.card}>
                        <CardMedia>
                            <Image
                                className={searchPolicyStyles.cover}
                                src={policy.policy_company_logo}
                                height={60}
                                width={60}
                            />
                        </CardMedia>
                        <div className={searchPolicyStyles.details}>
                            <CardContent classes={{root: classes.root}}>
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
                ))}
            </main>
        </div>
    )
}
import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {SERVER} from "../../config";
import {policy_SVC, viewpolicy_ENDPOINT} from "../../utils/constants";
import {sortObject, todayYYYYMMDD} from "../../utils/handlers";
import styles from '../../styles/Page.module.css';
import viewPolicyStyles from '../../styles/pageViewStyles/ViewPolicyViewStyles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Chip, Typography,
    List, ListItem, ListItemText }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PolicyTable from "../../components/Policy/PolicyTable";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        marginTop: '30px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    chipOk: {
      backgroundColor: '#99FAE2'
    },
    chipNOk: {
        backgroundColor: '#ED9397'
    },
}));

export default function ViewPolicyView() {

    const classes = useStyles();
    const API = `${SERVER}/api/${policy_SVC}${viewpolicy_ENDPOINT}`;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [secondary, setSecondary] = React.useState(false);
    const today = todayYYYYMMDD('-')

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

    const mypolicies = data

    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    My Policies
                </h2>
                <Typography variant='body1' className={viewPolicyStyles.description}>
                    Here's your policy summaries for <strong>{today}</strong>
                </Typography>
                <div className={classes.root}>
                    {mypolicies.map((mypolicy) =>(
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h6" className={classes.heading}>{mypolicy.policyname}</Typography>
                                &emsp;
                                {(mypolicy.status !== 'expired')
                                    ? <Chip className={classes.chipOk} size="small" label={mypolicy.status.toUpperCase()}/>
                                    : <Chip className={classes.chipNOk} size="small" label={mypolicy.status.toUpperCase()}/> }
                            </AccordionSummary>
                            <AccordionDetails>
                                <PolicyTable
                                    data={sortObject(mypolicy)}
                                />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </main>
        </div>
    )
}

import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {SERVER} from "../../config";
import {todayYYYYMMDD} from "../../utils/handlers";
import styles from '../../styles/Page.module.css';
import viewPolicyStyles from '../../styles/pageViewStyles/ViewPolicyViewStyles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography,
    List, ListItem, ListItemText, Chip }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        marginTop: '30px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ViewPolicyView() {

    const classes = useStyles();
    const API = `${SERVER}/api/private`;
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
                                <Typography className={classes.heading}>{mypolicy.policyname}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Hello</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </main>
        </div>
    )
}

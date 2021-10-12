import React from 'react';
import styles from '../../styles/Page.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import ClaimSubmitForm from "../../components/Claim/ClaimSubmitForm";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ClaimSubmitView({children, props}) {
    return (
        <div>
            <main className={styles.main}>
                <Typography variant='h3' className={styles.title}>
                    Submit a Claim
                </Typography>
            </main>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Item>
                        <Typography variant='h5'>
                            Claim Submission Details
                        </Typography>
                        <ClaimSubmitForm/>
                    </Item>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    )
}

export default ClaimSubmitView;
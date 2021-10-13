import React from 'react';
import styles from '../../styles/Page.module.css'
// import claimViewStyles from '../../styles/pageViewStyles/ClaimSubmitViewStyles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography} from "@material-ui/core";
import ClaimSubmitForm from "../../components/Claim/ClaimSubmitForm";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
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
                    <Paper className={classes.paper}>
                        <Typography variant='h5' className={classes.subtitle}>
                            Claim Submission Details
                        </Typography>
                        <ClaimSubmitForm/>
                    </Paper>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    )
}

export default ClaimSubmitView;
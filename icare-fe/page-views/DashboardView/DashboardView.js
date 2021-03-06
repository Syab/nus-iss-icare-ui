import React from 'react';
import Link from 'next/link';
import useStyles from "../../utils/mstyles";
import {
    Box, Card, CardActionArea, CardContent,
    Grid, Typography, Paper, List, ListItem
} from '@material-ui/core'
import styles from "../../styles/Page.module.css";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import {todayYYYYMMDD} from "../../utils/handlers";
import ClaimListTable from "../../components/Claim/ClaimListTable";
import PolicyListTable from "../../components/Policy/PolicyListTable";

// import ClaimHistoryTable from "../../components/Claim/ClaimHistoryTable";

function DashboardView() {

    const username = "TAN HENG HUAT"
    const styles = useStyles()
    return (
        <div>
            <CustomHeader
                title="Dashboard"
                subtitle={"Welcome " + username}
                description={"Here's a summary for today : " + todayYYYYMMDD('-')}
            />
            <div style={{marginTop: '2em' }}>
                <Grid container spacing={2} className={styles.gridContainer}>
                    <Grid item md={6}>
                        <ClaimListTable/>
                    </Grid>
                    <Grid item md={6}>
                        <PolicyListTable/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default DashboardView;
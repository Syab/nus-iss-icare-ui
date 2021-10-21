import React from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import DashboardTable from "../../components/DataTable/DashboardTable";
import styles from "../../styles/Page.module.css";
import ClaimHistoryTable from "../../components/Claim/ClaimHistoryTable";

function DashboardView() {
    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome back Sarah!
                </h1>
                <p>Pick an option for today!</p>

                <div className={styles.grid}>
                    {/*<Paper className={styles.paper}>*/}
                    {/*    <DashboardTable/>*/}
                    {/*</Paper>*/}
                    {/*<Card className={styles.card}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardContent>*/}
                    {/*            <Link href="/claimManagement/claimSubmit"><h2>Submit a Claim &rarr;</h2></Link>*/}
                    {/*            <p>Get your claims approved!</p>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*</Card>*/}

                    {/*<Card className={styles.card}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardContent>*/}
                    {/*            <Link href={'/policyManagement'}><h2>View My Policies &rarr;</h2></Link>*/}
                    {/*            <p>View all existing policies</p>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*</Card>*/}

                    {/*<Card className={styles.card}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardContent>*/}
                    {/*            <Link href={'/policyManagement'}><h2>Purchase a Policy &rarr;</h2></Link>*/}
                    {/*            <p>Find a policy</p>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*</Card>*/}

                    {/*<Card className={styles.card}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardContent>*/}
                    {/*            <Link href={'/'}><h2>Consult &rarr;</h2></Link>*/}
                    {/*            <p>Consult an expert</p>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*</Card>*/}
                </div>
            </main>
        </div>
    )
}

export default DashboardView;
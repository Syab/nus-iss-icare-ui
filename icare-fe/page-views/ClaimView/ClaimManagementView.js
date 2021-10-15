import React from 'react';
import styles from '../../styles/Page.module.css'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";

function ClaimManagementView() {
    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    Claim Management
                </h2>

                <Card className={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Link href="/claimManagement/claimSubmit"><h2>Submit a Claim &rarr;</h2></Link>
                            <p>Get your claims approved!</p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Link href={'/claimManagement/claimHistory'}><h2>View Claim History &rarr;</h2></Link>
                            <p>Find a policy</p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Link href={'/'}><h2>Consult &rarr;</h2></Link>
                            <p>Consult an expert</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </main>
        </div>
    )
}

export default ClaimManagementView;
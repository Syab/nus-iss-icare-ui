import React from 'react';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import styles from "../styles/Page.module.css";

function DashboardPage() {
    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome back Sarah!
                </h1>
                <p>Pick an option for today!</p>

                <div className={styles.grid}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent>
                                <Link href="/claimManagement"><h2>Submit a Claim &rarr;</h2></Link>
                                <p>Get your claims approved!</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent>
                                <Link href={'/policyManagement'}><h2>View My Policies &rarr;</h2></Link>
                                <p>View all existing policies</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent>
                                <Link href={'/policyManagement'}><h2>Purchase a Policy &rarr;</h2></Link>
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
                </div>
            </main>
        </div>
    )
}

export default DashboardPage;
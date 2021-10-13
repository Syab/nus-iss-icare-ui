import React from 'react';
// import Typography from "@material-ui/core/Typography";
import styles from '../../styles/Page.module.css'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";

function PolicyManagementView() {
    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    Policy Management
                </h2>

                <Card className={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Link href="/policyManagement/viewPolicy"><h2>View my policies &rarr;</h2></Link>
                            <p>View all my policies</p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Link href={'/policyManagement/searchPolicy'}><h2>Search all policies &rarr;</h2></Link>
                            <p>View all existing policies</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </main>
        </div>
    )
}

export default PolicyManagementView;
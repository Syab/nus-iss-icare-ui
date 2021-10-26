import React, { Fragment, Component } from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import styles from "../styles/Page.module.css"
import Alert from "@material-ui/lab/Alert";
import {Button, Typography, List, ListItem,} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";


const UnauthorizedPage = props => {
    const router = useRouter()

    const handleReturn = () => {
        router.push("/login")
    }

    const content = (
        <div className={styles.main}>
            <List>
                <ListItem>
                    <Alert severity="warning">
                        <Typography>
                            Oops! Looks like you&apos;re not logged in or dont have access to this page.
                        </Typography>
                        <Typography>
                            Hit the button below to log back in or get an administrator to grant you access.
                        </Typography>
                    </Alert>
                </ListItem>
                <ListItem>
                    <Button
                        fullWidth
                        onClick={handleReturn}
                        endIcon={<LockIcon/>}
                    >
                        Return to Login Page
                    </Button>
                </ListItem>
            </List>
        </div>
        )

    return(
        <Fragment>
            <Head>
                <title>iCare Platform</title>
            </Head>
            <LoginLayout
                content={content}
            />
        </Fragment>
        )


}

export default UnauthorizedPage;
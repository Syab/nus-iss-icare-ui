import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link"
import styles from '../styles/Page.module.css'
import {Button} from "@mui/material";

function Login() {
    return (
        <Fragment>
            <Head>
                <title>iCare Platform Login</title>
            </Head>
            <main className={styles.main}>
                <h1>Login Page</h1>
                <Button>
                    <Link href='/dashboard'>LOGIN AS USER</Link>
                </Button>
                <Button>
                    <Link href='/dashboard'>LOGIN AS PROVIDER</Link>
                </Button>
            </main>
        </Fragment>
    )
}

export default Login;
import React, {Fragment, useEffect, useState} from "react";
import styles from '../styles/Page.module.css'
// import axios from "axios";
import Image from "next/image";
import { withRouter, useRouter } from "next/router"
import Head from "next/head";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import {Button, CircularProgress, Typography} from "@material-ui/core";


const Callback = (props) => {

    const router = useRouter();
    const { code, state }  = props


    useEffect(() => {
        router.push("/dashboard")
            .catch((err)=> console.log(err))
    })

    const content = (
        <div className={styles.main}>
            <Image
                src="/authenticate.png"
                alt="authenticating_image"
                width={450}
                height={450}
            />
            <Typography>Hang tight while we authenticate you!</Typography>
            <br/>
            <br/>
            <CircularProgress/>
            {/*<p>{code}</p>*/}
            {/*<p>{state}</p>*/}
        </div>
    )
    return (
        <Fragment>
            <Head>
                <title>iCare Platform Login</title>
            </Head>
            <LoginLayout
                content={content}
            />
        </Fragment>
    )
}

Callback.getInitialProps = async ({ query, ctx }) => {
    const code = query.code
    const state = query.state
    return {
        code: code,
        state: state
    }
}

export default Callback;
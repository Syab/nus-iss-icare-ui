import React, {Fragment, useEffect, useState} from "react";
import styles from '../styles/Page.module.css'
// import axios from "axios";
import Image from "next/image";
import { withRouter, useRouter } from "next/router"
// import { signIn, useSession } from 'next-NOTAUTH/client'
import Head from "next/head";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import {Button, CircularProgress, Typography} from "@material-ui/core";


const Callback = (props) => {

    const router = useRouter();
    const { code, state }  = props
    const [isLoginStarted, setIsLoginStarted] = useState(false)
    const [loginError, setLoginError] = useState('')

    const handleClick = () => {
        console.log("trying to sign in")
        setIsLoginStarted(true)
        signIn('Credentials',
            {
                code,
                state,
                callbackUrl: `${window.location.origin}/dashboard`
            }
        )
    }

    useEffect(() => {
        router.push("/dashboard")
            .catch((err)=> console.log(err))
    })

    const content = (
        <div className={styles.main}>
            <Image
                src="/authenticate.png"
                width={450}
                height={450}
            />
            <Typography>Hang tight while we authenticate you!</Typography>
            <br/>
            <br/>
            <CircularProgress/>
            {/*<Button onClick={handleClick}>hello</Button>*/}
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
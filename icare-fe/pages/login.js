import React, { Fragment, Component } from "react";
import Head from "next/head";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import LoginView from "../page-views/LoginView/LoginView";
// import { signIn, useSession} from 'next-auth/client';


const LoginPage = props => {
    const LoginViewContent = <LoginView/>

    return (
        <Fragment>
            <Head>
                <title>Login | iCare Platform </title>
            </Head>
                <LoginLayout
                    content={LoginViewContent}
                />
        </Fragment>
    )
}

export default LoginPage;

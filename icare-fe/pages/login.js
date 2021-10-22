import React, { Fragment, Component } from "react";
import Head from "next/head";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import LoginForm from "../components/LoginForm";
import LoginView from "../page-views/LoginView/LoginView";

const LoginPage = props => {
    const LoginViewContent = <LoginView/>
    return (
        <Fragment>
            <Head>
                <title>iCare Platform Login</title>
            </Head>
                <LoginLayout
                    content={LoginViewContent}
                />
        </Fragment>
    )
}

export default LoginPage;

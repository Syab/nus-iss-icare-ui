import React, { Fragment } from "react";
import Head from "next/head";
import LoginLayout from "../page-layouts/LoginLayout/LoginLayout";
import LoginForm from "../components/LoginForm";
import LoginView from "../page-views/LoginView/LoginView";

export default function LoginPage() {
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

import React from 'react';
import Layout from "../page-layouts/Layout/Layout";
import ReportingView from "../page-views/ReportingView/ReportingView";
import {getSession} from "next-auth/client";

const ReportingPage = () => {
    const ReportingPageContent = <ReportingView/>
    return (
        <div>
            <Layout
                content= { ReportingPageContent }
            />
        </div>
    )
}

export default ReportingPage;

export async function getServerSideProps (context) {
    const session = await getSession(context);

    if (!session){
        return {
            redirect: {
                destination : '/unauthorized',
                permanent: false
            }
        };
    }
    if (session){
        return ({
            props: {session},
        })
    }

}
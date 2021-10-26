import React from 'react';
import {useSession, getSession} from "next-auth/client";
import Layout from "../page-layouts/Layout/Layout";
import DashboardView from "../page-views/DashboardView/DashboardView";

export default function DashboardPage (props) {

    const DashboardPageContent = <DashboardView/>

    return (
        <div>
            <Layout
                content= { DashboardPageContent }
            />
        </div>
    )
}

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


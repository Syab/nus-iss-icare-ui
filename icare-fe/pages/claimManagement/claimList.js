import React from 'react';
// import styles from '../../styles/Page.module.css'
import Layout from "../../page-layouts/Layout/Layout";
import ClaimListView from "../../page-views/ClaimView/ClaimListView";
import {getSession} from "next-auth/client";

export default function ClaimListPage() {
    const claimListContent = <ClaimListView/>
    return (
        <div>
            <Layout
                content={claimListContent}
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
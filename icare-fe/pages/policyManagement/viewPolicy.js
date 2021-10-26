import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import ViewPolicyView from "../../page-views/PolicyView/ViewPolicyView";
import {getSession} from "next-auth/client";

export default function ViewPolicyPage() {
    const ViewPolicyContent = <ViewPolicyView/>
    return (

        <div>
            <Layout
                content={ViewPolicyContent}
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
import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import ClaimSubmitView from "../../page-views/ClaimView/ClaimSubmitView";
import {getSession} from "next-auth/client";

function ClaimSubmitPage() {
    const ClaimSubmitPageContent = <ClaimSubmitView/>
    return (
        <div>
            <Layout
                content={ ClaimSubmitPageContent }
            />
        </div>
    )
}

export default ClaimSubmitPage;

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
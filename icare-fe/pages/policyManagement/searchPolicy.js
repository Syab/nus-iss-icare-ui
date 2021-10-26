import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import SearchPolicyView from "../../page-views/PolicyView/SearchPolicyView";
import {getSession} from "next-auth/client";

export default function SearchPolicyPage() {
    const SearchPolicyContent = <SearchPolicyView/>
    return (

        <div>
            <Layout
                content={ SearchPolicyContent }

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
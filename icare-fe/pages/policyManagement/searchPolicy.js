import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import SearchPolicyView from "../../page-views/PolicyView/SearchPolicyView";

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
import React from 'react';
// import { SERVER } from '../../config'
import MainLayout from "../../page-layouts/MainLayout/MainLayout";
import SearchPolicyView from "../../page-views/PolicyView/SearchPolicyView";

export default function SearchPolicyPage() {
    const SearchPolicyContent = <SearchPolicyView/>
    return (

        <div>
            <MainLayout
                children={ SearchPolicyContent }

            />
        </div>
    )
}
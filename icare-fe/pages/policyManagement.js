import React from 'react';
import PolicyManagementView from "../page-views/PolicyView/PolicyManagementView";
import Layout from "../page-layouts/Layout/Layout";

export default function PolicyManagementPage() {
    const PolicyManagementPageContent = <PolicyManagementView/>
    return (

        <div>
            <Layout
                content={ PolicyManagementPageContent }
            />
        </div>
    )
}
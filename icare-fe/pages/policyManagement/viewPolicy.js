import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import ViewPolicyView from "../../page-views/PolicyView/ViewPolicyView";

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

import React from 'react';
import MainLayout from "../../page-layouts/MainLayout/MainLayout";
import ViewPolicyView from "../../page-views/PolicyView/ViewPolicyView";

export default function ViewPolicyPage() {
    const ViewPolicyContent = <ViewPolicyView/>
    return (

        <div>
            <MainLayout
                children={ViewPolicyContent}
            />
        </div>
    )
}

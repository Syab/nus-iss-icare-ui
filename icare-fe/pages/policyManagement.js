import React from 'react';
import PolicyManagementView from "../page-views/PolicyView/PolicyManagementView";
import MainLayout from "../page-layouts/MainLayout/MainLayout";

export default function PolicyManagementPage() {
    const PolicyManagementPageContent = <PolicyManagementView/>
    return (

        <div>
            <MainLayout
                children={ PolicyManagementPageContent }
            />
        </div>
    )
}
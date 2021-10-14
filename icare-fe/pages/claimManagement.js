import React from 'react';
// import styles from '../styles/Page.module.css'
import MainLayout from "../page-layouts/MainLayout/MainLayout";
import ClaimManagementView from "../page-views/ClaimView/ClaimManagementView";

function ClaimManagementPage() {
    const ClaimManagementPageContent = <ClaimManagementView/>
    return (
        <div>
            <MainLayout
                content={ ClaimManagementPageContent }
            />
        </div>
    )
}

export default ClaimManagementPage;
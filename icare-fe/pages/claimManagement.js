import React from 'react';
// import styles from '../styles/Page.module.css'
import Layout from "../page-layouts/Layout/Layout";
import ClaimManagementView from "../page-views/ClaimView/ClaimManagementView";

function ClaimManagementPage() {
    const ClaimManagementPageContent = <ClaimManagementView/>
    return (
        <div>
            <Layout
                content={ ClaimManagementPageContent }
            />
        </div>
    )
}

export default ClaimManagementPage;
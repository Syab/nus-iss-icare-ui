import React from 'react';
// import styles from '../../styles/Page.module.css'
import Layout from "../../page-layouts/Layout/Layout";
import ClaimHistoryView from "../../page-views/ClaimView/ClaimHistoryView";

export default function ClaimHistoryPage() {
    const claimHistoryContent = <ClaimHistoryView/>
    return (
        <div>
            <Layout
                content={claimHistoryContent}
            />
        </div>
    )
}

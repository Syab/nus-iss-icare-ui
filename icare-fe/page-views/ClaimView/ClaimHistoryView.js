import React from 'react';
import styles from "../../styles/Page.module.css"
import ClaimHistoryTable from "../../components/Claim/ClaimHistoryTable";
import ClaimListTable from "../../components/DataTable/ClaimListTable";

export default function ClaimHistoryView() {
    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    My Claim History
                </h2>
            </main>
            <div >
                <ClaimListTable/>
            </div>
        </div>
    )
}

import React from 'react';
import styles from "../../styles/Page.module.css"
import ClaimListTable from "../../components/Claim/ClaimListTable";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import useStyles from "../../utils/mstyles";

export default function ClaimHistoryView() {
    const styles = useStyles()
    return (
        <div>
            <CustomHeader
                title="Claim Summary"
                subtitle="Here is a summry of your claim"
                description="Click on each row to see a history of each submitted claim"
            />
            <div style={{marginTop: '2em' }}>
                <ClaimListTable/>
            </div>
        </div>
    )
}

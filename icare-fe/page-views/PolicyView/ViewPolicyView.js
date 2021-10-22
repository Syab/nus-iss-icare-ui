import React, {Fragment, useEffect, useState} from 'react';
import {sortObject, todayYYYYMMDD} from "../../utils/handlers";
import styles from '../../styles/Page.module.css';
import PolicyTable from "../../components/Policy/PolicyTable";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import PolicyListTable from "../../components/Policy/PolicyListTable";


export default function ViewPolicyView() {

    return (
        <div>
            <CustomHeader
                title="My Policies"
                subtitle={"Here are your policies as of : " + todayYYYYMMDD('-')}
                description="Click each policy to view their details"
            />
            <div style={{marginTop: '2em' }}>
                <PolicyListTable/>
            </div>
        </div>
    )
}

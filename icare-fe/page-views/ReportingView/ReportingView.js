import React from "react";
import axios from "axios";
import useStyles from "../../utils/mstyles";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import {todayYYYYMMDD} from "../../utils/handlers";
import SummaryCards from "../../components/Reporting/SummaryCards";
import MaterialTable from "material-table";
import SummaryActions from "../../components/Reporting/SummaryActions";
import {claimaintlist} from "../../mock-data/allreporting";
import SummaryStatus from "../../components/Reporting/SummaryStatus";


const ReportingView = () => {

    const advisorname = "WONG WAI MUN";
    const policycompany = "AVIVA"
    const classes = useStyles();
    const columns = [
        {
            title: 'Claimant',
            field : "claimantName"
        },
        {
            title: 'Policy Name',
            field : "policyName"
        },
        {
            title: 'Policy Number',
            field : "policyNo"
        },
        {
            title: 'Submitted',
            field : "createDate"
        },
        {
            title: 'Claim Amount',
            field : "claimAmount",
            type: 'currency'
        },
        {
            title: 'Claim Type',
            field : "claimType"
        },
        {
            title: 'Claim Status',
            field : "claimStatus",
            render: rowData => {
                return(
                    <SummaryStatus
                        claimStatus={rowData.claimStatus}
                    />
                )
            }
        }
        ,
        {
            title: 'Actions',
            render: rowData => {
                return(
                    <SummaryActions
                        claimStatus={rowData.claimStatus}
                    />
                )
            }
        }
    ]
    return(
        <div>
            <CustomHeader
                title={policycompany + " Dashboard"}
                subtitle={"Welcome back " + advisorname}
                description={"Here is a summary of your clients as of " + todayYYYYMMDD('-')}
            />
            <div>
                <SummaryCards/>
            </div>
            <div className={classes.gridContainer}>
                <MaterialTable
                    title="List of Submitted Claims"
                    columns={columns}
                    data={claimaintlist}
                />
            </div>
        </div>
    )
}

export default ReportingView
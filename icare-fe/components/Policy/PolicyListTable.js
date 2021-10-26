import React, { useState, useEffect, Fragment, forwardRef } from 'react';
import axios from "axios";
import MaterialTable from 'material-table';
import {SERVER} from "../../config";
import useStyles from "../../utils/mstyles";
import {policy_SVC, tableIcons, viewpolicy_ENDPOINT} from "../../utils/constants";
import { Chip, Tooltip, Typography } from "@material-ui/core";
import { Badge } from "evergreen-ui";
import PolicyListActions from "./PolicyListActions";
import AlertNotAvailable from "../Common/AlertNotAvailable";
import { mypolicies } from "../../mock-data/allpolicies";


const PolicyListTable = props => {

    const API = `${SERVER}/api/${policy_SVC}${viewpolicy_ENDPOINT}`;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [viewDetails, setViewDetails] = useState(false)
    const styles = useStyles()
    const localmypolicies = mypolicies
    const handleRetState = () => {
        setViewDetails(false)
    }

    const handleViewDetails = () => {
        console.log("view details clicked!")
        setViewDetails(true)
    }

    const fetchData = async() => {
        await axios.get( API,
            {
                headers:{
                    contentType: "application/json"
                }
            })
            .then((result)=>{
                if (result.status === 200){
                    setIsLoading(false)
                    setData(result.data)
                } else {
                    setIsLoading(false);
                }
            })
            .catch((err) =>{
                setIsLoading(false);
                // console.log(err.response.data)
                setData(localmypolicies)
            })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const mypoliciesdata = data

    const columns = [
        {
            title: 'Policy Number',
            field: 'policyno'
        },
        {
            title: 'Start Date',
            field: 'startdate'
        },
        {
            title: 'End Date',
            field: 'enddate'
        },
        {
            title: 'Policy Status',
            field: 'status',
            render: rowData => {
                let bgcolour
                if (rowData.status === "In force"){
                    bgcolour = 'green'
                } else {
                    bgcolour = 'red'
                }
                return(
                    <Badge color={bgcolour}>{rowData.status}</Badge>
                )

            }
        },
        {
            title: 'Sum Assured',
            field: 'sumassured',
            type: 'currency'
        },
        {
            title: 'Advisor',
            field: 'advisorname'
        },
        {
            title: 'Actions',
            render : rowData => {
                return(
                    <div>
                        <PolicyListActions
                            handleResetState={handleRetState}
                            data={rowData}
                        />
                    </div>
                )
            }
        }
    ]

    const content = ((mypoliciesdata) ?
        <div>
            <MaterialTable
                title="My Policies"
                icons={tableIcons}
                columns={columns}
                data={mypoliciesdata}
                isLoading={isLoading}
            />
        </div> : <AlertNotAvailable/>)

    return(
        <div>
            {content}
        </div>
    )
}
export default PolicyListTable
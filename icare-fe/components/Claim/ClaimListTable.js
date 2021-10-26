import React, { useState, useEffect, Fragment, forwardRef } from 'react';
import axios from "axios";
import {tableIcons, claim_SVC, claimlist_ENDPOINT} from "../../utils/constants";
import MaterialTable from 'material-table';
import {SERVER} from "../../config";
import useStyles from "../../utils/mstyles";
import ClaimListActions from "./ClaimListActions";
import { Typography } from "@material-ui/core";
import {
    Badge, Button, IconButton, SearchIcon, DownloadIcon, SendMessageIcon
} from "evergreen-ui";
import {claimlist} from "../../mock-data/allclaims";

const ClaimListTable = props => {

    const API = `${SERVER}/api/${claim_SVC}${claimlist_ENDPOINT}`
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const styles = useStyles();
    const localclaimlist = claimlist
    const fetchData = async() => {
        await axios.get(API)
            .then((result)=>{
                if (result.status === 200){
                    setIsLoading(false)
                    setData(result.data.result)
                } else {
                    setIsLoading(false);
                }
            })
            .catch((err) =>{
                setIsLoading(false);
                console.log(err.response.data)
                setData(localclaimlist.result)
            })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const claimlistdata = data
    const columns = [
        {
            title: 'Policy Number',
            field: 'policyNumber'
        },
        {
            title: 'Claim Amount',
            field: 'claimAmount',
            type: 'currency'
        },
        {
            title: 'Claim Status',
            render : rowData => {
                let bgcolour
                if (rowData.claimStatus === "PASS"){
                    bgcolour = 'green'
                } else if (rowData.claimStatus === "REJECT"){
                    bgcolour = 'red'
                } else {
                    bgcolour = 'orange'
                }
                return(
                    <Badge color={bgcolour}>{rowData.claimStatus}</Badge>
                )
            }
        },
        {
            title: 'Submitted',
            field: 'createTime'
        },
        {
            title: 'Actions',
            render : rowData => {
                return(
                    <ClaimListActions
                        claimRowData={rowData}
                    />
                )
            }
        }
    ]

    return (
        <div>
            <MaterialTable
                title="List of Submitted Claims"
                icons={tableIcons}
                columns={columns}
                data={claimlistdata}
                isLoading={isLoading}
            />
        </div>
    )
}

export default ClaimListTable


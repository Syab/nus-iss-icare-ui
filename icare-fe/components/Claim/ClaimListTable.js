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


const ClaimListTable = props => {

    const API = `${SERVER}/api/${claim_SVC}${claimlist_ENDPOINT}`
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const styles = useStyles()

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
                    setData(result.data.result)
                } else {
                    setIsLoading(false);
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const claimlist = data

    const columns = [
        // {
        //     title: 'Claim ID',
        //     render : rowData => {
        //         return(
        //             <Typography>{rowData.claimId.id}</Typography>
        //         )
        //     }
        // },
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
                } else if (rowData.claimStatus === "REJECTED"){
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
            title: 'Policy ID',
            render : rowData => {
                return(
                    <Typography>{rowData.policyId.id}</Typography>
                )
            }
        },
        {
            title: 'Actions',
            render : rowData => {
                return(
                    <ClaimListActions
                        claimStatus={rowData.claimStatus}
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
                data={claimlist}
                detailPanel={rowData => {
                    return (
                        <Typography>
                            List of claim history for this policy and claim ID
                        </Typography>
                    )
                }}
            />
        </div>
    )
}

export default ClaimListTable


import React, { useState, useEffect, Fragment, forwardRef } from 'react';
import axios from "axios";
import {tableIcons, claim_SVC, claimlist_ENDPOINT} from "../../utils/constants";
import MaterialTable from 'material-table';
import {SERVER} from "../../config";
import { Typography} from "@material-ui/core";
import {Button, SearchIcon, UploadIcon, DownloadIcon} from "evergreen-ui"
import ClaimHistoryTable from "../Claim/ClaimHistoryTable";

const ClaimListTable = props => {

    const API = `${SERVER}/api/${claim_SVC}${claimlist_ENDPOINT}`
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

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
    console.log(claimlist)
    // claimlist.forEach((obj, i) => {
    //     console.log(obj.policyNumber)
    //     console.log(obj.claimStatus)
    //     console.log(typeof(obj.policyId))
    // })

    const policyid = ['id','1234']

    const columns = [
        {
            title: 'Claim ID',
            render : rowData => {
                return(
                    <Typography>{rowData.claimId.id}</Typography>
                )
            }
        },
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
            field: 'claimStatus'
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
                    <div>
                        <Button marginY={8} marginRight={12} iconBefore={DownloadIcon}>DOWNLOAD</Button>
                        <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>VIEW</Button>
                    </div>
                )
            }
        }
    ]

    return (
        <div style={{ maxWidth: '100%' }}>
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


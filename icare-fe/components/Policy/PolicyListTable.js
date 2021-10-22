import React, { useState, useEffect, Fragment, forwardRef } from 'react';
import axios from "axios";
import MaterialTable from 'material-table';
import {SERVER} from "../../config";
import useStyles from "../../utils/mstyles";
import {policy_SVC, tableIcons, viewpolicy_ENDPOINT} from "../../utils/constants";
import {
    Chip, Tooltip, Typography
} from "@material-ui/core";
import {
    Badge, Button, IconButton, SearchIcon
} from "evergreen-ui";


const PolicyListTable = props => {

    const API = `${SERVER}/api/${policy_SVC}${viewpolicy_ENDPOINT}`;
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
                    setData(result.data)
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

    const mypolicies = data
    console.log(data)
    const columns = [
        {
            title: 'Policy ID',
            field: 'policyid'
        },
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
                    <Tooltip title="View"><Button marginRight={6} iconBefore={SearchIcon}>View Details</Button></Tooltip>
                )
            }
        }
    ]

    return(
        <div>
            <MaterialTable
                title="My Policies"
                icons={tableIcons}
                columns={columns}
                data={mypolicies}
                options={{
                    fixedColumns: {
                        left: 2,
                        right: 0
                    }
                }}
            />
        </div>
    )
}
export default PolicyListTable
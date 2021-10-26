import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "../../utils/mstyles";
import {SERVER} from "../../config";
import {claim_SVC, claimhistory_ENDPOINT} from "../../utils/constants";
import {claimhistorylist} from "../../mock-data/allclaims";
import {Box, Tooltip, Typography, Card} from "@material-ui/core";
import {
    DownloadIcon, IconButton, SearchIcon,
    SendMessageIcon, SideSheet, Pane,
    Heading, Tablist, Tab, Paragraph, Badge
} from "evergreen-ui";
import AlertNotAvailable from "../Common/AlertNotAvailable";


const ClaimListActions = props => {

    const { claimRowData } = props;
    const historyAPI = `${SERVER}/api/${claim_SVC}${claimhistory_ENDPOINT}`
    const [isShown, setIsShown] = useState(false)
    const [historyData, setHistoryData] = useState([])
    const localhistorydata = claimhistorylist.result
    const classes = useStyles()

    const fetchData = async (claimRowData) => {
        console.log(claimRowData.claimId.id)
        await axios.get(historyAPI,{
            params:{
                claimId : claimRowData.claimId.id
            }
        })
            .then((result)=>{
                if (result.status === 200){
                    setHistoryData(result.data)
                } else {
                    setHistoryData(localhistorydata)
                }
            })
            .catch((err) =>{
                console.log(err)
                setHistoryData(localhistorydata)
            })
    }

    const handleResetState = () => {
        setIsShown(false)
        setHistoryData([])
    }

    const handleSideSheet = () => {
        setIsShown(true)
        fetchData(claimRowData)
    }

    const rejectReason = ((claimRowData.rejectReason.rejectReason == null) ?
                            <Badge color="neutral">NONE</Badge> : claimRowData.rejectReason.rejectReason)

    const handleColour = (status) =>{
        let color
        if (status === "PASS"){
            color = 'green'
        } else if (status === "REJECT"){
            color = 'red'
        } else {
            color = 'orange'
        }
        return color
    }


    // useEffect(()=>{
    //     fetchData()
    // }, [])
    // console.log(historyData)
    return(
        <div>
            <Tooltip title="Download">
                <IconButton marginRight={6} icon={DownloadIcon}/>
            </Tooltip>
            <Tooltip title="View">
                <IconButton
                    marginRight={6}
                    icon={SearchIcon}
                    onClick={handleSideSheet}
                />
            </Tooltip>
            { ( claimRowData.claimStatus === "REJECT") ?
                <Tooltip title="Resubmit"><IconButton marginRight={6} icon={SendMessageIcon}/></Tooltip>
                : <IconButton disabled marginRight={6} icon={SendMessageIcon}/>
            }
            <SideSheet isShown={isShown} onCloseComplete={handleResetState}>
                <Pane flex="1"
                      className={classes.sideSheetBody}
                >
                    <Box className={classes.sideSheet}>
                        <Typography variant="h6" className={classes.sideSheetHeader}>
                            Submitted Claim Details
                        </Typography>
                        <div className={classes.sideSheetBody}>
                            <Card>
                                <Paragraph className={classes.sideSheetBodyContent}>
                                    Claim Submit ID : {claimRowData.claimId.id}
                                    <br/>
                                    Claim Status : <Badge color={handleColour(claimRowData.claimStatus)}>{claimRowData.claimStatus}</Badge>
                                    <br/>
                                    Policy ID : {claimRowData.policyId.id}
                                    <br/>
                                    Policy Number : {claimRowData.policyNumber}
                                    <br/>
                                    Reject Reason : {rejectReason}
                                </Paragraph>
                            </Card>
                        </div>
                        <Typography variant="h6" className={classes.sideSheetHeader}>
                            Submitted Claim History
                        </Typography>
                        <div className={classes.sideSheetBody}>
                        {(historyData) ? historyData.map((item)=>(
                            <Card key={item} className={classes.sheetCard}>
                                <Paragraph className={classes.sideSheetBodyContent}>
                                    Claim History ID : {item.claimHistoryId.id}
                                    <br/>
                                    Claim Submit ID : {item.claimId.id}
                                    <br/>
                                    Claim Status : <Badge color={handleColour(item.claimStatus)}>{item.claimStatus}</Badge>
                                    <br/>
                                    Create Time : {item.createTime}
                                    <br/>
                                    Claim Amount : {item.claimAmount}
                                    <br/>
                                    Reject Reason : {item.rejectReason.rejectReason}
                                </Paragraph>
                            </Card>
                        )) : <Typography>No History for this Submission</Typography>}
                        </div>
                    </Box>
                </Pane>
            </SideSheet>
        </div>
    )
}

export default ClaimListActions
import React, { useState, useEffect } from "react";
import {Box, Tooltip, Typography} from "@material-ui/core";
import useStyles from "../../utils/mstyles";
import {
    DownloadIcon, IconButton, SearchIcon,
    SendMessageIcon, SideSheet, Card, Pane,
    Heading, Tablist, Tab, Paragraph, Badge
} from "evergreen-ui";
import {SERVER} from "../../config";
import {claim_SVC, claimhistory_ENDPOINT} from "../../utils/constants";
import axios from "axios";

const ClaimListActions = props => {

    const { claimRowData } = props;
    const historyAPI = `${SERVER}/api/${claim_SVC}${claimhistory_ENDPOINT}`
    const [isShown, setIsShown] = useState(false)
    const classes = useStyles()

    const handleResetState = () => {
        setIsShown(false)
    }

    const handleSideSheet = () => {
        setIsShown(true)
    }

    const rejectReason = ((claimRowData.rejectReason.rejectReason == null) ?
                            <Badge color="neutral">NONE</Badge> : claimRowData.rejectReason.rejectReason)


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
                <Box className={classes.sideSheet}>
                    <Typography variant="h6" className={classes.sideSheetHeader}>
                        Submitted Claim Details
                    </Typography>
                    <div className={classes.sideSheetBody}>
                        <Paragraph >
                            Claim Submit ID : {claimRowData.claimId.id}
                            <br/>
                            Claim Status : <Badge>{claimRowData.claimStatus}</Badge>
                            <br/>
                            Policy ID : {claimRowData.policyId.id}
                            <br/>
                            Policy Number : {claimRowData.policyNumber}
                            <br/>
                            Reject Reason : {rejectReason}
                        </Paragraph>
                    </div>
                    <Typography variant="h6" className={classes.sideSheetHeader}>
                        Submitted Claim History
                    </Typography>
                </Box>
            </SideSheet>
        </div>
    )
}

export default ClaimListActions
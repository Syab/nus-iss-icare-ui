import React, {useState} from 'react';
import useStyles from "../../utils/mstyles";
import {Box, Card, Tooltip, Typography} from '@material-ui/core';
import {
    DownloadIcon, IconButton, SearchIcon, SideSheet, Pane,
    Heading, Paragraph, Badge
} from "evergreen-ui";

export default function PolicyListActions(props) {

    const { data,  ...rest } = props
    const [isShown, setIsShown] = useState(false)
    const classes = useStyles()


    const handleResetState = () => {
        setIsShown(false)
    }

    const handleSideSheet = () => {
        setIsShown(true)
    }

    const handleColour = (status) =>{
        let color
        if (status === "In force"){
            color = 'green'
        } else {
            color = 'red'
        }
        return color
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // console.log(data);
    return (
        <div>
            <Tooltip title="View Details"><IconButton onClick={handleSideSheet} marginRight={6} icon={SearchIcon}/></Tooltip>
            <SideSheet isShown={isShown} onCloseComplete={handleResetState}>
                <Pane flex="1"
                      className={classes.sideSheetBody}
                >
                    <Box className={classes.sideSheet}>
                        <Typography variant="h5" className={classes.sideSheetHeader}>
                            Policy Details
                        </Typography>
                        <div className={classes.sideSheetBody}>
                            <Card>
                                <Paragraph className={classes.sideSheetBodyContent}>
                                    <Typography gutterBottom><strong>Policy Provider :</strong> {data.policycompany}</Typography>
                                    <Typography gutterBottom><strong>Policy Status :</strong>  <Badge color={handleColour(data.status)}>{data.status}</Badge></Typography>
                                    <Typography gutterBottom><strong>Policy ID :</strong>  {data.policyid}</Typography>
                                    <Typography gutterBottom><strong>Policy Number :</strong> {data.policyno}</Typography>
                                    <Typography gutterBottom><strong>Policy Name :</strong> {data.policyname}</Typography>
                                    <Typography gutterBottom><strong>Policy Type :</strong> {data.policytype}</Typography>
                                    <Typography gutterBottom><strong>Start Date :</strong> {data.startdate}</Typography>
                                    <Typography gutterBottom><strong>End Date :</strong> {data.enddate}</Typography>
                                    <Typography gutterBottom><strong>Advisor :</strong> {data.advisorname}</Typography>
                                    <Typography gutterBottom><strong>Advisor Email :</strong> {data.email}</Typography>
                                    <Typography gutterBottom><strong>Sum Assured :</strong> {parseFloat(data.sumassured)}</Typography>
                                    <Typography gutterBottom><strong>Max Claimable :</strong> {parseFloat(data.maxclaimable)}</Typography>
                                </Paragraph>
                            </Card>
                        </div>
                    </Box>
                </Pane>
            </SideSheet>
        </div>
    );
}
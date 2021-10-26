import React from 'react';
import MUIButton from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import {IconButton, SearchIcon} from "evergreen-ui";
import PolicyTable from "./PolicyTable";

export default function PolicyListActions(props) {

    const { data, handleResetState, ...rest } = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        handleResetState();
    };
    // console.log(data);
    return (
        <div>
            <Tooltip title="View Details"><IconButton onClick={handleClickOpen} marginRight={6} icon={SearchIcon}/></Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Policy Details"}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        <Typography gutterBottom>
                            {data.policycompany} | {data.policyname}
                        </Typography>
                        <Typography gutterBottom>
                            Policy Number : {data.policyno}
                        </Typography>
                        <Typography gutterBottom>
                            Status : {data.status}
                        </Typography>
                        {/*{data.policycompany}*/}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/*<MUIButton onClick={handleClose} color="primary">*/}
                    {/*    Disagree*/}
                    {/*</MUIButton>*/}
                    <MUIButton onClick={handleClose} color="primary" autoFocus>
                        Close
                    </MUIButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
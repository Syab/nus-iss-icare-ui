import React from "react";
import {Tooltip} from "@material-ui/core";
import {DownloadIcon, IconButton, SearchIcon, SendMessageIcon} from "evergreen-ui";

const ClaimListActions = props => {
    const { claimStatus } = props;

    return(
        <div>
            <Tooltip title="Download"><IconButton marginRight={6} icon={DownloadIcon}/></Tooltip>
            <Tooltip title="View"><IconButton marginRight={6} icon={SearchIcon}/></Tooltip>
            { ( claimStatus === "REJECTED") ?
                <Tooltip title="Resubmit"><IconButton marginRight={6} icon={SendMessageIcon}/></Tooltip>
                : <IconButton disabled marginRight={6} icon={SendMessageIcon}/>
            }
        </div>
    )
}

export default ClaimListActions
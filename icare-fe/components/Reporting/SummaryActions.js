import React from "react";
import {Tooltip} from "@material-ui/core";
import {ListDetailViewIcon, IconButton, SearchIcon, EditIcon} from "evergreen-ui";

const SummaryActions = props => {
    const { claimStatus } = props;

    return(
        <div>
            <Tooltip title="View Details"><IconButton marginRight={6} icon={ListDetailViewIcon}/></Tooltip>
            { (claimStatus === 'PENDING' || claimStatus === 'REJECTED') ?
                <Tooltip title="Review"><IconButton marginRight={6} icon={EditIcon}/></Tooltip>
                : null
            }
        </div>
    )
}

export default SummaryActions;
import React from "react";
import { red, green, yellow } from '@material-ui/core/colors';
import {Badge, WarningSignIcon, IconButton, BanCircleIcon, TickCircleIcon, ListItem} from "evergreen-ui";
import {RemoveCircleIcon} from '@material-ui/icons';

const SummaryStatus = props => {
    const { claimStatus } = props;
    let colour
    let icon

    if(claimStatus==='PASS'){
        colour='green'
        icon=<TickCircleIcon color="success" marginRight={10}/>
    }else if (claimStatus==='REJECTED'){
        colour='red'
        icon=<BanCircleIcon color="danger" marginRight={10}/>
    }else {
        colour='yellow'
        icon=<WarningSignIcon color="warning" marginRight={10}/>
    }

    return(
        <div>
            {icon}
            <Badge color={colour}>
                {claimStatus}
            </Badge>
        </div>
    )
}

export default SummaryStatus;
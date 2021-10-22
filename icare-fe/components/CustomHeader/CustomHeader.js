import React from "react";
import useStyles from "../../utils/mstyles";
import {Typography} from "@material-ui/core";

const CustomHeader = props => {
    const { title, subtitle, description }  = props
    const styles = useStyles()

    return(
        <div>
            <Typography
                variant="h2"
                className={styles.customHeaderTitle}
            >
                {title}
            </Typography><br/>
            <Typography
                variant="subtitle1"
            >
                {subtitle}
            </Typography>
            <Typography
                variant="subtitle2"
            >
                {description}
            </Typography>
        </div>
    )
}

export default CustomHeader;
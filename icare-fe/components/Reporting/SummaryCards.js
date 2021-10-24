import React from "react";
import useStyles from "../../utils/mstyles";
import { useTheme } from "@material-ui/core/styles";
import {summarycards, summaryheaders} from "../../mock-data/allreporting";
import {
    Chip, Card, CardActionArea, CardContent,
    CardMedia, Grid, Typography, IconButton, Divider
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const SummaryCards = () => {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div>
            <Grid container spacing={3} className={classes.gridContainer}>
                {summaryheaders.map((item)=>(
                    <Grid item md={4}>
                        <Card className={classes.summaryCards}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="h1">
                                        {item.numVal}
                                    </Typography>
                                </CardContent>
                            </div>
                            <Divider className={classes.divider} orientation="vertical" />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="h5" >
                                        {item.descripton}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default SummaryCards
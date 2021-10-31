import React, { Fragment } from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import styles from "../../styles/pageViewStyles/LoginViewStyles.module.css"
import { AppBar, Box, Button, Grid, Paper, Tabs, Tab, Typography,
} from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import SwipeableViews from 'react-swipeable-views';
import {QRCode} from "react-qrcode-logo";
import { mockpass, singpasslogin, singpasslogo, corppasslogo} from "../../utils/constants";
import {useRouter} from "next/router";

function TabPanel(props) {
    const { children, value, index, content, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                    {content}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function LoginView(){
    const router = useRouter();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const goReporting = () => {
        router.push('/reporting')
    }

    return(
        <div className={styles.root}>
            <h1 className={styles.title}>
               Login to Access your policies
            </h1>
            <Paper className={styles.paper}>
                <AppBar position="static" color="default">
                    <Tabs value={value}
                          onChange={handleChange}
                          variant="fullWidth"
                          aria-label="full width tabs"
                          indicatorColor="primary"
                          textColor="primary"
                    >
                        <Tab label="iCare ID" {...a11yProps(0)} />
                        <Tab label="SingPass" {...a11yProps(1)} />
                        <Tab label="CorpPass" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0}>
                        <Box className={styles.tabContents} p={3}>
                            <LoginForm/>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={styles.tabContents}>
                            <a
                                // target="_blank"
                                href="http://ec2-54-179-181-4.ap-southeast-1.compute.amazonaws.com/login/singpass"
                                // rel="noopener noreferrer"
                            >
                            <QRCode
                                value="https://www.singpass.gov.sg/spauth/login"
                                style={{ width: 195, height: 195, padding: 30 }}
                                // enableCORS={true}
                                logoImage={singpasslogo}
                                size="300"
                            />
                            </a>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className={styles.tabContents}>
                            <a
                                // target="_blank"
                                href={mockpass}
                                // rel="noopener noreferrer"
                            >
                                <QRCode
                                    value="https://www.corppass.gov.sg/cpauth/login/"
                                    style={{ width: 195, height: 195, padding: 30 }}
                                    // enableCORS={true}
                                    logoImage={corppasslogo}
                                    size="300"
                                />
                            </a>
                            <Button onClick={goReporting}>
                                REPORTING
                            </Button>
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Paper>
        </div>
    );
}

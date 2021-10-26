import React, {Fragment} from "react";
import styles from '../../styles/pageLayoutStyles/LoginLayoutStyles.module.css';
import {AppBar, Toolbar, Typography, Paper, ThemeProvider} from '@material-ui/core';
import {createTheme} from "@material-ui/core/styles";

export default function LoginLayout(props,children) {
    const {content} = props
    const theme = createTheme({
        palette: {
            primary: {
                main: '#edb019'
            },
            secondary: {
                main: '#2E465B'
            },
        },
    });
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Toolbar className={styles.appBar}>
                    <Typography variant="h6" className={styles.title}>
                        <strong>insuranceCare</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={styles.root}>
                {content}
            </div>
            </ThemeProvider>
        </Fragment>
    );
}
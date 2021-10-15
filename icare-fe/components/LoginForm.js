import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import Link from 'next/link';
import { useTheme } from "@material-ui/core/styles";
import styles from "../styles/pageViewStyles/LoginViewStyles.module.css"
import { AppBar, Box, Button, Grid, Paper, Tabs, Tab, Typography} from "@material-ui/core";


export default function LoginForm(){
    const theme = useTheme();

    return(
        <div className={styles.root}>
            LOGIN FORM
            <Button>LOG ME IN</Button>
        </div>
            );
}

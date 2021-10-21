import React, {Fragment} from "react";
import styles from '../../styles/pageLayoutStyles/LoginLayoutStyles.module.css';
import BGImage from "../../components/Common/BGImage";
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

export default function LoginLayout(props,children) {
    const {content} = props
    return (
        <Fragment>
            {/*<div className={styles.root}>*/}
            {/*    <h1>Homepage</h1>*/}
            {/*    <BGImage/>*/}
            {/*</div>*/}
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
        </Fragment>
    );
}
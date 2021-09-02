import React from "react";
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import styles from "../../styles/componentStyles/NavBar.module.css";


export default function NavBar() {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar className={styles.appBar}>
                    <Typography variant='h3' className={styles.title}>
                        iCare
                    </Typography>
                    <Button classes={{
                        root: styles.navButtonRoot,
                        label: styles.navButtons,
                    }}>
                        <Link href='/dashboard'>Dashboard</Link>
                    </Button>
                    <Button classes={{
                        root: styles.navButtonRoot,
                        label: styles.navButtons,
                    }}>
                        <Link href='/claimManagement'>Claims</Link>
                    </Button>
                    <Button classes={{
                        root: styles.navButtonRoot,
                        label: styles.navButtons,
                    }}>
                        <Link href='/policyManagement'>Policy</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

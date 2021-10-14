import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../../styles/pageLayoutStyles/MainLayoutStyle.module.css';

function MainLayout(props){
    const {content} = props
    return (
        <div>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar  className={styles.appBar}>
                            <Typography
                                        variant="h5"
                                        className={styles.title}
                                        component="div"
                                        sx={{ flexGrow: 1 }}>
                                <strong>insuranceCare</strong>
                            </Typography>
                            <Button classes={{
                                root: styles.navButtonRoot,
                                label: styles.navButtons,
                            }}>
                                <Link href='/dashboard'>DASHBOARD</Link>
                            </Button>
                            <Button classes={{
                                root: styles.navButtonRoot,
                                label: styles.navButtons,
                            }}>
                                <Link href='/claimManagement'>CLAIM</Link>
                            </Button>
                            <Button classes={{
                                root: styles.navButtonRoot,
                                label: styles.navButtons,
                            }}>
                                <Link href='/policyManagement'>POLICIES</Link>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <main>
                {content}
            </main>
        </div>

    );
}

export default MainLayout;
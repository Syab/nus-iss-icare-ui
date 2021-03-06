import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import clsx from 'clsx';
import { makeStyles, useTheme, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from "@material-ui/core/Tooltip";
import {
    Dashboard, Description, ExpandMore, ExpandLess, NoteAdd, Publish, History,
    Shop, Class
} from '@material-ui/icons';
import {Button} from "@material-ui/core";
import {signOut} from "next-auth/client";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#2E465B',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: 'whitesmoke'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
        color: 'whitesmoke'
    },
    button: {
        color: 'whitesmoke',
        width: theme.spacing(12),
        marginRight: theme.spacing(3)
    }
}));

export default function Layout(props) {
    const {content} = props
    const router = useRouter()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [listCOpen, setListCOpen] = React.useState(false);
    const [listPOpen, setListPOpen] = React.useState(false);
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

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setListCOpen(false);
        setListPOpen(false);
    };

    const handleCClick = () => {
        setListCOpen(!listCOpen);
    };

    const handlePClick = () => {
        setListPOpen(!listPOpen);
    };


    const handleLogout = () => {
        signOut({
            callbackUrl: `${window.location.origin}/login`
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <strong>insuranceCare</strong>
                        </Typography>
                        <Button onClick={handleLogout} className={classes.button}>LOGOUT</Button>
                        <Button className={classes.button}>PROFILE</Button>
                    </Toolbar>

                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link href='/dashboard'>
                            <Tooltip title="Dashboard" placement="right">
                                <ListItem button>
                                    <ListItemIcon><Dashboard /></ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                            </Tooltip>
                        </Link>
                        <Divider />
                        <Tooltip title="Claim Management" placement="right">
                            <ListItem button onClick={handleCClick}>
                                <ListItemIcon><Description /></ListItemIcon>
                                <ListItemText primary="Claims" />
                                {listCOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                        </Tooltip>
                        <Divider />
                        <Collapse in={listCOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link href='/claimManagement/claimSubmit'>
                                    <ListItem button>
                                        <ListItemIcon><Publish /></ListItemIcon>
                                        <ListItemText primary="Submit Claim" />
                                    </ListItem>
                                </Link>
                                <Tooltip title="Claim History" placement="right">
                                    <Link href='/claimManagement/claimList'>
                                        <ListItem button>
                                            <ListItemIcon><History /></ListItemIcon>
                                            <ListItemText primary="Claim History" />
                                        </ListItem>
                                    </Link>
                                </Tooltip>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handlePClick}>
                            <Tooltip title="Policy Management" placement="right">
                                <ListItemIcon><NoteAdd /></ListItemIcon>
                            </Tooltip>
                            <ListItemText primary="Policies" />
                            {listPOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Divider />
                        <Collapse in={listPOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link href='/policyManagement/viewPolicy'>
                                    <ListItem button>
                                        <ListItemIcon><Class /></ListItemIcon>
                                        <ListItemText primary="My Policies" />
                                    </ListItem>
                                </Link>
                                <Link href='/policyManagement/searchPolicy'>
                                    <ListItem button>
                                        <ListItemIcon><Shop/></ListItemIcon>
                                        <ListItemText primary="Shop Policies" />
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {content}
                </main>
            </div>
        </ThemeProvider>
    );
}

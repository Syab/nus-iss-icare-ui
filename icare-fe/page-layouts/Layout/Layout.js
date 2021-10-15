import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import {
    Dashboard, Description, ExpandMore, ExpandLess, NoteAdd, Publish, History,
    Shop, Class
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
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
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Layout(props) {
    const {content} = props
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [listCOpen, setListCOpen] = React.useState(false);
    const [listPOpen, setListPOpen] = React.useState(false);

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

    return (
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
                    <Typography variant="h6" noWrap>
                        <strong>insuranceCare</strong>
                    </Typography>
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
                        <ListItem button>
                            <ListItemIcon><Dashboard /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={handleCClick}>
                        <ListItemIcon><Description /></ListItemIcon>
                        <ListItemText primary="Claims" />
                        {listCOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={listCOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href='/claimManagement/claimSubmit'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon><Publish /></ListItemIcon>
                                    <ListItemText primary="Submit Claim" />
                                </ListItem>
                            </Link>
                            <Link href='/claimManagement/claimHistory'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon><History /></ListItemIcon>
                                    <ListItemText primary="Claim History" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handlePClick}>
                        <ListItemIcon><NoteAdd /></ListItemIcon>
                        <ListItemText primary="Policies" />
                        {listPOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={listPOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href='/policyManagement/viewPolicy'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon><Class /></ListItemIcon>
                                    <ListItemText primary="My Policies" />
                                </ListItem>
                            </Link>
                            <Link href='/policyManagement/searchPolicy'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon><Shop/></ListItemIcon>
                                    <ListItemText primary="Shop Policies" />
                                </ListItem>
                            </Link>

                        </List>
                    </Collapse>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {content}
            </main>
        </div>
    );
}

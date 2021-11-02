import React, { Fragment, useState } from "react";
// import {useRouter} from "next/router";
// import styles from "../styles/Page.module.css"
import {Box, Button, List, ListItem, TextField, FormControl, InputAdornment, IconButton
} from "@material-ui/core";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SecurityIcon from '@material-ui/icons/Security';
import LockIcon from '@material-ui/icons/Lock';
import useStyles from "../utils/mstyles";
import { signIn, useSession} from 'next-auth/client';
import {SERVER} from "../config";


export default function LoginForm(){

    // const router = useRouter()
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        signIn(
            'credentials', {
                username,
                password,
                callbackUrl: `${SERVER}/dashboard`
            }
        )
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = e => {
        e.preventDefault()
    }

    return(
        <div>
            <form>
                <FormControl>
                    <List>
                        <ListItem>
                            <TextField
                                variant="outlined"
                                className={classes.loginForm}
                                fullWidth
                                id="username"
                                label="Username or Email"
                                onChange={e => setUsername(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle color="primary"/>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="password"
                                label="Passowrd"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon color="primary"/>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <Button
                                onClick={handleLogin}
                                fullWidth
                                className={classes.loginButton}
                                endIcon={<ExitToAppIcon/>}
                            >
                                LOGIN
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth
                                    className={classes.loginGHButton}
                                    endIcon={<GitHubIcon/>}
                            >
                                LOGIN WITH GITHUB
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={handleLogin}
                                    fullWidth
                                    className={classes.loginGHButton}
                                    endIcon={<SecurityIcon/>}
                            >
                                LOGIN WITH NEXTAUTH
                            </Button>
                        </ListItem>
                    </List>
                </FormControl>
            </form>

        </div>
            );
}

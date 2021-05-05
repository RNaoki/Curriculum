import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {
    setOpen: Function
}

export default function Header(props: HeaderProps) {
    return <AppBar position="static">
        <Toolbar>
            <IconButton onClick={() => props.setOpen(true)} edge="start" aria-label="menu">
                <MenuIcon style={{ color: "white" }} />
            </IconButton>
        </Toolbar>
    </AppBar >
}
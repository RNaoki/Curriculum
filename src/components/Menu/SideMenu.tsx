import { Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface SideMenuProps {
    open: boolean,
    setOpen: Function
}

export default function SideMenu(props: SideMenuProps) {
    return <Drawer open={props.open} >
        <Toolbar style={{ backgroundColor: "#1C2541" }} >
            <IconButton onClick={() => props.setOpen(false)} edge="start" aria-label="menu">
                <ArrowBackIosIcon style={{ color: "rgb(226, 225, 225)" }} />
            </IconButton>
        </Toolbar>
        <List>
            {['Curriculo', 'Sobre', 'Contatos'].map((text) => (
                <ListItem button key={text} style={{ width: '300px' }}>
                    <ListItemText style={{ paddingLeft: '20px' }} primary={text} />
                </ListItem>
            ))}
        </List>
    </Drawer>
}
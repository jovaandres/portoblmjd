import React, { useState } from "react";
import {
    AppBar, Toolbar, Button, makeStyles, Grid, Hidden,
    ListItem, ListItemText, ListItemIcon, Drawer
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../Routes/routes";
import "./Navbar.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        backdropFilter: 'blur(12px)',
    },
    menuButton: {
        alignSelf: 'center'
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        background: "rgba(240, 143, 192, 0.9)",
    },
    text: {
        color: "white",
    },
    icon: {
        color: "white",
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
    const closeDrawer = () => {
        setDrawer(false);
    }
    const openDrawer = () => {
        setDrawer(true);
    }

    return (
        <AppBar color="transparent" className={classes.root}>
            <Toolbar className={classes.menuButton}>
                <Hidden xsDown>
                    <Grid container justify="center" spacing={5}>
                        {mainRoutes.map((d) => (
                            <Grid item key={d.path}>
                                <Button component={NavLink} to={d.path}>
                                    {d.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Button className={classes.menuButton} startIcon={<Menu />} edge="start" aria-label="menu" onClick={openDrawer}>
                        Menu
                    </Button>
                    <Drawer anchor="top" open={drawer} onClose={closeDrawer} classes={{ paper: classes.paper }}>
                        {mainRoutes.map((d) => (
                            <ListItem button component={NavLink} to={d.path} key={d.path}>
                                <ListItemIcon className={classes.icon}>{<d.icon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.text }}>{d.label}</ListItemText>
                            </ListItem>
                        ))}
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
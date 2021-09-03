import React, { useContext } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItemText,
  ListItem,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";

import { ChevronLeft, Menu, ChevronRight } from "@material-ui/icons";
import useStyles from "../hooks/useStyles";
import { modules } from "../constants";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const LayoutDrawer = ({ children }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const {
    dispatch,
    globalState: { title, login },
  } = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
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
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {modules.map((module, index) => (
            <ListItem
              button
              key={module.name}
              onClick={() => {
                history.push(module.path);
                dispatch({
                  type: "changeTitle",
                  payload: module.name.toUpperCase(),
                });
              }}
            >
              <ListItemIcon>{module.icon}</ListItemIcon>
              <ListItemText primary={module.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default LayoutDrawer;

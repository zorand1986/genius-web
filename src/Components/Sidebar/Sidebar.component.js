import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderIcon from "@material-ui/icons/Folder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  sidebarTop: {
    margin: "5px 0",
    color: "black",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Sidebar = ({ open, toggleSidebar }) => {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleSidebar}
      onKeyDown={toggleSidebar}
    >
      <List>
        <ListItem className={classes.sidebarTop}>
          <ListItemIcon>
            <EmojiObjectsIcon />
          </ListItemIcon>
          <ListItemText>Genius</ListItemText>
        </ListItem>
        <Divider />
        <Link to="/" className={classes.link}>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/about" className={classes.link}>
          <ListItem button key={"About"}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>
        <Link to="/dashboard" className={classes.link}>
          <ListItem button key={"Dashboard"}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
        </Link>
        <List component="div" disablePadding>
          <Link className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Deck1" />
            </ListItem>
          </Link>
          <Link className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Deck2" />
            </ListItem>
          </Link>
          <Link className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Deck3" />
            </ListItem>
          </Link>
          <Link className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Deck4" />
            </ListItem>
          </Link>
        </List>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Logout"}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleSidebar}>left</Button> */}
      <Drawer anchor={"left"} open={open} onClose={toggleSidebar}>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Sidebar;

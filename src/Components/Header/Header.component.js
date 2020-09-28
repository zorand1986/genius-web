import React from "react";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./Header.styles";


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.barWrapper} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Genius Flashcards
          </Typography>
          <Link to="/">
            <Button className={classes.linkButton}>Home</Button>
          </Link>
          <Link to="/about">
            <Button className={classes.linkButton} color="inherit">About</Button>
          </Link>
          <Link to="/dashboard">
            <Button className={classes.linkButton}>Dashboard</Button>
          </Link>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;

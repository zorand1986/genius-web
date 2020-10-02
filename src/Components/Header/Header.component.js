import React, { useContext } from "react";
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
import { AuthContext } from "Contexts/AuthContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

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
          {isLoggedIn && (
              <Link to="/dashboard">
              <Button className={classes.linkButton}>Dashboard</Button>
            </Link>
          )}
          {isLoggedIn ? <Button color="inherit" onClick={() => setIsLoggedIn(false)}>Signout</Button> : (
            <>
              <Button color="inherit" onClick={() => setIsLoggedIn(true)}>Signin</Button>
              <Button color="inherit">Sign up</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;

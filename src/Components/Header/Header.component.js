import React, { useContext, useState } from "react";
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
import Sidebar from "Components/Sidebar";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <AppBar className={classes.barWrapper} position="static">
        <Toolbar>
          <IconButton onClick={toggleSidebar} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Genius Flashcards
          </Typography>
          <Link to="/" className={classes.linkButton}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" className={classes.linkButton}>
            <Button color="inherit" >About</Button>
          </Link>
          {isLoggedIn && (
              <Link to="/dashboard" className={classes.linkButton}>
              <Button color="inherit">Dashboard</Button>
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

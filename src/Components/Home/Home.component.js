import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";

import useStyles from './Home.styles'

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <Typography className={classes.headline} align="right" variant="h1">Genius Flashcards</Typography>
        <Typography align="right" style={{ color: "#aaa" }} variant="h4">Simple.Customizable.Shareable.</Typography>
        <div style={{ textAlign: "center" }}>
          <Typography gutterBottom style={{ color: "#fff", marginTop: "90px" }} variant="h2">How does it work?</Typography>
          {/*<Typography>*/}
          {/*  It's simple. Just create account in just a few easy steps and start creating your knowledge database. When you're done, simply download our app to your phone from GooglePlay or AppStore and start your learning journey!*/}
          {/*</Typography>*/}
          <Box mx={10} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Paper elevation={3} style={{ height: "300px", width: "100%", margin: "10px", padding: "10px" }}>
              <Typography variant="h5">Create Account</Typography>
              <Typography variant="body1">Simply choose email and password and remember those. You will use the same to log in to the mobile app.</Typography>
            </Paper>
            <Paper elevation={3} style={{ height: "300px", width: "100%", margin: "10px", padding: "10px" }}>
              <Typography variant="h5">Input data</Typography>
              <Typography variant="body1">Input data using our super-fast form with smart features or upload excel table if that's easier for you.</Typography>
            </Paper>
            <Paper elevation={3} style={{ height: "300px", width: "100%", margin: "10px", padding: "10px" }}>
              <Typography variant="h5">Download our app</Typography>
              <Typography variant="body1">Weather you are using iphone or android-based phone, we are available on Google Play Store or App store.</Typography>
            </Paper>
          </Box>

        </div>
      </div>
      <div className={classes.rightWrapper}></div>
    </Container>
  )
}

export default Home;

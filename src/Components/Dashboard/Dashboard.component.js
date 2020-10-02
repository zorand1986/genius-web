import React from "react";
import Container from "@material-ui/core/Container";

import useStyles from "./Dashboard.styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import DeckItem from "Components/DeckItem";


const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <h1 className={classes.headline}>Dashboard</h1>
      <List dense={true}>
        <DeckItem/>
        <DeckItem/>
        <DeckItem/>
        <ListItem item>
          <Button>Add new deck</Button>
        </ListItem>
      </List>
    </Container>
  )
}

export default Dashboard;

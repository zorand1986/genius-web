import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import DeckItem from "Components/DeckItem";

import useStyles from "./Dashboard.styles";


const Dashboard = () => {
  const classes = useStyles();
  const [decks, setDecks] = useState([{id: 1, name: "New deck 1"},
  {id: 2, name: "New deck 2"},
  {id: 3, name: "New deck 3"},
  {id: 4, name: "New deck 4"}]);
  const [addDeck, setAddDeck] = useState(false);
  const [addFieldValue, setAddFieldValue] = useState("");

  const addNewDeck = () => {
    decks.push({id: decks.length + 1, name: addFieldValue});
    setAddFieldValue("");
    setAddDeck(false);
  }

  const removeDeck = id => {
    console.log("deleting...", id)
    setDecks(decks.filter(deck => deck.id !== id));
  }

  return (
    <Container maxWidth="md">
      <h1 className={classes.headline}>Dashboard</h1>
      <List dense={true}>
        {decks.map(deck => (
          <DeckItem id={deck.id} removeDeck={removeDeck} key={deck.id} name={deck.name}/>
        ))}
        {addDeck ? (
          <ListItem> 
          <FormControl fullWidth className={classes.addRow} style={{display: "flex", flexDirection: "row"}}>
              <InputLabel htmlFor="my-input">How would you like to call your new deck?</InputLabel>
              <Input value={addFieldValue} onChange={e => setAddFieldValue(e.target.value)} id="my-input" aria-describedby="my-helper-text" style={{ flex: 1 }} />
              <Button color="secondary" onClick={addNewDeck}>
                <AddBoxIcon style={{ marginRight: "12px" }}/>
                <Typography>Add</Typography>
              </Button>
          </FormControl>
          </ListItem>
        ) : (
          <ListItem>
          <Button 
            variant="outlined" 
            color="secondary" 
            className={classes.addRow} 
            onClick={() => setAddDeck(true)}
          >
            <AddBoxIcon style={{ marginRight: "12px" }}/>
            <Typography>
            Add new deck
            </Typography>
          </Button>
        </ListItem>
        )}
      </List>
    </Container>
  )
}

export default Dashboard;

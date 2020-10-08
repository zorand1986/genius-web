import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import CardItem from "Components/CardItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import useStyles from "./Deck.styles";

const Deck = (props) => {
  const [fieldValues, setFieldValues] = useState({
    front: "",
    back: "",
  });
  const [deckFakeData, setFakeDeckData] = useState([
    { id: uuid(), front: "to do", back: "raditi", level: 0 },
    { id: uuid(), front: "to take", back: "uzeti", level: 1 },
    { id: uuid(), front: "bird", back: "ptica", level: 3 },
    { id: uuid(), front: "plane", back: "avion", level: 1 },
    { id: uuid(), front: "road", back: "put", level: 5 },
    { id: uuid(), front: "chair", back: "stolica", level: 8 },
    { id: uuid(), front: "table", back: "sto", level: 7 },
    { id: uuid(), front: "mug", back: "solja", level: 1 },
    { id: uuid(), front: "windiw", back: "prozor", level: 3 },
    { id: uuid(), front: "door", back: "vrata", level: 0 },
    { id: uuid(), front: "boy", back: "decak", level: 2 },
  ]);
  const [editing, setEditing] = useState(false);
  const classes = useStyles();

  const addNewCard = (e) => {
    e.preventDefault();
    console.log({ fieldValues });
    setFakeDeckData([
      { id: uuid(), ...fieldValues, level: 0 },
      ...deckFakeData,
    ]);
    setFieldValues({ front: "", back: "" });
  };

  const removeCard = (id) => {
    const newDeck = deckFakeData.filter((card) => card.id !== id);
    setFakeDeckData(newDeck);
  };

  const editCard = (id, front, back) => {
    const newDeck = deckFakeData.map((card) => {
      if (card.id === id) {
        return { ...card, front, back };
      }
      return card;
    });
    setFakeDeckData(newDeck);
    setEditing(false);
  };

  const resetLevel = (id) => {
    const newDeck = deckFakeData.map((card) => {
      if (card.id === id) {
        return { ...card, level: 0 };
      }
      return card;
    });
    setFakeDeckData(newDeck);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [deckFakeData]);

  const inputRef = React.useRef();

  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Typography variant="h2" align="center">
        Deck name
      </Typography>
      <Paper elevation={9} className={classes.addPaperWrapper}>
        <form className={classes.formWrapper} onSubmit={addNewCard}>
          <TextField
            placeholder="Front"
            value={fieldValues.front}
            onChange={(e) =>
              setFieldValues({ ...fieldValues, front: e.target.value })
            }
            inputRef={inputRef}
          />
          <TextField
            placeholder="Back"
            value={fieldValues.back}
            onChange={(e) =>
              setFieldValues({ ...fieldValues, back: e.target.value })
            }
          />
          <Button
            type="submit"
            size="small"
            variant="contained"
            onClick={addNewCard}
            color="primary"
          >
            Add
          </Button>
        </form>
      </Paper>

      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "38%" }} align="center">
                FRONT
              </TableCell>
              <TableCell style={{ width: "38%" }} align="center">
                BACK
              </TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                LEVEL
              </TableCell>
              <TableCell style={{ minWidth: "90px" }} align="center">
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deckFakeData.map((row) => (
              <CardItem
                removeCard={removeCard}
                editCard={editCard}
                resetLevel={resetLevel}
                editing={editing}
                setEditing={setEditing}
                key={row.id}
                card={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Deck;

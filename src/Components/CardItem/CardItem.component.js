import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CardItem = ({ card, removeCard, editCard, resetLevel }) => {
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({ front: "", back: "" });

  const handleRemove = () => {
    removeCard(card.id);
  };

  const toggleEditing = () => {
    setEditData({ front: card.front, back: card.back });
    setEditing(true);
  };

  const handleEditing = (e) => {
    e.preventDefault();
    editCard(card.id, editData.front, editData.back);
    setEditing(false);
  };

  const handleReset = () => {
    resetLevel(card.id);
  };

  return (
    <TableRow>
      <TableCell align="center" component="th" scope="row">
        {editing ? (
          <TextField
            placeholder="Front"
            inputProps={{ style: { textAlign: "center" } }}
            value={editData.front}
            onChange={(e) =>
              setEditData({ ...editData, front: e.target.value })
            }
          />
        ) : (
          card.front
        )}
      </TableCell>
      <TableCell align="center">
        {editing ? (
          <TextField
            placeholder="Back"
            inputProps={{ style: { textAlign: "center" } }}
            value={editData.back}
            onChange={(e) => setEditData({ ...editData, back: e.target.value })}
          />
        ) : (
          card.back
        )}
      </TableCell>
      <TableCell align="center">{editing ? "" : card.level}</TableCell>
      <TableCell align="center">
        {editing ? (
          <Button
            type="submit"
            size="small"
            variant="contained"
            onClick={handleEditing}
            color="primary"
          >
            Edit
          </Button>
        ) : (
          <>
            <IconButton
              onClick={handleRemove}
              edge="end"
              aria-label="delete"
              style={{ padding: "6px 12px" }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={toggleEditing}
              edge="end"
              aria-label="delete"
              style={{ padding: "6px 12px" }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleReset}
              edge="end"
              aria-label="delete"
              style={{ padding: "6px 12px" }}
            >
              <RotateLeftIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default CardItem;

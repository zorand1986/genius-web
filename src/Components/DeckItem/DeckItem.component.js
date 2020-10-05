import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from "./DeckItem.styles";

const DeckItem = ({id, name, removeDeck}) => {
  const classes = useStyles();
    const handleRemove = e => {
      console.log({e});
      e.stopPropagation();
      removeDeck(id);
    }
    
    return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <Link className={classes.deckLink} to={`/dashboard/deck/${id}`}>
          <ListItemText
            primary={name}
          />
          </Link>
        <ListItemSecondaryAction style={{ zIndex: 100 }}>
          <IconButton edge="end" aria-label="delete" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
}

export default DeckItem;
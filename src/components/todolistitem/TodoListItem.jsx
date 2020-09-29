import React  from "react";

import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const TodoListItem = (props => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutlinedIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

export default TodoListItem;

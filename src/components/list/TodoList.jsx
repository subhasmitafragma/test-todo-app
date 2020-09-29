import React from "react";
import { List, Paper, Grid } from "@material-ui/core";

import TodoListItem from '../todolistitem/TodoListItem'

const TodoList = props =>{
  return (
    <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {props.items.map((todo, id) => (
            <TodoListItem
              {...todo}
              key={id}
              divider={id !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(id)}
              onCheckBoxToggle={() => props.onItemCheck(id)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
  )
}

export default TodoList;

import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = (props => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={6} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={6} md={1} item>
        <Button
        id="primary"
          fullWidth
          color="primary"
          variant="outlined"
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
));

export default AddTodo;
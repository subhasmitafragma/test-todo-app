import "./styles.css";

import React,{useState}from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";

import AddTodo from './components/addtodo/Addtodo'
import TodoList from "./components/list/TodoList";


const TodoApp = (props => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  const clearInput = ()=>{
    setInputValue("")
  }
  
  const onHandleChange = e =>{
    setInputValue(e.target.value)
  }
   
  const addTodo =  text => {
    if (text !== "") {
      setTodos(
        todos.concat({
          text,
          checked: false
        })
      );
    }
  }

  const checkTodo = id => {
    setTodos(
      todos.map((todo, index) => {
        if (id === index) {
          todo.checked = !todo.checked;
        }

        return todo;
      })
    );
  }

  const removeTodo = id => {
    setTodos(todos.filter((todo, index) => id !== index));
  }


  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={onHandleChange}
        onButtonClick={clearInputAndAddTodo}
      />
      <TodoList
        items={todos}
        onItemCheck={id => checkTodo(id)}
        onItemRemove={id => removeTodo(id)}
      />
    </Layout>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
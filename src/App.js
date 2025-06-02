import React, { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';


function App() {
  const onDelete= (todo) =>{
    console.log("I am onDelete of todo");
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo =(title, desc) => {
    console.log("I am adding this todo", title, desc);
  }

    const [ todos, setTodos ] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to exercise"
    }
  ]);

    
  return (
    <>
      <Header  title= "MyTodoList" />
      <AddTodo addTodo={addTodo}/>
      <Todos  todos={todos} onDelete={onDelete}/>
      <Footer />

    </>
  );
}

export default App;

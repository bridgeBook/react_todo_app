import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodo } from "./components/CompleteTodo";
import "./style.css";


export const Todo = () => {

  const[todoText, setTodoText] = useState("");
  const[testText, setTestText] = useState("");

  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos,setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return (setTestText("※未入力です"));
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
    setTestText("");
  }

  const onClickDelete = (index) => {
    const newTodos= [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos= [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos= [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newBackTodos =[...incompleteTodos,completeTodos[index]];
    setincompleteTodos(newBackTodos);
    setcompleteTodos(newCompleteTodos);

  }

  const disabledNum = 5;
  const MAX = incompleteTodos.length >= disabledNum

  return(
    <>
    <InputTodo 
      todoText={todoText} 
      onChangeTodoText={onChangeTodoText} 
      onClickAdd={onClickAdd}
      testText={testText}
      disabled={MAX} 
    />

    {MAX && (
      <p style={{
        color: "red",
        paddingLeft: "15px"
      }}>
        登録できるTODOは{disabledNum}個まで
      </p>
    )}

    <IncompleteTodos
      incompleteTodos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />

    <CompleteTodo 
      completeTodos={completeTodos}
      onClickBack={onClickBack}
    />
    </>
    )
  };
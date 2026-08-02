import React, { useEffect, useState } from "react";
import ListsTodo from "./ListsTodo";
import TodoForm from "./TodoForm";
import axios from "axios";
import EditForm from "./editForm";

export default function TodolistComponent() {
  let [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  let [todoValue, setTodoValue] = useState(""); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string
  // let [edit, setEdit] = useState(false);
  // let [pickEdit, setPickEdit] = useState({});
  const [isEditing, setIsEditing] = React.useState(false); //Membuka dan menutup EditForm
  const [pickTodo, setPickTodo] = React.useState({});

  function idGenerator() {
    return Date.now();
  }
  const getTodo = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      const data = await res.data;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, [setTodos]);

  console.log(todoValue);

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = async (e) => {
    e.preventDefault(); //avoid re-render react
    if (todoValue === "") return; //validasi dulu, cek di dalma form ada tulisan
    const add = {
      id: idGenerator(),
      todo: todoValue,
    };
    await axios.post("http://localhost:3000/todos", add);
    setTodos([...todos, add]);
    setTodoValue("");
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    const todoFilter = todos.filter((item) => item.id !== id);
    setTodos(todoFilter);
  };

  const editTodoClick = (list) => {
    setIsEditing(true);
    setPickTodo({ ...list });
  };

  const editTodoFromInputChange = (e, id) => {
    setPickTodo({ ...pickTodo, todo: e.target.value });
  };

  const submitEditForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/todos/${pickTodo.id}`, pickTodo);
    //Database decentral - web3
    updateItemOnState(pickTodo.id, pickTodo);
  };

  const updateItemOnState = (pickId, updatePickTodo) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === pickId ? updatePickTodo : todo;
    });
    setIsEditing(false);
    setTodos(updateTodo);
  };

  return (
    <div>
      {isEditing ? (
        <EditForm
          currentTodo={pickTodo}
          setIsEditing={setIsEditing}
          editTodo={editTodoFromInputChange}
          updateDataSubmit={submitEditForm}
        />
      ) : (
        <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue} />
      )}
      <hr />
      <ListsTodo data={todos} del={deleteTodo} edit={editTodoClick} />
    </div>
  );
}

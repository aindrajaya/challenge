import React, { useState, useEffect } from "react";
import axios from "axios";
import uuidv4 from "uuidv4";
import ListsTodo from "./ListsTodo";
import TodoForm from "./TodoForm";
import EditForm from "./EditTodo";

export default function TodolistComponent() {
  // const [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  const [todoValue, setTodoValue] = useState(""); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string
  const [todos2, setTodos2] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list

  const [sedangDiedit, setSedangDiedit] = React.useState(false); //membuka dan menutup edit form
  const [pickTodo, setPickTodo] = React.useState({}); //mengambil todolist yang mau diedit
  console.log(pickTodo);

  const getTodo = async () => {
    try {
      const res = await axios.get("http://localhost:3008/todos");
      const data = await res.data;
      setTodos2(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, [pickTodo]);

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = async (e) => {
    e.preventDefault();
    if (todoValue === "") return; //Mengecek apakah di form ada tulisan
    const add = {
      id: uuidv4(),
      activity: todoValue,
    };
    await axios.post("http://localhost:3008/todos", add);
    setTodos2([...todos2, add]);
    setTodoValue("");
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos2.filter((item) => item.id !== id);
    setTodos2(todoFilter);
  };

  //fungsi membuka form edit
  const editTodoClick = (todo) => {
    setSedangDiedit(true);
    setPickTodo({ ...todo });
  };

  const editTodoFromInputChange = (e) => {
    setPickTodo({ ...pickTodo, activity: e.target.value });
  };

  //mengirim hasil dari perubahan edit
  const submitEditForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3008/todos/${pickTodo.id}`, pickTodo);
    updateItemOnState(pickTodo.id, pickTodo);
  };

  const updateItemOnState = (pickID, updatePickActivity) => {
    const updateActivity = todos2.map((activity) => {
      return todos2.id === pickID ? updatePickActivity : activity;
    });
    setSedangDiedit(false);
    setTodos2(updateActivity);
  };

  return (
    <div>
      {sedangDiedit ? (
        <EditForm
          currentTodo={pickTodo}
          setSedangDiedit={setSedangDiedit}
          editTodo={editTodoFromInputChange}
          updateDataSubmit={submitEditForm}
        />
      ) : (
        <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue} />
      )}
      <hr />
      <ListsTodo data={todos2} del={deleteTodo} edit={editTodoClick} />
    </div>
  );
}

import React, { useState, useReducer, useContext, useEffect } from "react";
import TodoContext from "./todo-context";
// import axios from "axios";
import { uuid } from "uuidv4";

export default function TodoListWithContext() {
  const [todo, setTodo] = useState(""); //todo untuk menyimpan hasil dari element input
  const { addTodo, deleteTodo, loadTodos, todos } = useContext(TodoContext); //jadi page todolist bisa memakai fungsi untuk memanipulasi state global/ atau state global itu sendiri dari TodoState dan TodoContext

  const submit = async (e) => {
    e.preventDefault();
    if (todo === "") return; //validasi jika todo nya kosong, maka tidak bisa jala
    const newTodo = {
      id: uuid(),
      todo: todo
    };
    // await axios.post("http://localhost:3006/todossss", newTodo)
    addTodo(newTodo); //addTodo merupakan state dari TodoState
    setTodo("");
  };

  //dia akan mengeluarkan data dari sever/ load data from server
  useEffect(() => {
    const getAllTodos = async () => {
      const data = await loadTodos();
      console.log(data);
      //cek data contact untuk merender seluruh contact yg ada
      if (data) setTodo(data);
    };
    getAllTodos();
  }, []);

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} //untuk menyimpan pergantian value dari form input
          placeholder="Masukan Todolist..."
        />
        <button>Tambah</button>
      </form>

      {todos.map((item) => (
        <ul>
          <li>{item.todo}</li>
          <button onClick={() => deleteTodo(item.id)}>X</button>
        </ul>
      ))}
    </div>
  );
}

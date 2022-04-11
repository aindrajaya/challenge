import axios from "axios";
import React, { useReducer, useEffect } from "react";
import TodoContext from "./todo-context";
import { reducer } from "./todo-reducer";
//jangan lupa install lalu import library axios

//berfungsi untuk menjalankan logic memanipulasi data dari global state/ server
const TodoState = (props) => {
  const initState = {
    todos: [],
    count: 3
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const loadTodos = async () => {
    const res = await axios.get("http://localhost:3006/todos"); //ini fungsi untuk berinteraksi dgn server
    await dispatch({
      type: "LOAD_TODO",
      payload: res.data
    }); //ini fungsin untuk berinteraksi dgn global state
    console.log(res.data);
  };

  const deleteTodo = async (id) => {
    await axios.delete("http://localhost:3006/todos", id);
    await dispatch({
      type: "DELETE_TODO",
      payload: id
    });
  };

  const addTodo = async (todo) => {
    await axios.post("http://localhost:3006/todos", todo); //ini fungsi untuk berinteraksi dgn server
    await dispatch({
      type: "ADD_TODO",
      payload: todo //dia masukin data baru variable bernama todo
    }); //ini fungsin untuk berinteraksi dgn global state
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos, //ini state yang dikirim
        loadTodos, //function yang dikirim/disebar ke child
        addTodo, //function yang dikirim/disebar ke child
        deleteTodo //function yang dikirim/disebar ke child
      }}
    >
      {props.children}
      {/*sebagai children yang bisa akses state dari TodoState. contoh TodoListWithContext */}
    </TodoContext.Provider>
  );
};

export default TodoState;

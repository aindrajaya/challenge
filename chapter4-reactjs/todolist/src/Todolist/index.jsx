import React, { useEffect, useState } from 'react';
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';
import uuidv4 from 'uuidv4';
import axios from 'axios';
import EditForm from './EditForm';

export default function TodolistComponent() {
  let [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  let [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string

  // edit
  const [isEditing, setIsEditing] = React.useState(false);
  const [pickTodo, setPickTodo] = React.useState({});

  // async func
  const getTodo = async () => {
    try {
      const res = await axios.get('http://localhost:3008/todos');
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
    if (todoValue === '') return; //validasi dulu, cek di dalma form ada tulisan
    const add = {
      id: uuidv4(),
      todo: todoValue,
    };
    await axios.post('http://localhost:3008/todos', add);
    setTodos([...todos, add]); //update data di variable todos, menambahkan todolist item
    setTodoValue(''); //mengosongkan kembali form
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos.filter((item) => item.id !== id); //proses filtering
    setTodos(todoFilter);
  };

  // membuka form edit
  const editTodoClick = (todo) => {
    setIsEditing(true);
    setPickTodo({ ...todo });
  };

  const editTodoFfromInputChange = (e) => {
    setPickTodo({ ...pickTodo, todo: e.target.value });
  };

  // mengirim hasil ke state dan juga json server
  const submitEditForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3008/todos/${pickTodo.id}`, pickTodo);
    updateItemOnState(pickTodo.id, pickTodo);
  };

  // update item di statenya
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
          editTodo={editTodoFfromInputChange}
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

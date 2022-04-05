import React, { useEffect, useState } from 'react'
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';
import axios from 'axios';
import uuidv4 from 'uuidv4';
import EditForm from './EditForm';

export default function TodolistComponent() {
  let [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  let [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string

  const [isEdit, setIsEdit] = useState(false); //Membuka dan menutup edit form
  const [pickTodo, setPickTodo] = useState([]); //Mengambil todolist yang dipick atau diclick
  console.log(pickTodo);

  const getTodo = async () => {
    try {
      const res = await axios.get('http://localhost:3008/todos')
      const data = await res.data
      setTodos(data)
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getTodo()
  }, [setTodos])

  console.log(todoValue);

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = async (e) => {
    e.preventDefault(); //avoid re-render react
    if(todoValue === "") return; //validasi dulu, cek di dalma form ada tulisan
    const add = {
      id: uuidv4(),
      todo: todoValue
    };
    await axios.post('http://localhost:3008/todos', add)
    setTodos([...todos, add]) //update data di variable todos, menambahkan todolist item
    setTodoValue('') //mengosongkan kembali form
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos.filter((item) => item.id !== id) //proses filtering
    setTodos(todoFilter)
  }

  // Fungsi membuka form edit todo
  const editTodo = (todo) => {
    setIsEdit(true);
    setPickTodo({...todo});
  }

  const editTodoOnChange = (e) => {
    setPickTodo({...pickTodo, todo: e.target.value})
  }

  // Mengirim hasil ke json server dan state
  const submitEditForm = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3008/todos/${pickTodo.id}`, pickTodo)
  }

  const updateItemOnState = (pickId, updatePickTodo) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === pickId ? updatePickTodo : todo;
    });
    setIsEdit(false);
    setTodoValue(updateTodo);
  }

  return (
    <div>
      {isEdit ? (<EditForm currentTodo={pickTodo} setIsEdit={setIsEdit} editTodo={editTodoOnChange} updateDataSubmit={submitEditForm} />) : (<TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>)}
      <hr />
      <ListsTodo data={todos} del={deleteTodo} edit={editTodo} />
    </div>
  )
}

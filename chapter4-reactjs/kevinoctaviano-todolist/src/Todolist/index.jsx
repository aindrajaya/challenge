import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuidv4 from 'uuidv4';
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';
// import EditTodo from './EditTodo';

export default function TodolistComponent() {
  // const [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  const [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string
  const [todos2, setTodos2] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list

  const getTodo = async() => {
    try {
      const res = await axios.get('http://localhost:3008/todos');
      const data = await res.data;
      setTodos2(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodo();
  }, [])
  

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = async(e) => {
    e.preventDefault();
    if(todoValue === '') return; //Mengecek apakah di form ada tulisan
    const add = { 
      id: uuidv4(),
      activity: todoValue
    }
    await axios.post('http://localhost:3008/todos', add)
    setTodos2([...todos2 ,add])
    setTodoValue('');
  }

  const deleteTodo = async(id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos2.filter((item) => item.id !== id)
    setTodos2(todoFilter)
  }

  // const updateTodo = async(todoItem) => {
  //   const res = await axios.put(`http://localhost:3008/todos/${todoItem}`, todoItem);
  //   const {id, todo} = res.data;
  //   setTodos2(
  //     todos2.map((todoItem2) => {
  //       return todoItem2.id === id ? {...res.data} : todoItem2;
  //     })
  //   )
  // }

  return (
    <div>
      <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>
      <hr />
      <ListsTodo data={todos2} del={deleteTodo}/>
      {/* <EditTodo data={todos2} update={updateEvent} /> */}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';
import axios from 'axios';
import uuidv4 from 'uuidv4';
import EditTodolist from './EditTodo';

export default function TodolistComponent() {
  let [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  let [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string

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
    const todoAdd = {
      id: uuidv4(),
      todo: todoValue
    };

    await axios.post('http://localhost:3008/todos', todoAdd)
    setTodos2([...todos2, todoAdd]) //update data di variable todos, menambahkan todolist item
    setTodoValue('') //mengosongkan kembali form
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos.filter((item) => item.id !== id) //proses filtering
    setTodos(todoFilter)
  }

  const updateEvent = async (todoItem) => {
    const res = await axios.put(`http://localhost:3008/todos/${todoItem.id}`, todoItem)
    const {id, todo} = res.data //dari axios, lalu di destructuring
    setTodos2(
      todos2.map((todos2Item) => {
        return todos2Item.id === id? {...res.data} : todos2Item
      })
    )
  }


  const getId = (item) => {
    setTodoItem(item) // {id: a, todo: todo}
  }

  return (
    <div>
      <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>
      <hr />
      <ListsTodo data={todos2} del={deleteTodo} getIdToUpdate={getId}/>
      <EditTodolist data={todoItem} update={updateEvent}/>
    </div>
  )
}

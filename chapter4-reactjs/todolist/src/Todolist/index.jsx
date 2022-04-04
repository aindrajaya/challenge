import React, { useEffect, useState } from 'react'
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';
import axios from 'axios';
import uuidv4 from 'uuidv4';

export default function TodolistComponent() {
  let [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  let [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string
  let [todos2, setTodos2] = useState([])

  const getTodo = async () => {
    try {
      const res = await axios.get('http://localhost:3008/todos')
      const data = await res.data
      setTodos2(data)
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getTodo()
  }, [setTodos2])

  console.log(todos2);
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
    setTodos2([...todos2, add]) //update data di variable todos, menambahkan todolist item
    setTodoValue('') //mengosongkan kembali form
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3008/todos/${id}`);
    const todoFilter = todos2.filter((item) => item.id !== id) //proses filtering
    setTodos2(todoFilter)
  }

  return (
    <div>
      <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>
      <hr />
      <ListsTodo data={todos2} del={deleteTodo}/>
    </div>
  )
}

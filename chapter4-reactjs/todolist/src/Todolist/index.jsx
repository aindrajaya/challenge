import React, { useState } from 'react'
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';

export default function TodolistComponent() {
  const [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  const [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = (e) => {
    e.preventDefault()
    const add = [...todos, { 
      id: todos.length + 1,
      task: todoValue
    }]
    setTodos(add)
    setTodoValue('')
  }

  const deleteTodo = (id) => {
    const todoFilter = todos.filter((item) => item.id !== id)
    setTodos(todoFilter)
  }

  return (
    <div>
      <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>
      <hr />
      <ListsTodo data={todos} del={deleteTodo}/>
    </div>
  )
}

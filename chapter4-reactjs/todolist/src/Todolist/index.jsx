import React, { useState } from 'react'
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';

export default function TodolistComponent() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoItem: "ya begitulah"
    }
  ]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  const [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string

  console.log(todoValue);

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = (e) => {
    e.preventDefault(); //avoid re-render react
    const add = [...todos, { //menggunakan spread operator, duplicate array before newData
      id: todos.length + 1,
      todoItem: todoValue
    }]
    setTodos(add) //update data di variable todos, menambahkan todolist item
    setTodoValue('') //mengosongkan kembali form
  }

  const deleteTodo = (id) => {
    const todoFilter = todos.filter((item) => item.id !== id) //proses filtering
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

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import uuidv4 from 'uuidv4';
import EditForm from './EditTodo';
import EditTodoList from './EditTodo';
import ListsTodo from './ListsTodo';
import TodoForm from './TodoForm';

export default function TodolistComponent() {
  const [todos, setTodos] = useState([]); //declare useState dengan data array, sebagai tempat untuk menymipan list
  const [todoValue, setTodoValue] = useState(''); //todoValue sebagai variable untuk menyimpan inputan dari from, berupa string
  const [todos2, setTodos2] = useState([]);
  const [todoItem, setTodoItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [pickTodo, setPickTodo] = useState({})
  console.log(pickTodo);

  const getTodo = async()=>{
    try {
      const res= await axios.get('http://localhost:3006/todos')
      const data = await res.data
      setTodos(data)
    }catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getTodo()
  }, [setTodos])

  console.log(todos)

  // const a = [1, 2, 3]. [...a, 4,5,6] => [1,2,3,4,5,6]
  const addTodo = async (e) => {
    e.preventDefault()
    if(todoValue==="") return;
    const add ={ 
      id: uuidv4(),
      todo: todoValue
    };
    await axios.post('http://localhost:3006/todos', add)
    setTodos( [...todos, add] )
    setTodoValue('')
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3006/todos/${id}`)
    const todoFilter = todos.filter((item) => item.id !== id)
    setTodos(todoFilter)
  }

  const getId = (todo)=>{
    return todo
  }

  const editTodoClick = (todo) => {
    setIsEditing(true);
    setPickTodo({...todo})
  }

  const editTodoFromInputChange = (e) =>{
    setPickTodo({...pickTodo, todo: e.target.value})
  }

  //mengirim hasil ke state
  const submitEditForm = async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:3006/todos/${pickTodo.id}`, pickTodo)
    updateItemOnState(pickTodo.id, pickTodo)
  };

  const updateItemOnState = (pickId, updatePickTodo) =>{
    const updateTodo = todos.map((todo)=>{
      return todo.id === pickId ? updatePickTodo : todo;
    });
    setIsEditing(false) 
    setTodos(updateTodo)
  };
  
  return (
    <div>
      {isEditing ?(
        <EditForm
        currentTodo = {pickTodo}
        setIsEditing = {setIsEditing}
        editTodo={editTodoFromInputChange}
        updateDataSubmit = {submitEditForm}
        />
      ):(
        <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue} editTodo = {editTodoFromInputChange}/>
      )}
      <hr />
      <ListsTodo data={todos} del={deleteTodo} getIdToUpdate={getId} edit={editTodoClick}/>
    </div>
  )
}

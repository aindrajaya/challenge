import React, { useState } from "react";

export default function EditForm({currentTodo, editTodo, updateDataSubmit, setIsEditing}){
    return(
      <form onSubmit={updateDataSubmit}>
        <input
          placeholder='change todo'
          onChange={editTodo}
          value = {currentTodo.todo}
        />
        <button type='submit' onClick={()=>updateDataSubmit}>Edit</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    )
}
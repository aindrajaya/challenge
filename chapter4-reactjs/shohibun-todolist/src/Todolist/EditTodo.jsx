import React from 'react'

export default function EditForm({currentTodo, editTodo, updateDataSubmit, setSedangDiedit}) {
  return (
    <div>
      <form onSubmit={updateDataSubmit}>
          Edit Todo:
        <input
          placeholder='add todo'
          onChange={editTodo}
          value={currentTodo.activity}
        />
        <button type='submit' onClick={() => updateDataSubmit}>Edit</button>
        <button onClick={() => setSedangDiedit(false)}>Cancel</button>
      </form>
    </div>
  )
}


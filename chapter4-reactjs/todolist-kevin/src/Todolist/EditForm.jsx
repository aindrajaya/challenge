import React from 'react'

export default function EditForm({ editTodo, updateDataSubmit, setIsEdit, currentTodo}) {
    return (
        <div>
        <form onSubmit={updateDataSubmit}>
            Edit Todo
            <input
            placeholder='edit todo'
            onChange={editTodo}
            value={currentTodo.todo}
            />
            <button type='submit' onClick={() => updateDataSubmit}>Edit</button>
            <button onClick={() => { setIsEdit(false) }}>Cancel</button>
        </form>
        </div>
    )
}

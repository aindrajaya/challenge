import React from 'react';

export default function EditForm({
  currentTodo,
  editTodo,
  updateDataSubmit,
  setIsEditing,
}) {
  return (
    <div>
      <form onSubmit={updateDataSubmit}>
        <input
          placeholder="add todo"
          onChange={editTodo}
          value={currentTodo.todo}
        />
        <button type="submit" onClick={() => updateDataSubmit}>
          edit
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          cancel
        </button>
      </form>
    </div>
  );
}

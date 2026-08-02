import React from "react";

export default function EditForm({
  currentTodo,
  editTodo,
  updateDataSubmit,
  setIsEditing,
}) {
  return (
    <div>
      <form onSubmit={updateDataSubmit}>
        Edit Todo:
        <input
          placeholder="add todo"
          onChange={editTodo}
          value={currentTodo.todo}
        />
        <button type="submit" onClick={() => updateDataSubmit}>
          Edit
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  );
}

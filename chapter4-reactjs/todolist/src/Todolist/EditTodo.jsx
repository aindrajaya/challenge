import React from 'react'

function EditTodolist({data, update}) {
  const {todo} = data;
  console.log(todo)
  const [listEdit, setListEdit] = React.useState({
    todo: todo
  })

  const updateData = (e) => {
    e.preventDefault();
    // if(listEdit.todo !== ""){
    //   alert("harus diiisi")
    //   return;
    // }
    const {value} = e.target;
    setListEdit(
      {
        todo: value.todo
      }
    )
    update(listEdit);
  }

  return (
    <form onSubmit={updateData}>
      <input
        type="text"
        placeholder={todo}
        onChange={e => e.target.value}
        value={listEdit.todo}
        />
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditTodolist
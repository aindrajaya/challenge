import React from 'react'

export default function TodoForm({value, setValue, klik}) {
  return (
    <div>
      <form onSubmit={klik}>
        Add Todo :
        <input
          placeholder='add todo'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

import React from 'react'

export default function ListsTodo({data, del,edit}) {
  
  return (
    <div>
      <ul>
        {data.map((list, idx) => (
          <div key={idx}>
            {idx+1}. {list.todo}
            <button onClick={() => edit(list)}>Edit</button>
            <button onClick={() => del(list.id)}> Delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'

export default function ListsTodo({data, del, getIdToUpdate}) {
  return (
    <div>
      <ul>
        {data.map((list, idx) => (
          <div key={idx}>
            {idx+1}. {list.todo}
            <span onClick={() => del(list.id)}> X</span>
            <span onClick={() => getIdToUpdate(list)}> Edit</span>
          </div>
        ))}
      </ul>
    </div>
  )
}

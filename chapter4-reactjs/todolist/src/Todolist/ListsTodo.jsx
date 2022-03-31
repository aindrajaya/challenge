import React from 'react'

export default function ListsTodo({data, del}) {
  return (
    <div>
      <ul>
        {data.map((list, idx) => (
          <div key={idx}>
            {list.id}. {list.task}
            <span onClick={() => del(list.id)}> X</span>
          </div>
        ))}
      </ul>
    </div>
  )
}

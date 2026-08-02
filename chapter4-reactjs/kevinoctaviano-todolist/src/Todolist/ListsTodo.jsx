import React from 'react'

export default function ListsTodo({data, del}) {
  return (
    <div>
      <ul>
        {data.map((list, idx) => (
          <div key={idx}>
            {idx+1}. {list.activity}
            <span onClick={() => del(list.id)}> X</span>
            {/* <span onClick={() => update(list.id)}> X</span> */}
          </div>
        ))}
      </ul>
    </div>
  )
}

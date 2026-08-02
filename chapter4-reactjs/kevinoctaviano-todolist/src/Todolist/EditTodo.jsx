// import React, { useState } from 'react'

// export default function EditTodo({data}) {
//     const {id, activity} = data;
//     const [listEdit, setListEdit] = useState({
//         // id: id,
//         activity: activity
//     })

//     const updateData = (e) => {
//         e.preventDefault();
//         if(listEdit.activity === '') {
//             alert("Harus diisi");
//             return;
//         }
//     }
//     return (
//         <div>
//             <form onSubmit={update}>
//                 <input
//                 placeholder='update todo'
//                 onChange={e => setListEdit(e.target.value)}
//                 value={listEdit.activity}
//                 />
//                 <button type='submit'>update</button>
//             </form>
//         </div>
//     )
// }

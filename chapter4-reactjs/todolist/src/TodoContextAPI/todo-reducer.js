//untuk mengubah global state berdasarkan type dan action nya
export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return {
        ...state, //spread operator -> untuk melihat state sebelumnya
        todos: action.payload // -> melakukan perubahan berdasarkan action yg dikirim
      };
    case "ADD_TODO":
      return {
        ...state, // [data array Todos sebelumnya]
        todos: [
          //...state.todos,  // [combine todos sebelumnya + ]
          action.payload // [array sebelumnya + array baru dari payload]
        ],
        count: 3
        //
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter(
            (todo) => todo.id !== action.payload //id yg bukan todo.id! akan disimpan
          )
        ]
      };
    default:
      break;
  }
};

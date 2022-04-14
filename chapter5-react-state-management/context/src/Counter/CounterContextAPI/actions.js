export const increment = (dispatch, max, step, count) => {
  // console.log("data di action", max, step)
  if(count >= max){
    alert("barang sudah habis")
    return count;
  } else {
    dispatch({
      type: "increment",
      payload: {step}
    })
  }
}

export const decrement = (dispatch) => {
  dispatch({
    type: "decrement",
  })
}

export const reset = (dispatch) => {
  dispatch({
    type: "reset",
  })
}
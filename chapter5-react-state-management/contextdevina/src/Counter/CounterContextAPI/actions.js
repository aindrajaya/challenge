export const increment = (dispatch, max, step, count) => {
    // console.log("data di action", max, step)
    if(count >= max){
      alert("Item sudah sampai 5")
      return count;
    } else {
      dispatch({
        type: "increment", //perintah
        payload: {step} //menghubungkan UI dengan data yang akan diolah
      })
    }
  }
  
  export const decrement = (dispatch, min, step, count) => {
    if(count === min){
        alert("Item 0")
        return count;
      } else {
        dispatch({
        type: "decrement",
        payload: {step}
        })
    }
  }
  
  export const reset = (dispatch, min) => {
    dispatch({
      type: "reset",
      payload: {min}
    })
  }
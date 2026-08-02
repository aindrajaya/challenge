export const increment = (dispatch, max, step, count) => {
  // console.log("data di action", max, step)
  if (count >= max) {
    alert("barang sudah habis");
    return count;
  } else {
    dispatch({
      type: "increment",
      payload: { step },
    });
  }
};

export const decrement = (dispatch, min, step, count) => {
  if (count <= min) {
    alert("barang tidak boleh kurang dari 0");
    return count;
  } else {
    dispatch({
      type: "decrement",
      payload: { step },
    });
  }
};

export const reset = (dispatch, count, min) => {
  if (count === min) {
    return count;
  }
  dispatch({
    type: "reset",
    payload: { min },
  });
};

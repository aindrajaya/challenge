// action
export const increment = (dispatch, max, step, count) => {
    if (count >= max) {
        alert("Maximal")
        return count;
    } else {
        dispatch({
            type: "increment",
            payload: {step}
        })
    }
}

export const decrement = (dispatch, min, step, count) => {
    if (count <= min) {
        alert("Minimal")
        return count;
    } else {
        dispatch({
            type: "decrement",
            payload: {step}
        })
    }
}

export const reset = (dispatch) => {
    dispatch({
        type: "reset"
    })
}


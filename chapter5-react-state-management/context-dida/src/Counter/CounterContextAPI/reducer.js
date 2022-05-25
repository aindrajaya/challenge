const reducerContext = (state, action) => {
  const {step, min} = action.payload
  switch (action.type) {
    case "increment":
      return {
        // ...state,
        count: state.count + step
      }
    case "decrement":
      return {
        count: state.count - step
      }
    case "reset":
      return {
        count: min
      }
    default:
      return state;
  }
}

export default reducerContext
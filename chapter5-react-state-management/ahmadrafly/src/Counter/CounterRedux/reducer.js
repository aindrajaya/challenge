const initialState = {
  count: 3,
};
const reducerRedux = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload.step,
      };
    case "decrement":
      return {
        count: state.count - action.payload.step,
      };
    case "reset":
      return {
        count: action.payload.min,
      };
    default:
      return state;
  }
};

export default reducerRedux;

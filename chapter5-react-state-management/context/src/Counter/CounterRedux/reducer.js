const initialState = {
    count: 0
}
// reducer: mengubah 2 value menjadi 1
const reducerRedux = (state = initialState, action) => {
    // const {step} = action.payload
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + action.payload.step
            }

        case "decrement":
            return {
                ...state,
                count: state.count - action.payload.step
            }

        case "reset":
            return {
                count: 0
            }

        default:
            return state;
    }
}

export default reducerRedux;
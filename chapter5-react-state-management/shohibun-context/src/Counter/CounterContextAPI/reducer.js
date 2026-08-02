// reducer: mengubah 2 value menjadi 1
const theReducerContext = (state, action) => {
    const {step} = action.payload
    switch(action.type) {
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
                count: 0
            } 

        default:
            return state;
    }
}

export default theReducerContext;

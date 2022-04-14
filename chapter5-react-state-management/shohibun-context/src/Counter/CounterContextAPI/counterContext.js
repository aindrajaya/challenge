import React, {createContext, useReducer} from "react"
import theReducerContext from "./reducer"

// store: tempat penyimpanan
const initialState = {
    count: 0
}

export const CounterGlobalContext = createContext(initialState)

export const CounterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(theReducerContext, initialState);
    return (
        <CounterGlobalContext.Provider value={{state, dispatch}}>
            {children}
        </CounterGlobalContext.Provider>
    )
}

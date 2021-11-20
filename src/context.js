import React, { useContext, useReducer } from "react";
// import { reducer, initialState } from "./reducer";

const AppContext = React.createContext()    
const AppProvider = ({reducer, initialState, children}) => {

    return <AppContext.Provider value={
        useReducer(reducer, initialState)
    }
    >
        {
            children
        }
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}
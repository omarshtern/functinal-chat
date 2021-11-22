import React, { createContext } from 'react'

const StateContext = createContext()

export default function StateProvider({reducer, initialState}) {
    return (
        <StateContext.Provider>
            {children}
            
        </StateContext.Provider>
    )
}

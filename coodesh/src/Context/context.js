//
import React from 'react'

const ContextManager = React.createContext({
    allusers: [],
    updatingpeople: (id) => null
})
export const ContextProvider = ContextManager.Provider
export default ContextManager
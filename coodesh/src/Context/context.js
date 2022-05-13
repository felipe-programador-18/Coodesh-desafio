import React from 'react'

const ContextManager = React.createContext({
    allusers: []
})
export const ContextProvider = ContextManager.Provider
export default ContextManager
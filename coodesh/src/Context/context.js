import React from 'react'

const ContextManager = React.createContext({
    allusers: [], favoritesusers
})
export const ContextProvider = ContextManager.Provider
export default ContextManager
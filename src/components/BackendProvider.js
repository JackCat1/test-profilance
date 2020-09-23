import React, { createContext, useContext, useEffect, useState } from 'react'
import Backend from '../services/backend'

const BackendCtx = createContext(null)

export const BackendProvider=({children}) =>{
    const backendServ = new Backend()
    const [backend,setBackend] = useState(backendServ)
    useEffect(()=>{
        return ()=>setBackend(null)
    },[])
    return (
        <BackendCtx.Provider value={backend}>
            {children}
        </BackendCtx.Provider>
    )
}
export const useBackend = ()=>useContext(BackendCtx)
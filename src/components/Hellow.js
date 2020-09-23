import React from 'react'
import { useSelector } from 'react-redux'
export const Hellow = ()=>{
    const {user} = useSelector(state=>state)
    return (
        <h1 className="text-center">Привет, {user?user:'Гость'}</h1>
    )
}
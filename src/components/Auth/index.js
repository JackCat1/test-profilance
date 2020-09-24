import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {useBackend} from '../BackendProvider'
import {systemActions} from '../../state/actions'

import './auth.css'
const Auth = ({finish})=>{
    const backend = useBackend()
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state)
    const [login,setLogin] = useState('')
    const [errLogin,setErrLogin] = useState('')
    const [pass,setPass] = useState('')
    const [errPass,setErrPass] = useState('')
    const [load,setLoad] = useState(false)
    const setAuth=async ()=>{
        let valid=true
        if(!login){ 
            valid=false
            setErrLogin('Поле не должно быть пустым')
        }
        if(!pass){
            valid = false
            setErrPass('Поле не должно быть пустым')
        }
        if(valid){
            setLoad(true)
            const resut = await backend.login(login,pass)
            console.log(resut)
            setLoad(false)
            if(resut.status && resut.status==='success'){
                setLogin('')
                setPass('')                
                dispatch(systemActions.setUser(resut.user))
                finish()
            }
            if(resut.status && resut.status==='error'){
                if(resut.code===1) setErrLogin(resut.msg)
                if(resut.code===2) setErrPass(resut.msg)
            }
        }

    }
    const setLogOut = ()=>{
        setLoad(true)
        dispatch(systemActions.setUser(null))   
        setLoad(false)
        finish()     
    }
    if(!user){
        return (
            <Form className="auth-form">
                <h3 className="text-center">Авторизация</h3>
                <Form.Group controlId="login">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control value={login} onChange={e=>{
                        setErrLogin('')
                        setLogin(e.target.value)
                    }} isInvalid={errLogin} disabled={load}/>
                    <Form.Control.Feedback type="invalid">{errLogin}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="pass">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" value={pass} onChange={e=>{
                        setErrPass('')
                        setPass(e.target.value)
                    }} isInvalid={errPass} disabled={load}/>
                    <Form.Control.Feedback type="invalid">{errPass}</Form.Control.Feedback>
                </Form.Group>
                <button className="btn btn-primary" type="button" disabled={load} onClick={setAuth}>{load?<Spinner animation="border" size="sm"/>:null} Войти</button>
            </Form>
        )
    }
    return (
        <div className="auth-form">
            <h3 className="text-center">Здравствуйте, {user.login}</h3>
            <button className="btn btn-primary" type="button" disabled={load} onClick={setLogOut}>{load?<Spinner animation="border" size="sm"/>:null} Выйти</button>
        </div>
    )
}
export default Auth
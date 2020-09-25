import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useBackend} from '../BackendProvider'
import {systemActions} from '../../state/actions'
import { Alert, Spinner } from 'react-bootstrap'
import {News} from './News'
import './news-list.css'
const NewsList = ()=>{
    const dispatch = useDispatch()
    const backend = useBackend()
    const {user,news} = useSelector(state=>state)
    const [load,setLoad] = useState(false)
    const [err,setErr] = useState('')
    const getData = async ()=>{
        try{
            setLoad(true)
            const newsList = await backend.getNewsList(user?user.login:null)            
            dispatch(systemActions.addNews(newsList))
            setLoad(false)
        }
        catch(e){
            setErr('Сервис недоступен. Попробуйте позже')
        }
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    if(load) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="primary"/>
            </div>
        )
    }
    if(err){
        return (
            <Alert variant="warning">
                {err}
            </Alert>
        )
    }
    return <News list={news}/>
}
export default NewsList
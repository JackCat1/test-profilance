import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaCheck,FaTrashAlt} from 'react-icons/fa'
import { Spinner } from 'react-bootstrap'
import {useBackend} from '../BackendProvider'
import {systemActions} from '../../state/actions'
const NewsControlPanel = ({news})=>{
    const backend = useBackend()
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state)
    const [load,setLoad] =useState(false)
    const delNews =async ()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Вы хотите удалить новость?')){
            setLoad(true)
            const newsList = await backend.delNews(news.id,user.login)
            setLoad(false)
            dispatch(systemActions.addNews(newsList))
        }
    }
    const checkNews =async ()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Вы хотите одобрить новость?')){
            setLoad(true)
            const newsList = await backend.checkNews(news.id,user.login)
            setLoad(false)
            dispatch(systemActions.addNews(newsList))
        }
    }
    if(user && user.role==='admin'){
        return (
            <div className="d-flex flex-column p-3">
                <div>
                    <strong>Автор:</strong> {news.author}
                </div>            
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-1">
                        <strong>Статус:</strong> {NewsStatus(news.status)}
                    </div>                
                    {news.status==='new'?<button className="btn btn-sm btn-success mr-1" title="Одобрить новость" onClick={checkNews}><FaCheck/></button>:null}
                    <button className="btn btn-sm btn-danger" title="Удалить новость" onClick={delNews}><FaTrashAlt/></button>
                    {load?<Spinner animation="border" size="sm" className="ml-1"/>:null}                    
                </div> 
                <hr className="w-100"/>          
            </div>
        )
    }
    if(user && user.role==='user' && user.login === news.author){
        return (
            <div className="d-flex flex-column p-3">                                 
                <div className="mr-1">
                    <strong>Статус:</strong> {NewsStatus(news.status)}
                </div> 
                <hr className="w-100"/>      
            </div>
        )

    }
    return <Fragment/>
    
}
export default NewsControlPanel

const NewsStatus = (status)=>{
    switch(status){
        case 'new':
            return <span className="text-warning">Модерация</span>
        case 'valid':
            return <span className="text-success">Одобрено</span>
        default:
            return null
    }
}

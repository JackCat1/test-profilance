import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AddNewsForm} from './AddNewsForm'
import './add-news-form.css'
import { useBackend } from '../BackendProvider'
import { systemActions } from '../../state/actions'
const AddNewsButton = ()=>{
    const backend = useBackend()
    const dispatch = useDispatch()
    const {user,news} = useSelector(state=>state)
    const [load,setLoad] = useState(false)
    const [form,showForm] = useState(false)
    const saveNews = (title,prew,full)=>{
        if(user){
            setLoad(true)
            const newsInfo = backend.addNews({title,prew,full,user:user.login})
            setLoad(false)
            showForm(false)
            dispatch(systemActions.addNews([...news,newsInfo]))
        }        
    }
    if(!user){
        return <Fragment/>
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary" onClick={()=>showForm(true)}>Добавить новость</button>                
            </div>
            <AddNewsForm submit={saveNews} show={form} load={load} close={()=>showForm(false)}/>
        </Fragment>
    )

}
export default AddNewsButton
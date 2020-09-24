import React, { useState,useEffect } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useBackend} from '../BackendProvider'
import {systemActions} from '../../state/actions'
import "./news-search.css";
const NewsSearch = () => {
    const {user} = useSelector(state=>state)
    const dispatch = useDispatch()
    const backend = useBackend()
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const getData = async ()=>{
      try{
        
          setLoad(true)
          const newsList = await backend.search(search,user?user.login:null)
          setLoad(false)
          if(Array.isArray(newsList) && newsList.length===0) setErr('Поиск не дал результатов')
          dispatch(systemActions.addNews(newsList))
        
      }
      catch(e){
        setErr('Сервис временно недоступен')
      }
      
  }
  
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
  return (
    <Form onSubmit={e=>e.preventDefault()}>
      <Form.Group controlId="search" className="search-news">        
          <Form.Control
            placeholder="Поиск"
            value={search}
            onChange={(e) => {
              setErr("");
              setSearch(e.target.value);
            }}
          />
          {load ? (
            <Spinner animation="border" size="sm" className="spinner" />
          ) : null}
          <Form.Control.Feedback type="invalid" className="d-block">{err}</Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};
export default NewsSearch;

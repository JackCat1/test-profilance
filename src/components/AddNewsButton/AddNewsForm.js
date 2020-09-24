import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
export const AddNewsForm = ({ submit,show,load,close }) => {
  const [title, setTitle] = useState("");
  const [prew, setPrew] = useState("");
  const [full, setFull] = useState("");
  const submitHandler = (e) => {
    e.preventDefault()
    submit(title, prew, full);
    return false;
  };
  const resetHandler = ()=>{
    setFull('')
    setPrew('')
    setTitle('')
  }
  return (
    <div className={show?'add-news-wrap d-flex':'add-news-wrap d-none'}>
      <div className="add-news-panel">
        <Form onSubmit={submitHandler} onReset={resetHandler}>
          <Form.Group controlId="title">
            <Form.Label>Заголовок новости</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={load}
            />
          </Form.Group>
          <Form.Group controlId="prew">
            <Form.Label>Краткий текст новости</Form.Label>
            <Form.Control
              value={prew}
              onChange={(e) => setPrew(e.target.value)}
              required
              disabled={load}
            />
          </Form.Group>

          <Form.Group controlId="full">
            <Form.Label>Текст новости</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={full}
              onChange={(e) => setFull(e.target.value)}
              required
              disabled={load}
            />
          </Form.Group>
          <button className="btn btn-secondary mr-2" type="reset" disabled={load}>
            Очистить
          </button>
          <button className="btn btn-success" type="submit" disabled={load}>
              {load?<Spinner animation="border" size="sm"/>:null} Сохранить
          </button>
        </Form>
        <button
            style={{
              position: "absolute",
              top: 0,
              right: ".5rem",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "2em",
              fontWeight: "bold",
            }}
            onClick={close}
          >
            &times;
          </button>
      </div>
    </div>
  );
};

import React from "react";
import { Card } from "react-bootstrap";
import NewsControlPanel from "../NewsControlPanel";
export const NewsItem = ({ news,detail }) => {
    const date = new Date(news.date)
  return (
    <Card className="news-item">
      <NewsControlPanel news={news}/>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date.toLocaleString()}</Card.Subtitle>
        <Card.Text className="text-justify">{news.prew}</Card.Text>
        <button className="btn btn-link" onClick={detail}>Подробнее</button>
      </Card.Body>
    </Card>
  );
};

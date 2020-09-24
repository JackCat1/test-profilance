import React from "react";
export const NewsDetail = ({ news,close }) => {
  const date = new Date(news.date);
  return (
    <div className="w-100 mb-4">
      <hr className="w-100" />
      <div className="text-right">
          <span className="close-icon" onClick={close}>&times;</span>
      </div>
      <h2>{news.title}</h2>
      <h6>{date.toLocaleString()}</h6>
        <p className="text-justify">{news.prew}</p>
        <p className="text-justify">{news.full}</p>
        <strong>Автор: </strong> <span>{news.author}</span>  
      <hr className="w-100" />
    </div>
  );
};

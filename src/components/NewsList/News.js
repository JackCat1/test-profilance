import React, { useState } from 'react'
import {NewsItem} from './NewsItem'
import {NewsDetail} from './NewsDetail'
export const News = ({list=[]})=>{
    const [detailNews,setDetailNews] = useState(null)
    return (
        <div className="news-wrap">
            {detailNews?<NewsDetail news={detailNews} close={()=>setDetailNews(null)}/>:null}
            {
                list.length===0?<strong>Список новостей пуст</strong>:null
            }
            {
                list.map((item,id)=><NewsItem key={'news-'+id} news={item} detail={()=>setDetailNews(item)}/>)
            }
        </div>
    )
}
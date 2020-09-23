import React from 'react'
import { Route,Switch } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { NewsPage } from '../pages/NewsPage'
export const AppNavig = ()=>{
    return (
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/news/" component={NewsPage} exact/>
            <Route component={Content}/>
        </Switch>
    )
}
const Content = ()=>{
    return (
        <h1>Hello world</h1>
    )
}
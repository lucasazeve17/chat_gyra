import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Home from './pages/Home'


const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  path="/chat" component={Chat} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
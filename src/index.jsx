import React from 'react';
import ReactDOM from 'react-dom';
import {adminRouter ,noAccessRouter} from './router/'
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            {noAccessRouter.map((item,index,arr) => {
                return <Route key={item.path} {...item} />
            })}
            {adminRouter.map((item,index,arr) => {
                return <Route key={item.path} {...item} />
            })}
            <Redirect to="/login" />
        </Switch>
    </Router> ,
    document.getElementById('root'))
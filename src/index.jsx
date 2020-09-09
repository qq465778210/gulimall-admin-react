import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './app';
import {noAccessRouter} from './router/'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" render={routerProps => <App {...routerProps}/>} />
            {noAccessRouter.map((item, index, arr) => {
                return <Route key={item.path} {...item} />
            })}
            <Redirect to="/login"/>
        </Switch>
    </Router>,
    document.getElementById('root')
)
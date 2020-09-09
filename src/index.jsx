import React from 'react';
import ReactDOM from 'react-dom';
import {adminRouter} from './router/'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            {adminRouter.map((item,index,arr) => {
                return <Route path={item.path} component={item.component} />
            })}
        </Switch>
    </Router> ,
    document.getElementById('root'))
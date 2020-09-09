import React, {Component} from 'react'
import {adminRouter, noAccessRouter} from './router/'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Frame from "./views/admin/frame";


export default class App extends Component {
    render() {
        return (
            <Frame>
                <Switch>
                    {adminRouter.map(item => {
                        return <Route key={item.path} {...item} render={routerProps => {
                            return <item.component {...routerProps}/>
                        }
                        }/>
                    })}
                </Switch>
            </Frame>
        )
    }
}

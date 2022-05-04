import React from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
const Routes = () => {
    return (
        <div className="app_body">

            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/rooms/:roomId">
                        <Chat />
                    </Route>

                    <Route path="/">
                        <Chat />
                    </Route>



                </Switch>

            </Router>
        </div>
    )
}

export default Routes
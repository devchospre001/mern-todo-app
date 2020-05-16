import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import TodosOverview from '../components/TodosOverview/TodosOverview'
import Todos from '../components/Todos/Todos'
import Support from '../components/Support/Support'

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TodosOverview} />
                <Route path="/todos-start" exact component={Todos} />
                <Route path="/todos-support" exact component={Support} />
            </Switch>
        </Router>
    )
}

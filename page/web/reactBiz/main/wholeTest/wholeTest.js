require("./wholeTest.less");
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';

import 'antd/dist/antd.css'
import App from "./app.jsx"
import Index from './page/index.jsx'
import PageA from './page/pageA.jsx'
import PageB from './page/pageB.jsx'
render (
    (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />                        <Route path="pageA" component={PageA}/>
             <Route path="pageB" component={PageB}/>
        </Route>
    </Router>
    ),
    document.getElementById("app")
)
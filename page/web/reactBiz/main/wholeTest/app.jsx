import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'

import PageA from './page/pageA.jsx'
import PageB from './page/pageB.jsx'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
module.exports = App;
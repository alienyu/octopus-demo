import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>AppDemo</div>
        )
    }
}
module.exports = App;
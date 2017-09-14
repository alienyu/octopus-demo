import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'
import ComponentB from '../components/componentB.jsx'
export class pageB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                pageB
                <ComponentB />
            </div>
        )
    }
}
module.exports = pageB;
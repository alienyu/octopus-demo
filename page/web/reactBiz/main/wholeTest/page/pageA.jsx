import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'
import ComponentA from '../components/componentA.jsx'
export class pageA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                pageA
                <ComponentA />
            </div>
        )
    }
}
module.exports = pageA;
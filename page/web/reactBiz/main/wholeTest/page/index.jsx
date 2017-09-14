import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'
import {Link} from 'react-router'
export class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/pageA">pageA</Link></li>
                    <li><Link to="/pageB">pageB</Link></li>
                </ul>
            </div>
        )
    }
}
module.exports = Index;
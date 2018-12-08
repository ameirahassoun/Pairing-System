import React, { Component } from 'react';
import axios from 'axios';
import './All.css';


class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
            <button onClick={() => window.location.href='/add'}>Add student</button>
            <button onClick={() => window.location.href='/pairing'}>Pairing</button>
            <button onClick={() => window.location.href='/history'}>History</button>
            </div>
        )
    }
} 

export default Entry;



import React, { Component } from 'react';
import axios from 'axios';

class History extends Component {
  constructor(props) {
    super(props);
    this.state={
        history:[]
    }
  }

  componentWillMount(){

  axios.get('/gethistory')
    .then(({data}) => {
      this.setState({history: data})
    })
    .catch(err => {
      throw err;
    })
  }
  render() {
    return (
      <div>
        History
      </div>
    )
  }

}

export default History;

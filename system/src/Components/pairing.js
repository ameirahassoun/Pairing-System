import React, { Component } from 'react';
import axios from 'axios';

class Pairing extends Component {

  componentWillMount() {
    axios.get('/getAllStudents')
      .then(data => {
          if (!data.length % 2 === 0) {
            data.push({
              studentName: 'alone'
            })
          }
          this.setState({
            allStudents: data
          })
        })
      .catch(err => {
          console.log('failed to add student')
      })  
  };


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Pairing;

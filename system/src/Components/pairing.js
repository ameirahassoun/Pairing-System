import React, { Component } from 'react';
import axios from 'axios';

class Pairing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          allStudents: [],
          firstStudentsArray: [],
          secondStudentsArray: [],
          pairsArray: [],
          pairsToShow: []
        }
      }

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

    addToPairs = () => {
        let { pairsArray } = this.state ;
        
        if (pairsArray[pairsArray.length - 1].studentName === 'alone') {
        pairsArray.pop();
        }
        axios.put('/editpair', {
            pairsArray: pairsArray
        })
        .then(() => {
            console.log('saved');

        }) 
        .catch (() => {
            console.log('failed')
        });
    }

    render() {
        return (
        <div>
            <button onClick={this.pair.bind(this)}>Pair</button>
            <button onClick={this.save.bind(this)}>save</button>
            <hr />
            {
            this.state.show && <div>
                {
                this.state.pairsArray.map(function (pair, i) {
                    return <h3 key={i}> {pair[0]}  WITH  {pair[1]}</h3>
                })
                }
            </div>
            }
        </div>
        )
    }
}

export default Pairing;

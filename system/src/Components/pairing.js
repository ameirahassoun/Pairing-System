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
        .then(({data}) => {
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
            throw err;
        })  
    };

    pair = () => {
        let pairsArray = [];
        let checkedArray = [];
        let {allStudents} = this.state;
        let randomNum = 0;
        let firstStudentsArray = [];
        let secondStudentsArray = [];
        while(checkedArray.length<allStudents.length){
          randomNum = Math.floor(Math.random() * allStudents.length) + 0;
          if(!checkedArray.includes(randomNum)){
            checkedArray.push(randomNum);
          }
        }
      
        for(let i=0;i<checkedArray.length;i=i+2){
          let j = allStudents[checkedArray[i]].studentName;
          let z = allStudents[checkedArray[i+1]].studentName;
          pairsArray.push([j,z]);
        }
        for (let i = 0; i < pairsArray.length; i++) {
          firstStudentsArray.push(pairsArray[i][0]);
          secondStudentsArray.push(pairsArray[i][1]);
        }
        this.setState({
          firstStudentsArray: firstStudentsArray,
          secondStudentsArray: secondStudentsArray,
          pairsArray: pairsArray,
          show: true
        })
      }
    

    save = () => {
        const { firstStudentsArray , secondStudentsArray } = this.state;
        axios.post('/addHistory',
          {
            firstStudentsArray: firstStudentsArray,
            secondStudentsArray: secondStudentsArray
          })
          .then((data) => {
              this.addToPairs();
          }) 
          .catch(err => {
              throw err;
          }) 
      }

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

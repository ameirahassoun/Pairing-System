import React, { Component } from 'react';
import axios from 'axios';
import {Table, TableBody, TableCell, TableHead,TableRow,Paper} from '@material-ui/core';

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
      console.log(data)
      this.setState({history: data})
    })
    .catch(err => {
      throw err;
    })
  }
  
  render() {
    const {history} = this.state;
    return (
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Studnet 1</TableCell>
            <TableCell >Student 2</TableCell>
            <TableCell>Studnet 1</TableCell>
            <TableCell >Student 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history ? history.map((row,i )=> {
            return (
                  <TableRow key={row.id}>

                  
                  <TableCell component="th" scope="row">
                
                {row.firstStudent[0]}
                  </TableCell>

                  
                           
                  <TableCell >
                {row.secondStudent[0]}
                   
                    </TableCell>

                  <TableCell component="th" scope="row">
                
                {row.firstStudent[1]}
                  </TableCell>
                  
                    <TableCell >
                {row.secondStudent[1]}
                   
                    </TableCell>
                  </TableRow>
          
            );
          }): null}
        </TableBody>
      </Table>
    </Paper>
    )
  }

}

export default History;

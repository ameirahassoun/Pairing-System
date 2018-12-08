import React, { Component } from 'react';
import Axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentname:'',
            level:'',
            allStudents:[],
            newlevel:0
      }
    }

    handleChange = e =>  {
        this.setState({
          [e.target.name] :e.target.value
        });
      };

      addstudent = () => {
        const { studentname, level } = this.state;
        console.log("addstudent",this.state);
        Axios.post('/addStudent', {
            studentName: studentname,
            studentLevel: level
          })

        .then(() => {
              console.log('students added') 
          })       
        .catch(err => {

            console.log('failed to add student')
        })
      };
    
      delete = e => {
        
        Axios.delete('/deletestudent',{
            _id: e.target.value,
          })

        .then (() => {
          alert("student edited")
        })
        .catch(err => {
            console.log('failed to edit student')
        })
      }

      edit = e => {
        const { newlevel } =this.state;
        Axios.put('/editlevel',
          {
            id: e.target.value,
            newLevel: newlevel
          })
        .then(() => {
            alert("student edited")
        })
        .catch(err => {
            console.log('failed to edit student')

        })
      };
    
    render() {
        return (
        <div>
            <input type='text'
                name='studentname'
                placeholder='student name'
                onChange={this.handleChange}
                />
                <input type='number'
                name='level'
                placeholder='level'
                max='5'
                min='0'
                onChange={this.handleChange}
                />
                <button onClick={this.addstudent}>send</button>
        
                <hr />
        </div>
        )
    }
}

export default Add;

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

    componentWillMount(){
        
        Axios.get('/getAllStudents')
          .then(data => {
              this.setState({
                allStudents:data
              })
          })
        .catch(err => {
            console.log('failed to add student')
            throw err;
        })
    };

    handleChange = e =>  {
        this.setState({
          [e.target.name] :e.target.value
        });
      };

      addstudent = () => {
        const { studentname, level } = this.state;

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
            throw err;

        })
      };
    
    render() {
        const { allStudents } = this.state;
        return (
        <div>
            <h1>Add Student</h1>
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
                <br />
                {allStudents.map((student,i) => {
                    return(
                        <h3 key={i}>{student.studentName}   
                         {student.studentLevel} 
                        <input 
                            name='newlevel' 
                            type='number' 
                            min='0'
                            max='5' 
                            onChange={this.handleChange} />
                        <button value={student._id} onClick={this.edit} >edit</button>
                        <button value={student._id} onClick={this.delete} >delete</button>
                        </h3>  
                    )
                    })
                
                }
        </div>
        )
    }
}

export default Add;

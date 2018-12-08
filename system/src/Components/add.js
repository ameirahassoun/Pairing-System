import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
        studentname:'',
        level:'',
      }
    }

    handleChange = e =>  {
        this.setState({
          [e.target.name] :e.target.value
        });
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

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{paddingTop: '50px'}}>

          <NavLink to="/addStudent" style={{margin: '10px'}}>
            <button>Add Student</button>
          </NavLink>

          <NavLink to="/pairing" style={{margin: '10px'}}>
            <button> Pairing </button>
          </NavLink>

          <NavLink to="/history" style={{margin: '10px'}}>
            <button> History</button>
          </NavLink>

        </div>

      </div>
    )
  }

}

export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class PageNotFound extends Component {
  render() {
    return (
      <div style={{height : "80vh"}} className='row justify-content-center align-items-center'> 
          <span>
            <h1>Page Not Found (404)</h1>
            <Link to='/'>
              <button className='btn btn-primary'>Back to Home</button>
            </Link>
          </span>
      </div>
    );
  }
}

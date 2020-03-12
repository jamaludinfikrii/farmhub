import React, { Component } from 'react';

export default class PostProduct extends Component {
  render() {
    return (
      <div className="row justify-content-center">
          <div className="col-md-4 my-card p-5">
              <input type="text" className='form-control mt-3' placeholder='Your Product Name'/>
              <input type="text" className='form-control mt-3' placeholder='Price'/>
              <input type="text" className='form-control mt-3' placeholder='Stock'/>
              <input type="text" className='form-control mt-3' placeholder='Image URL'/>
              <input type="textarea" className='form-control mt-3' placeholder='Deskripsi'/>
              <input type="button" value='post' className='mt-3 btn btn-primary w-100'/>
          </div>
      </div>
    );
  }
}

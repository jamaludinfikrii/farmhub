import React, { Component } from 'react';

class SelectRole extends Component {
    render() {
        return (
            <div className='row justify-content-center' >
                <div className="col-md-3 my-card p-5">
                    <h4>Choose Your Role</h4>
                    <button className='btn btn-outline-primary w-100'>I'm A Seller</button>
                    <button className='btn btn-outline-success w-100 mt-4'>I'm A Buyer</button>
                </div>
            </div>
        );
    }
}

export default SelectRole;
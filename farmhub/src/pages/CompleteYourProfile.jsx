import React, { Component } from 'react';

class CompleteYourProfile extends Component {
    render() {
        return (
            <div className='row justify-content-center'>
                <div className="col-md-4 my-card p-5">
                    <h4>Complete Your Profile</h4>
                    <input className='form-control mt-3' type="text" placeholder='your full name'/>
                    <input className='form-control mt-3' type="text" placeholder='your phone number'/>
                    <input className='form-control mt-3' type="text" placeholder='your adress'/>
                    <button className='btn btn-outline-primary mt-3'>save</button>
                </div>
            </div>
        );
    }
}

export default CompleteYourProfile;
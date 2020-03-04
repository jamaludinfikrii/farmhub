import React from 'react'

class Register extends React.Component{
    render(){
        return(
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='my-card p-5 col-md-4'>
                    <h3>Register Here</h3>
                    <input type="text" className='form-control mt-3' placeholder='input your username '/>
                    <input type="password" className='form-control mt-3' placeholder='type your password '/>
                    <input type="password" className='form-control mt-3' placeholder='Confirm Your Password '/>
                    <div className='text-right'>
                        <button className='mt-3 btn btn-primary'>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
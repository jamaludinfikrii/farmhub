import React from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    state = {
        isComplete : null
    }
    onLoginBtnClick = () => {
        let inputEmail = this.refs.email.value
        let inputPassword = this.refs.password.value

        if(inputEmail && inputPassword){
            Axios.get(`http://localhost:3001/users?email=${inputEmail}&password=${inputPassword}`)
            .then((res) => {
                if(res.data.length > 0){
                    // Login Success
                    console.log(res.data)
                    if(res.data[0].role){
                        this.setState({isComplete : true})
                        // window.location = '/'
                        // ke homepage
                    }else{
                        this.setState({isComplete : false})
                        // window.location = '/select-role'
                        // ini ke select role
                    }

                    // terus datanya belum lengkap = suruh ke select-role
                    // datanya udah lengkap = langsung ke home
                }else{
                    Swal.fire('Error','Password or Email Invalid','error')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            return Swal.fire('Error','All Form Must be Filled','error')
        }

    }
    render(){
        if(this.state.isComplete === false){
            return(
                <Redirect to='/select-role' />
            )
        }
        if(this.state.isComplete === true){
            return(
                <Redirect to='/' />
            )
        }
        return(
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='my-card p-5 col-md-4'>
                    <h3>Login Here</h3>
                    <input ref='email' type="text" className='form-control mt-3' placeholder='input your email '/>
                    <input ref='password' type="password" className='form-control mt-3' placeholder='type your password '/>
                    <div className='text-right'>
                        <button onClick={this.onLoginBtnClick} className='mt-3 btn btn-primary'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
import React from 'react'
import Validator from 'validator'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { urlApi } from '../supports/constants/urlApi'

// email harus unique
// password and confirm password harus sama

class Register extends React.Component{
    state = {
        error : ''
    }

    registerClick = () => {
        var inputEmail = this.refs.email.value
        var inputPassword = this.refs.password.value
        var inputConfirm = this.refs.confirm.value

        if(inputEmail && inputPassword && inputConfirm){
            if(!Validator.isEmail(inputEmail)){
                return this.setState({error : "Email Format incorrect"}) 
            }

            if(inputConfirm !== inputPassword){
                return this.setState({error : "Password didnt match"})
            }

            // check email terdaftar atau belum
            Axios.get(urlApi + 'users?email=' + inputEmail)
            .then((res) => {
                if(res.data.length > 0){
                    return this.setState({error : "Email Sudah Terdaftar"})
                }
                var data = {
                    email : inputEmail,
                    password : inputPassword,
                    role : '',
                    fullname : '',
                    address : '',
                    phone_number : ''
                }
                Axios.post(urlApi + 'users', data)
                .then((res) => {
                    console.log(res)
                    Swal.fire('Register','Register Succes, Please login !!','success')
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })

            // register
            
        }else{
           this.setState({error : "Form Must be filled"})
        }
    }

    closeBtnError = () => {
        // this.state.error = ''

        this.setState({error : ""})
    }


    renderError = () => {
        if(this.state.error){
            return(
                <div className='alert alert-danger mt-3 row justify-content-between'>
                    <span>
                        {this.state.error}
                    </span>
                    <span onClick={this.closeBtnError} style={{cursor :'pointer'}}>x</span>
                </div>
            )
        }
    }

    render(){
       
        return(
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='my-card p-5 col-md-4'>
                    <h3>Register Here</h3>
                    <input ref='email' type="text" className='form-control mt-3' placeholder='input your email '/>
                    <input ref='password'  type="password" className='form-control mt-3' placeholder='type your password '/>
                    <input ref='confirm' type="password" className='form-control mt-3' placeholder='Confirm Your Password '/>
                    <div>
                        <button onClick={this.registerClick} className='mt-3 btn btn-primary'>
                            Register
                        </button>
                        {this.renderError()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
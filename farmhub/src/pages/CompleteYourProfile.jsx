import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { urlApi } from '../supports/constants/urlApi';

class CompleteYourProfile extends Component {

    onBtnSaveClick = () => {
        var refs = ['fullname','phone_number','address']
        var data ={}
        // var lanjut = true
        for(var i= 0 ; i<refs.length ; i++){
            if(this.refs[refs[i]].value){
                data[refs[i]] = this.refs[refs[i]].value
            }else{
                return Swal.fire('Error')
            }
        }
        var id = this.props.dataUser.id
        Axios.patch(urlApi + 'users/' + id, data)
        .then((res) => {
            window.location = '/'
        })
        .catch((err) => {
            console.log(err)
        })
        

    }

    render() {
        return (
            <div className='row justify-content-center'>
                <div className="col-md-4 my-card p-5">
                    <h4>Complete Your Profile</h4>
                    <input ref='fullname' className='form-control mt-3' type="text" placeholder='your full name'/>
                    <input maxLength={13} ref='phone_number' className='form-control mt-3' type="text" placeholder='your phone number'/>
                    <input ref='address' className='form-control mt-3' type="text" placeholder='your adress'/>
                    <button onClick={this.onBtnSaveClick} className='btn btn-outline-primary mt-3'>save</button>
                </div>
            </div>
        );
    }
}

export default CompleteYourProfile;
import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../supports/constants/urlApi';
import PageNotFound from './PageNotFound';


class SelectRole extends Component {
    onBtnClick = (role) => {
        // ambil id dari app.js
        // let id = this.props.dataUser.id
        // alert(id)

        // ambil id dari localStorage
        let id = localStorage.getItem('id')


        Axios.patch(urlApi + 'users/' + id , {role : role})
        .then((res) => {
            alert('Anda Berhasil menjadi ' + role)
            window.location = '/complete-your-profile'
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        if(this.props.dataUser){
            if(this.props.dataUser.role){
                return(
                    <PageNotFound/>
                )
            }
        }
        return (
            <div className='row justify-content-center' >
                <div className="col-md-3 my-card p-5">
                    <h4>Choose Your Role</h4>
                    <button onClick={() => this.onBtnClick('penjual')} className='btn btn-outline-primary w-100'>I'm A Seller</button>
                    <button onClick={ () => this.onBtnClick('pembeli')} className='btn btn-outline-success w-100 mt-4'>I'm A Buyer</button>
                </div>
            </div>
        );
    }
}

export default SelectRole;
import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../supports/constants/urlApi';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

class EditProduct extends Component {
    state= {
        data :null
    }
    componentDidMount(){
        var id = window.location.pathname.split('/')[2]
        Axios.get(urlApi + 'products/' + id)
        .then((res) => {
            this.setState({data:res.data})
        })
    }
    onSaveBtnClick = () => {
        var refs = ['name','price','stock','deskripsi','img_url']
        let data = {}
        for(var i = 0 ; i <refs.length ; i ++){
            if(!this.refs[refs[i]].value){
                return Swal.fire('All Form Must Be Filled')
            }else{
                data[refs[i]] = this.refs[refs[i]].value
            }
        }

        Axios.patch(urlApi + 'products/' + window.location.pathname.split('/')[2],data)
        .then((res) => {
            alert('update data success')
            window.location = '/manage-product'
            console.log(res)
        })  
        .catch((err) => {
            console.log(err)
        })


    }
    render() {
        if(this.state.data === null){
            return(
                <Loading />
            )
        }
        return (
            <div className='container'>
                
                <div className="row justify-content-center">
                    <div className="col-md-4 my-card p-5">
                        <h4>Edit Data</h4>
                        <input ref='name' className='form-control mt-3' type="text" defaultValue={this.state.data.name}/>
                        <input ref='price' className='form-control mt-3' type="text" defaultValue={this.state.data.price}/>
                        <input ref='stock' className='form-control mt-3' type="text" defaultValue={this.state.data.stock}/>
                        <input ref='deskripsi' className='form-control mt-3' type="text" defaultValue={this.state.data.deskripsi}/>
                        <input ref='img_url' className='form-control mt-3' type="text" defaultValue={this.state.data.img_url}/>
                        <input onClick={this.onSaveBtnClick} value='save' className='btn btn-outline-success w-100 mt-3' />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProduct;
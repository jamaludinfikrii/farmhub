import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../supports/constants/urlApi';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

class ManageProduct extends Component {
    state= {
        data : null
    }

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct = () => {
        var id = localStorage.getItem('id')
        Axios.get(urlApi + 'products?id_penjual=' + id)
        .then((res) => {
            this.setState({data:res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    renderDataToJsx = () => {
        return this.state.data.map((val,index) => {
            return(
                <tr key={val.id}>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>Rp. {val.price}</td>
                    <td>{val.stock}</td>
                    <td>{val.deskripsi}</td>
                    <td><img src={val.img_url} width='50px' alt='broken'/></td>
                    <td>
                        <input type='button' onClick={() => this.onDeleteBtnClick(val.id,val.name)} className='btn btn-outline-danger' value='delete' />
                    </td>
                    <td>
                        <Link to={'/edit-data/' + val.id}>
                            <input type='button' className='btn btn-outline-info' value='edit' />
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    onDeleteBtnClick = (id,name) => {
        Swal.fire({
            title : "Delete Data",
            text : "Are You Sure Want to Delete " + name + ' ?',
            showCancelButton : true,
            icon : "warning",
            cancelButtonColor:'red'
        })
        .then((val) => {
            if(val.value){
                Axios.delete(urlApi + 'products/' +id)
                .then((res) => {
                    Swal.fire('Delete Data Success')
                    this.getDataProduct()
                })
                .catch((err) => {
                    console.log(err)
                })
            }else{
                Swal.fire('oke ')

            }
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
                <h4>Manage Your Product Here</h4>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Description</th>
                                <th>image Url</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDataToJsx()}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ManageProduct;
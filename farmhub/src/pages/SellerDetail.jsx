import React, { Component } from 'react';
import {Card,CardBody,CardHeader,CardFooter} from 'reactstrap'
import Axios from 'axios';
import { urlApi } from '../supports/constants/urlApi';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom'

class SellerDetail extends Component {
    state = {
        dataUser : null,
        dataProduct : null
    }

    componentDidMount(){
        var id = window.location.pathname.split('/')[2]
        this.getDataPenjual(id)
        this.getDataProducts(id)
    }


    getDataPenjual = (a) => {
        Axios.get(urlApi + 'users/' + a)
        .then((res) => {
            console.log(res)
            this.setState({dataUser : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    getDataProducts = (a) => {
        Axios.get('http://localhost:3001/products?id_penjual=' + a)
        .then((res) => {
            console.log(res.data)
            this.setState({dataProduct:res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

// DESTRUCT
    render() {
        if(this.state.dataUser === null || this.state.dataProduct === null){
            return(
                <Loading/>
            )
        }

        var {fullname,email,phone_number,address} = this.state.dataUser

       
        return (
            <div className='container'>
                <h1>Seller Detail</h1>
                <div className="row">
                    <div className="col-md-4 p-2">
                        <Card>
                            <CardHeader>
                                {fullname}
                            </CardHeader>
                            <CardBody>
                                <div>
                                    Email : {email}
                                </div>
                                <div>
                                    Phone Number : {phone_number}
                                </div>
                                <div>
                                    Adresss : {address}
                                </div>
                                
                            </CardBody>
                            <CardFooter>
                                Total Barang = {this.state.dataProduct.length}
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="col-md-8 p-2">
                        <Card>
                            <CardBody>
                                <div className="row">
                                        {
                                            this.state.dataProduct.map((val) => {
                                                return(
                                                    <div key={val.id} className="col-md-3 p-2">
                                                        <div className='my-card p-3'>
                                                            <Link to={'/product-detail/' + val.id}>
                                                                <img width='100%' alt='broken' src={val.img_url}/>
                                                            </Link>
                                                            <div>{val.name}</div>
                                                            <div>{val.price}</div>
                                                            <div>Stock = {val.stock}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellerDetail;
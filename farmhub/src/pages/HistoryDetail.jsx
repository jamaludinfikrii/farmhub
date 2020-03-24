import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

export default class HistoryDetaul extends Component {
    state = {
        data : null
    }
    componentDidMount(){
        console.log()
        this.getDataTransaction()
    }
    getDataTransaction = () => {
        Axios.get(urlApi + 'transaction_detail?id_transaction=' + window.location.pathname.split('/')[2] )
        .then((res) => {
            this.setState({data : res.data})
            console.log(res.data)
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
        if(this.state.data.length === 0){
            return(
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-12'>
                            <h1 className='text-center'>History Masih Kosong</h1>
                        </div>

                        <div className="col-2">
                            <Link to='/'>
                                <input type="button" value="belanja dulu" className='btn btn-outline-info mt-3'/>
                            </Link>
                        </div>

                    </div>
                </div>
            )
        }
        return (
            <div className='container'>
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty </th>
                                <th>Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((val,index) => {
                                    return(
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{val.name}</td>
                                            <td>{val.price}</td>
                                            <td>{val.qty}</td>
                                            <td>{val.qty * val.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

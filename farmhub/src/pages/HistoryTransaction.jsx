import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

export default class HistoryTransaction extends Component {
    state = {
        getDataHistory : null
    }
    componentDidMount(){
        this.getDataTransaction()
    }
    getDataTransaction = () => {
        Axios.get(urlApi + 'transaction?id_pembeli=' + localStorage.getItem('id') )
        .then((res) => {
            this.setState({getDataHistory : res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.getDataHistory === null){
            return(
                <Loading />
            )
        }
        if(this.state.getDataHistory.length === 0){
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
                                <th>Date</th>
                                <th>Jumlah Item</th>
                                <th>Total </th>
                                <th>tLihat Detail </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.getDataHistory.map((val,index) => {
                                    return(
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{val.date}</td>
                                            <td>{val.jumlah_item}</td>
                                            <td>{val.total}</td>
                                            <td>
                                                <Link to={'/history-detail/' + val.id}>
                                                    <input type='button' className='btn btn-outline-info' value='lihat detail'/>
                                                </Link>
                                            </td>
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

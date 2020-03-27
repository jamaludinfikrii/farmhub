import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
export default class HistoryDetail extends Component {
    state = {
        items : null
    }
    componentDidMount(){
        this.getDataHistoryDetail()
        this.getDataMovie()
        this.rajaApi()
    }


    getDataMovie = () => {
        Axios.get('http://www.omdbapi.com/?apikey=6a953632&s=harry')
        .then((res) => {
            console.log(res)
        })
    }


    rajaApi = () => {
        Axios.get('https://x.rajaapi.com/poe')
        .then((res) => {
            let url = 'https://x.rajaapi.com/MeP7c5ne'+res.data.token +'/m/wilayah/provinsi'
            console.log(url)
            Axios.get(url)
            .then((res) => {
                console.log(res)
            })
            console.log(res)
        })
    }

    getDataHistoryDetail = () => {
        var id = window.location.pathname.split('/')[2]
        Axios.get(urlApi + "transaction/" + id)
        .then((res) => {
            this.setState({items : res.data.items})
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.items === null){
            return(
                <Loading/>
            )
        }
        return (
            <div className='container'>
                <h1>History Detail</h1>
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>SubTotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map((val,index) => {
                                    return(
                                        <tr key={index}>
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

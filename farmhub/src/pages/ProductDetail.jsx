import React from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'
class ProductDetail extends React.Component{
    state={
        data : null,
        dataPenjual : null
    }
    componentDidMount(){
        var id =  window.location.pathname.split('/')[2]
        this.getDataProductDetail(id)
    }

    getDataProductDetail = (param) => {
    Axios.get(urlApi+'products/' + param)
        .then((res) => {
            // console.log(res.data.id_penjual)
            this.getDataPenjual(res.data.id_penjual)
            this.setState({data :res.data})
        })
    }

    getDataPenjual = (id_penjual) => {
        Axios.get(urlApi +'users/' + id_penjual)
        .then((res) => {
            console.log(res)
            this.setState({dataPenjual : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }   


    render(){
        if(this.state.data === null || this.state.dataPenjual === null){
            return(
                <Loading />
            )
        }
        return(
            <div className='container'>
                <div className='row my-card p-3'>
                    <div className="col-sm-4">
                        <div className='p-2'>
                            <img src={this.state.data.img_url} width='100%' alt="broken"/>
                        </div>
                    </div>
                    <div className="col-sm-8 p-3">
                        <h2 style={{color:'#0f752e'}}>
                            {this.state.data.name}
                        </h2> 
                        <h4 style={{color:'#52575c'}}>
                         Rp. {this.state.data.price} / kg
                        </h4>
                        <p style={{color:'#25282b'}}>
                            Stock : {this.state.data.stock}
                        </p>

                        <Link to={'/seller-detail/' + this.state.data.id_penjual}>
                            <span style={{color:'#25282b',cursor:'pointer',textDecoration:'underline'}}>
                                {this.state.dataPenjual.fullname} ~ {this.state.dataPenjual.address}
                            </span>
                        </Link>


                        <p>{this.state.data.deskripsi}</p>
                        <div className='text-right'>
                            <button className='btn btn-success'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                {/* <h3>Product Detail</h3> */}
            </div>
        )
    }
}

export default ProductDetail;
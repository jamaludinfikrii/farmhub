import React from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'
class ProductDetail extends React.Component{
    state={
        data : null,
        dataPenjual : null,
        dataUser : null,
        qty : 1,
        totalHarga : 0
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
            this.setState({data :res.data,totalHarga : res.data.price})
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

    fnRenderBtn = () => {
        if(this.props.user !== null){
            if(this.props.user.role === 'penjual'){
                return(
                    <button className='btn btn-success'>Gak Bisa Beli</button>
                )
            }else{
                return(
                    <button className='btn btn-success'>Add To Cart</button>
                )
            }
        }else{
            return(
                <button className='btn btn-success'>Anda Harus Login Untuk Beli</button>
            )
        }
    }

    onMinHandler = () => {
        if(this.state.qty >= 2){
            this.setState({qty : this.state.qty- 1,totalHarga : (this.state.qty-1) * this.state.data.price})
        }
    }

    onPlusHandler = () => {
        if(this.state.qty < this.state.data.stock){
            this.setState({qty : this.state.qty+1,totalHarga : (this.state.qty+1) * this.state.data.price})
        }
    }

    render(){
        console.log('ini render')
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
                        <div className='my-2' >
                            <span onClick={this.onMinHandler} className='btn btn-outline-danger mr-2'>
                                -
                            </span>
                            <span>
                            {this.state.qty}
                            </span>
                            <span onClick={this.onPlusHandler} className='btn btn-outline-primary ml-2'>
                                +
                            </span>
                        </div>
                        <div className='my-2' >
                            <span>Total Harga = {this.state.totalHarga}</span>
                        </div>
                        <div >{
                            this.fnRenderBtn()
                            
                        }
                            
                        </div>
                    </div>
                </div>
                {/* <h3>Product Detail</h3> */}
            </div>
        )
    }
}

export default ProductDetail;
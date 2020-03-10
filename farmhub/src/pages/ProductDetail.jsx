import React from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'

class ProductDetail extends React.Component{
    state={
        data : null
    }
    componentDidMount(){
        this.getDataProductDetail()
    }

    getDataProductDetail = () => {
        Axios.get(urlApi+'products/4')
        .then((res) => {
            this.setState({data :res.data})
        })
    }


    render(){
        if(this.state.data === null){
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
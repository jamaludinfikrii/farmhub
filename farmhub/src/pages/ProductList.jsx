import React , {Component} from 'react'
import { FormGroup,Label,Input } from 'reactstrap'
import './../supports/css/ProductList.css'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'


class ProductList extends Component{
    state={
        data : null,
        dataPenjual : null,
        search : ''
    }
    
    // Sekali setelah render pertama
    componentDidMount(){
        this.getDataProducts()
        this.getDataPenjual()
    }

    getDataProducts = () => {
        Axios.get(urlApi + 'products')
        .then((res) =>{ 
            console.log(res.data)
            this.setState({data : res.data})
        })
        .catch((err) => {
            
            console.log(err)
        })
    }

    getDataPenjual = () => {
        Axios.get(urlApi + 'users?role=penjual')
        .then((res) => {
            this.setState({dataPenjual : res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    getDataAdress = (product) => {
        var penjual =  this.state.dataPenjual.filter((user) => {
            return user.id === product.id_penjual
        })

        return penjual[0].address
    }


    renderDataToJsx = () => {
        var dataFiltered = this.state.data.filter((prod) => {
            return prod.name.toLowerCase().startsWith(this.state.search)
        })
        if(dataFiltered.length === 0){
            return(
                <h2>Data Not Found</h2>
            )
        }
        return dataFiltered.map((val) => {
            return(
                <div  key={val.id} className="my-card col-sm-2 col-5 mr-3 mt-3">
                    <Link to={'/product-detail/' + val.id}>
                        <img style={{height :'70%',objectFit:'cover',objectPosition:'top'}} src={val.img_url} width='100%' alt=""/>
                    </Link>
                    <div className='farmhub-product-title'>{val.name}</div>
                    <div className='farmhub-product-price'>Rp. {val.price}</div>
                    <div className='farmhub-product-location'>{
                        this.getDataAdress(val)
                    }</div>
                     
                </div>
            )
        })
    }

    onSearchChange = () => {
        this.setState({search : this.refs.search.value})
    }

    // componentWillUnmount(){
    //     console.log('ini dari product list')
    // }


    render(){
        if(this.state.data === null || this.state.dataPenjual === null){
            return(
                <Loading />
            )
        }
        if(this.state.data.length === 0){
            return(
                <h1>Data Masih Kosong</h1>
            )
        }
        return(
            <div className='container-fluid'>
                <div className='row'>

                    <div className="col-sm-2 mt-3">
                        <div className='my-fixed-filter '>
                            <div className='my-card p-3 mb-3'>
                                <input type="text" className='form-control' onChange={this.onSearchChange} placeholder='Search' ref='search'/>
                            </div>
                            <div className='my-card p-3'>
                                <div className="farmhub-product-title">
                                    Filter By Category {this.props.dariRegister}
                                </div>
                                <div className='farmhub-product-location'>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Buah Buahan
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Sayuran
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Rempah Rempah
                                        </Label>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='my-card p-3 mt-3'>
                                <div className="farmhub-product-title">
                                    Filter By Location
                                </div>
                                <div className='farmhub-product-location'>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Jabodetabek
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Kota Bandung
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Jawa Barat
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Surabaya
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Jawa Timur
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        Semarang
                                        </Label>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10">
                        {   this.state.data.length !== this.renderDataToJsx().length ?

                            <div className='alert alert-primary'>
                                found {this.renderDataToJsx().length} data
                            </div>
                            :
                            null
                        }
                        <div className="row justify-content-center">
                            
                            {this.renderDataToJsx()}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList
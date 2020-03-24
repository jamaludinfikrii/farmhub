import React, { Component } from 'react'
import Loading from '../components/Loading'
import Axios from 'axios'
import { urlApi } from '../supports/constants/urlApi'

export default class CartPages extends Component {
    state = {
        dataCart : null,
        dataProduct : null,
        dataGabungan : null
    }

    componentDidMount(){
        this.getDataCart()
    }

    getDataCart = () => {
        Axios.get(urlApi + 'cart?id_pembeli=' + localStorage.getItem('id'))
        .then((res) => {
            this.setState({dataCart : res.data})
            var url = 'http://localhost:3001/products?'

            res.data.forEach((val) => {
                url += 'id=' + val.id_product + '&'
            })

            
            url = url.slice(0,url.length-1)
            Axios.get(url)
            .then((res) => {
                this.setState({dataProduct : res.data})
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            

        })
        .catch((err) => {
            console.log(err)
        })
    }

    checkout = () => {
        if(window.confirm('Are You Sure Want To Checkout?')){
            /**
             * {
      "id" : 1,
      "date" : "tanggal",
      "total" : 50000,
      "id_pembeli" : 7,
      "items": [
        {
          "name" :"Alpukat Mentega",
          "price": 100000,
          "qty" : 3
        }
      ]
    }
             */

            // var data = {
            //     date : new Date(),
            //     total : ,
            //     id_pembeli : localStorage.getItem('id'),
            //     items : [
            //         {}
            //     ]
            // }
            // post data ke transaction
            // update stock
            // delete data di cart
        }
    }

    renderDataCart = () => {
        console.log('renderDataCart')
        console.log(this.state.dataProduct)
        console.log(this.state.dataCart)

        let data_gabungan = []
        this.state.dataProduct.forEach((val) => {
            var new_obj = val
            new_obj.qty = this.state.dataCart.filter((cart) => cart.id_product === val.id)[0].qty
            new_obj.id_cart = this.state.dataCart.filter((cart) => cart.id_product === val.id)[0].id

            data_gabungan.push(new_obj)
        })


        this.setState({dataGabungan : data_gabungan})

        console.log(data_gabungan)
        
        return data_gabungan.map((val,index) => {
            return(
                <tr key={val.id}>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>Rp. {val.price}</td>
                    <td>
                        <input type='button' value='-' className='mr-2' /> 
                        <span>{val.qty}</span>
                        <input type='button' value='+' className='ml-2' />
                    </td>
                    <td>Rp {val.price * val.qty}</td>
                    <td> <input type="button" value="delete" className='btn btn-outline-danger'/> </td>
                </tr>
            )
        })
    }

    render() {
        if(this.state.dataCart === null || this.state.dataProduct === null){
            return (
                <Loading />
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
                                <th>Qty</th>
                                <th>SubTotal</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDataCart()}
                        </tbody>
                    </table>
                </div>

                <div className="row justify-content-center">
                    <input onClick={this.checkout} type="button" value="checkout" className='btn btn-primary'/>
                </div>
            </div>
        )
    }
}

import React from 'react'
import FarmHubNavbar from './components/Navbar'
import FooterFarmHub from './components/Footer'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import { Route,Switch,Link } from 'react-router-dom'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'
import LatihanFakeApi from './pages/LatihanFakeApi'
import SelectRole from './pages/SelectRole'
import CompleteYourProfile from './pages/CompleteYourProfile'
import Axios from 'axios'
import { urlApi } from './supports/constants/urlApi'
import PageNotFound from './pages/PageNotFound'
import PostProduct from './pages/PostProduct'
import SellerDetail from './pages/SellerDetail'
import ManageProduct from './pages/ManageProduct'
import EditProduct from './pages/EditProduct'
import CartPages from './pages/CartPages'

// Sediakan penampung di app.js
// sediakan function untuk update penampung di app.js kemudian kirim ke component pengirim
class App extends React.Component{
    state = {
        dataUser : null,
        nama : 'fikri',
        tampung : null
    }

    // Setelah Render Pertamaa
    componentDidMount (){
        // Setiap kali refresh, bakalan ke triger

        // Mengambil id di localstorage
        var id = localStorage.getItem('id')

        if(id !== null){
            // Ambil data kembali
            Axios.get(urlApi + 'users/' + id)
            .then((res) => {
                this.setState({dataUser : res.data})
            } )
            .catch((err) => {
                console.log(err)
            })

        }
    }


    onTampungData = (param) => {
        this.setState({tampung : param})
    }


    onDeleteDataUser = () => {
        this.setState({dataUser : null})
    }


    onChangeDataUser = (data) => {
        this.setState({dataUser : data})
    }

    renderErrorMsg = () => {
        if(this.state.dataUser){
            if(!this.state.dataUser.role){
               return(
                <div className='row justify-content-center'>
                    <div className='col-md-10 alert alert-danger'>
                        Complete Your Profile <Link to='/select-role'>Here</Link> 
                    </div>
                </div>
               ) 
            }
            if(!this.state.dataUser.fullname){
                return(
                 <div className='row justify-content-center'>
                     <div className='col-md-10 alert alert-danger'>
                         Complete Your Profile <Link to='/complete-your-profile'>Here</Link> 
                     </div>
                 </div>
                ) 
             }
        }
    }

    render(){
        
        return(
            <div>
                <FarmHubNavbar fnDeleteDataUser={this.onDeleteDataUser} dataUser={this.state.dataUser} />
                <div className='container-fluid my-5 pb-5' style={{minHeight:'80vh'}}>
                    
                    <Switch>
                    
                        <Route path='/' exact>
                            {
                            this.renderErrorMsg()}
                            <ProductList dariRegister={this.state.tampung}/>
                        </Route>
                        <Route path='/login'>
                            <Login bebas={this.onChangeDataUser} />    
                        </Route>
                        <Route path='/register'>
                            <Register fnKirimData={this.onTampungData}/>
                        </Route>
                        <Route path='/product-detail'>
                            <ProductDetail user={this.state.dataUser}/>
                        </Route>
                        <Route path='/select-role'>
                            <SelectRole dataUser={this.state.dataUser}/>
                        </Route>
                        <Route path='/complete-your-profile'>
                            <CompleteYourProfile dataUser={this.state.dataUser} />
                        </Route>
                        <Route path='/latihan-fake-api'>
                            <LatihanFakeApi/>
                        </Route>
                        <Route path='/post-product'>
                            <PostProduct/>
                        </Route>
                        <Route path='/seller-detail'>
                            <SellerDetail/>
                        </Route>
                        <Route path='/manage-product'>
                            <ManageProduct/>
                        </Route>
                        <Route path='/cart'>
                            <CartPages/>
                        </Route>
                        <Route path='/edit-data'>
                            <EditProduct/>
                        </Route>
                        <Route path='*'>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </div>

                <FooterFarmHub/>
            </div>
        )
    }
}

export default App;
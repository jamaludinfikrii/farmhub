import React from 'react'
import FarmHubNavbar from './components/Navbar'
import FooterFarmHub from './components/Footer'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import { Route } from 'react-router-dom'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'

class App extends React.Component{
    render(){
        return(
            <div>
                <FarmHubNavbar/>
                
                <div className='container-fluid my-5 pb-5' style={{minHeight:'80vh'}}>
                    <Route path='/' exact>
                        <ProductList/>
                    </Route>
                    <Route path='/login'>
                        <Login/>    
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path='/product-detail'>
                        <ProductDetail/>
                    </Route>
                </div>

                <FooterFarmHub/>
            </div>
        )
    }
}

export default App;
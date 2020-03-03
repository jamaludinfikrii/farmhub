import React from 'react'
import FarmHubNavbar from './components/Navbar'
import FooterFarmHub from './components/Footer'
import ProductList from './pages/ProductList'


class App extends React.Component{
    render(){
        return(
            <div>
                <FarmHubNavbar/>
                
                <div className='container-fluid' style={{minHeight:'80vh'}}>
                    <ProductList/>
                </div>

                <FooterFarmHub/>
            </div>
        )
    }
}

export default App;
import React from 'react'
import FarmHubNavbar from './components/Navbar'
import FooterFarmHub from './components/Footer'


class App extends React.Component{
    render(){
        return(
            <div>
                <FarmHubNavbar/>
                <div className='container-fluid' style={{minHeight:'80vh'}}>
                <h1>Welcome to FarmHub</h1>

                </div>

                <FooterFarmHub/>
            </div>
        )
    }
}

export default App;
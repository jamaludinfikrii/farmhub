import React from 'react'
import FarmHubNavbar from './components/Navbar'
import FooterFarmHub from './components/Footer'


class App extends React.Component{
    render(){
        return(
            <div>
                <FarmHubNavbar/>
                <h1>Welcome to FarmHub</h1>

                <FooterFarmHub/>
            </div>
        )
    }
}

export default App;
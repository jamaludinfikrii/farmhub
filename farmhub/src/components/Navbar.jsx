import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { Link } from 'react-router-dom'


class FarmHubNavbar extends React.Component{
    state = {
        isOpen : false
    }

    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render(){
        return(
            <div>
                <Navbar  style={{backgroundColor:'white' ,boxShadow:'0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)' }}  light={true} expand="md">
                    <NavbarBrand href="/">FarmHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar> 
                        <NavItem>
                            <Link to='/' >Products</Link >
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <Link to='/login'>Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/register'>Register</Link>
                        </NavItem>
                    </Nav> 
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default FarmHubNavbar;


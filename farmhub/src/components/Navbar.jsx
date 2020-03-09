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
                    {
                        this.props.dataUser === null ?
                        <Nav navbar>
                            <NavItem>
                                <Link to='/login'>Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/register'>Register</Link>
                            </NavItem>
                        </Nav> 
                        :
                        <Nav navbar>
                            {
                                this.props.dataUser.role === 'pembeli' ?
                                <NavItem>
                                    <Link to='/my-profile'>Cart</Link>
                                </NavItem>
                                :
                                this.props.dataUser.role === 'penjual' ?
                                <NavItem>
                                    <Link to='/my-profile'>Post Your Product</Link>
                                </NavItem>
                                :
                                null
                            }
                            <NavItem className='ml-md-3'>
                                <Link to='/my-profile'>Hello , {this.props.dataUser.email}</Link>
                            </NavItem>
                        </Nav> 
                    }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default FarmHubNavbar;


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


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
                <Navbar color="light" light={true} expand="md">
                    <NavbarBrand href="/">FarmHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar> 
                        <NavItem>
                            <NavLink>Products</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Register</NavLink>
                        </NavItem>
                    </Nav> 
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default FarmHubNavbar;


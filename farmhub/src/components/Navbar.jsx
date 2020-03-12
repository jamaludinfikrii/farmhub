import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavLink
} from 'reactstrap';

import Swal from 'sweetalert2';


class FarmHubNavbar extends React.Component{
    state = {
        isOpen : true
    }

    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }
    
    onLogoutClick = () => {
        Swal.fire({
            title : "Logout",
            text : "Are You Sure Want To Logout?",
            icon : "question",
            showCancelButton : true,
            confirmButtonColor :"#3085d6",
            cancelButtonColor :"#d33",
            confirmButtonText : "Yes"
        })
        .then((val) => {
            if(val.value){
                localStorage.removeItem('id')
                this.props.fnDeleteDataUser()
                Swal.fire("you're Successfully Logout")
                // delete data di app.js
            }
        })
        console.log('masuk')
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
                            {/* <Link to='/' >Products</Link > */}
                        </NavItem>
                    </Nav>
                    {
                        this.props.dataUser === null ?
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='/login'>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/register'>Register</NavLink>
                            </NavItem>
                        </Nav> 
                        :
                        <Nav navbar>
                            {
                                this.props.dataUser.role === 'pembeli' ?
                                <NavItem> 
                                    <NavLink>
                                        Cart
                                    </NavLink>
                                    {/* <Link to='/my-profile'>Cart</Link> */}
                                </NavItem>
                                :
                                this.props.dataUser.role === 'penjual' ?
                               
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Menu
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href='/post-product'>
                                                Post Product
                                            </DropdownItem>
                                            <DropdownItem href='/manage-product'>
                                                Manage Product
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                             
                                :
                                null
                            }
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                   Hello, {this.props.dataUser.email}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    Change Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                    History
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.onLogoutClick}>
                                    Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav> 
                    }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default FarmHubNavbar;


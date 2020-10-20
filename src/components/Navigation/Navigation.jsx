import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../_actions/authActions';
import { NavLink, Redirect } from 'react-router-dom';
import avatar from '../../assets/img/male.png';
import jwt_decode from 'jwt-decode';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { authenticated, logout } = props;

    const token = localStorage.getItem('token');
    let decoded;

    if (token) {
        decoded = jwt_decode(token);
    } else {
        return <Redirect to='/login' />;
    }

    return (
        <Container fluid>
            {authenticated && <Redirect to='/' />}
            <Navbar color='light' light expand='md'>
                {authenticated && (
                    <>
                        <NavbarBrand>
                            <NavLink to='/'>
                                <h4>ALX</h4>
                            </NavLink>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem className='mr-2'>
                                    <NavLink to='/'>Jokes</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/anime'>Anime</NavLink>
                                </NavItem>
                            </Nav>
                            <UncontrolledDropdown>
                                <DropdownToggle nav>
                                    <img src={avatar} alt='avatar' className='pb-1' />{' '}
                                    {decoded.email}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/login' onClick={() => logout()}>
                                            Logout
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Collapse>
                    </>
                )}
            </Navbar>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, { logout })(Navigation);

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../_actions/authActions';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/img/male.png';

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

    let authenticated = useSelector((state) => state.isAuthenticated);

    const dispatch = useDispatch();

    return (
        <Container fluid>
            {authenticated && <Redirect to='login' />}
            <Navbar color='light' light expand='md'>
                {authenticated && (
                    <>
                        <NavbarBrand>
                            <NavLink to='/'>
                                <h4>Case Tracker</h4>
                            </NavLink>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem className='mr-2'>
                                    <NavLink to='/lawyers'>Lawyers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/institutions'>Institutions</NavLink>
                                </NavItem>
                            </Nav>
                            <UncontrolledDropdown>
                                <DropdownToggle nav>
                                    <img src={avatar} alt='avatar' className='pb-1' /> Kotiko
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/login' onClick={() => console.log('logout!')}>
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

export default Navigation;

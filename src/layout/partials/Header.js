import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/foxhublogo.png'


export const Header = () => {
  return (
    <Navbar collapseOnSelect bg='info' data-bs-theme="dark" expand='lg'>
        <Container fluid>
        <Navbar.Brand>``
        <img src={logo} alt='' width='100px' height='100px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto my-lg-0'
            style={{ maxHeight: '100px' }}>
                <Nav.Link href='/dashboard>'>Dashboard</Nav.Link>
                <Nav.Link href='/tickets>'>Tickets</Nav.Link>
                <Nav.Link href='/dashboard>'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        </Container>
        </Navbar>
  )
}

import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/foxhublogo.png'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


export const Header = () => {
  const navigate = useNavigate()

  const logMeOut = () =>{
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect bg='info' data-bs-theme="dark" expand='lg'>
        <Container fluid>
        <Navbar.Brand>
        <img src={logo} alt='' width='100px' height='100px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto my-lg-0'
            style={{ maxHeight: '100px' }}>
               <LinkContainer to='/dashboard'>
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
               <LinkContainer to='/ticketLists'>
                  <Nav.Link>Tickets</Nav.Link>
                </LinkContainer>
               <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        </Container>
        </Navbar>
  )
}

import React, {useState}from 'react'
import { Container, Row, Col, Button,  } from "react-bootstrap";
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import tickets from '../../assets/data/dummy_data.json';
import { MessageHistory } from '../../components/messageHistory/MessageHistory';
import { UpdateTicket } from '../../components/updateTicket/UpdateTicket';


const ticket = tickets[0];


export const Ticket = () => {
  const [message, setMessage] = useState('')

  const handleOnChange = (e) =>{
    setMessage(e.target.value);
  }

  const handleOnSubmit = () =>{
    alert('Form submitted!')
  }
  
    return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumbs page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Ticket Opened: {ticket.addedAt}</div>
            <div className='status'>Status: {ticket.status}</div>
            </Col>
            <Col className='text-right'>
            <Button variant='outline-info' >Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
            <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />

            </Col>
        </Row>
    </Container>
  )
}

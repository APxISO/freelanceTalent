import React from 'react'
import { Container, Row, Col, Button,  } from "react-bootstrap";
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import tickets from '../../assets/data/dummy_data.json';
import { MessageHistory } from '../../components/messageHistory/MessageHistory';

const ticket = tickets[0];


export const Ticket = () => {
  
  
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
            <div className='date'>Date: {ticket.addedAt}</div>
            <div className='status'>Status: {ticket.status}</div>
            </Col>
            <Col className='text-right'>
            <Button variant='outline-info' >Close Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
    </Container>
  )
}

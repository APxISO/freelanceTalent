import React, { useState} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { SearchForm } from '../../components/searchForm/SearchForm';
import { TicketTable } from '../../components/ticketTable/TicketTable';
import tickets from '../../assets/data/dummy_data.json';

export const TicketLists = () => {
  const [str, setStr] = useState('')
  const [dispTicket, setDispTicket] = useState(tickets)


  const handleOnChange = e =>{
    const {value} = e.target
    console.log(value)
    setStr(value)
    searchTicket(value)
  }

  const searchTicket = str => {
    
    const displayTickets = tickets.filter(row=> row.subject.toLowerCase().includes(str.toLowerCase())) 
    setDispTicket(displayTickets);
  }


    return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumbs page="Ticket Lists"/>
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col>
            <Button variant='info'>Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
            <SearchForm 
            handleOnChange={handleOnChange} 
            str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <TicketTable tickets={dispTicket}/>
            </Col>
        </Row>
    </Container>
  )
}

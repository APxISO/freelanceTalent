import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { SearchForm } from '../../components/searchForm/SearchForm';
import { TicketTable } from '../../components/ticketTable/TicketTable';
import tickets from '../../assets/data/dummy_data.json';

export const TicketLists = () => {
  const [str, setStr] = useState('')
  useEffect(() => {}, [str])
  

  const handleOnChange = e =>{
    setStr(e.target.value)
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
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}

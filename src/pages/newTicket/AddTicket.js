import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { AddTicketForm } from '../../components/addTicketForm/AddTicketForm'


const initialFormData = {
    subject: '',
    issueDate: null,
    details: ''
}

export const AddTicket = () => {
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() =>{}, [formData])

   const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log('Form submit request received!', formData) 
   }

const handleOnChange = (e) =>{
    const {name, value} = e.target;



    setFormData({
        ...formData,
        [name]: value
    })
    console.log(name, value)
} 
  
    return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumbs page={"New Tickets"}/>
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formData={formData}/>
            </Col>
        </Row>
    </Container>
  )
}

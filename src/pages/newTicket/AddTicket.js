import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'

export const AddTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumbs page={"New Tickets"}/>
            </Col>
        </Row>

        <Row>
            <Col>
                //Add Ticket
            </Col>
        </Row>
    </Container>
  )
}

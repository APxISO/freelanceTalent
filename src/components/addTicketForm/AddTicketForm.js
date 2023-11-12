import React from 'react'
import { Card, Form, Row, Col, Button} from 'react-bootstrap'
import PropTypes from "prop-types";
import './addTicketForm.css'

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData}) => {
    console.log(formData)
  return (
    <Card className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center mt-3">Add New Ticket</h1>
      <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className='m-1'>
          <Form.Label className='mb-3' column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              
            </Form.Text>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className='m-1'>
          <Form.Label className='mb-5' column sm={3}>
            Issue Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='m-1'>
          <Form.Label className='mb-3'>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            value={formData.details}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <div className="d-grid gap-2 m-3 mt-3">
        <Button  type="submit" variant="info" size="lg">
          Submit Ticket
        </Button>
        </div>
      </Form>
    </Card>
  )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired, 
    
}
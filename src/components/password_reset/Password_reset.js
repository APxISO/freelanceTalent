import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                        
                        />
                    </Form.Group>
                    <br/>
                    
                    
                    <Button type='submit'>Reset Password</Button>
                    <hr/>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!'onClick={() => formSwitcher('login')}>Already have a login? Click here.</a>  
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
}
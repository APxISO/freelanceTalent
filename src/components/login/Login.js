import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const LoginForm = ({handleOnChange, email, password}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Login</h1>
                <hr/>
                <Form>
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
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                        placeholder='Password'
                        required
                        />
                    </Form.Group>
                    <br/>
                    <Button type='submit'>Login</Button>
                    <hr/>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!'>Forgot Password?</a>  
            </Col>
        </Row>
    </Container>
  )
}

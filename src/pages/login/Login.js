import React from 'react'
import './login.css'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


export const Login = () => {
  return (
    
    <div className='login-page bg-info'>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

import React, {useState} from 'react'
import './login.css'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login'




export const Login = () => {
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

const handleOnChange = e =>{
  const {name, value} = e.target
  console.log(name, value)
}
  return (
    
    <div className='login-page bg-info'>
      <Card className='form-box' style={{ width: '18rem' }}>
      
      <Card.Body>
        <LoginForm handleOnChange={handleOnChange} 
        email={email}
        password={password}
        
        />
      </Card.Body>
    </Card>

    </div>
  )
}

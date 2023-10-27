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
  switch(name){
    case 'email':
      setEmail(value)
      break;

      case 'password':
      setPassword(value)
      break;

      default:
        break;
  }
  console.log(name, value)
}

const handleOnSubmit = e => {
  e.preventDefault()
  if(!email || !password){
    alert("Please complete the entire form.")
  }

// TODO call api to submit the form
console.log('email & password',email, password)

}


  return (
    
    <div className='login-page bg-info'>
      <Card className='form-box' style={{ width: '18rem' }}>
      
      <Card.Body>
        <LoginForm 
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        email={email}
        password={password}
        
        />
      </Card.Body>
    </Card>

    </div>
  )
}

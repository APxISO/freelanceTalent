import React, {useState} from 'react'
import './login.css'
import { Card } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login'
import { ResetPassword } from '../../components/password_reset/Password_reset'




export const Login = () => {
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')
const [formLoad, setFormLoad]= useState('login')

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

const handleOnResetSubmit = e => {
  e.preventDefault()
  if(!email){
    alert("Please enter your email")
  }

 

// TODO call api to submit the form
console.log('email',email)

}

const formSwitcher = formType =>{
  setFormLoad(formType)  
}



  return (
    
    <div className='login-page bg-info'>
      <Card className='form-box' style={{ width: '18rem' }}>
      
      <Card.Body>
        {formLoad=== 'login' && 
        <LoginForm 
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        password={password}
        />} 

        {formLoad=== 'reset' && <ResetPassword 
        handleOnChange={handleOnChange} 
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        />}
      </Card.Body>
    </Card>

    </div>
  )
}

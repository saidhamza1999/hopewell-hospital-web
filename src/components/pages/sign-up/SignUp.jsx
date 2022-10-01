import React from 'react'
import "../../../style/signUp.css"
const SignUp = () => {
  return (
    <div className='main'>
        <h1>
            Sign Up
        </h1>
        <div className='input_continer'>
        <input type="text" placeholder='Abbas Khan' />
        <input type="text" placeholder='Abs.khan2001@gmail.com' />
        <input type="text" placeholder='Enter Password' />
        <input type="text" placeholder='Confirm Password' />
        </div>
        <div className='agree_to_Term '>
        <input type="checkbox" />
       <span>I read and agree to Term & Conditions</span>
       </div>
       <button className='button'>CREATE ACCOUNT</button>
       <p>Already have an account? Sign in </p>
        </div>
  )
}

export default SignUp
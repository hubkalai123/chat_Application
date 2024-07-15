'use client';
import React from 'react'
import '../../style/login.scss'
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className='Form_container'>
        <div className='logcontainer'>
          <form className='form_conatiner'>
          <h3>login</h3>
            <div className='form_control'>
              <label htmlFor='username'>User Name:- </label>
              <input type="text" className='inputClass' name="username" id="username" />
            </div>
            <div className='form_control'>
              <label htmlFor='password'>Password:- </label>
              <input type="password" className='inputClass' name="password" id="password" />
            </div>
            <div className='form_control'>
              <button type='submit' className='log_button'>Login</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LoginForm
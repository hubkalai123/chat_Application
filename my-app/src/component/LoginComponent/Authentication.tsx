'use client';
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Authentication = () => {
    const [key, setKey] = useState<any>('login');
    
  return (
    <div className='chnaging-conatiner'>
    <Tabs id="login-signup-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="login" title="Login">
        <LoginForm />
      </Tab>
      <Tab eventKey="signup" title="Signup">
        <SignupForm />
      </Tab>
    </Tabs>  
    </div>
    )
}

export default Authentication;
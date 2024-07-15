import React from 'react'
import cloud from "../../style/image/cloud.png"
import camera from "../../style/image/camera.png"
import Image from 'next/image'

const SignupForm = () => {
  return (
    <div className='Form_container'>
        <div className='logcontainer'>
          <form className='signup_container'>
          <h3>Sign up</h3>
           <div className="profile-picture-container">

              <Image src={cloud} alt={"cloud"} className="profile-picture" />

              <div className="camera-icon">
                <Image src={camera} alt="Camera Icon" />
              </div>
            </div>
            <div className='form_control'>
              <label htmlFor='username'>First Name:- </label>
              <input type="text" className='inputClass' name="firstname" id="firstname" />
            </div>
            <div className='form_control'>
              <label htmlFor='username'>Last Name:- </label>
              <input type="text" className='inputClass' name="lastname" id="lastname" />
            </div>
            <div className='form_control'>
              <label htmlFor='username'>User Name:- </label>
              <input type="text" className='inputClass' name="username" id="username" />
            </div>
            <div className='form_control'>
              <label htmlFor='username'>Email:- </label>
              <input type="email" className='inputClass' name="email" id="email" />
            </div>
            <div className='form_control'>
              <label htmlFor='password'>Password:- </label>
              <input type="password" className='inputClass' name="password" id="password" />
            </div>
            <div className='form_control'>
              <button type='submit' className='log_button'>Sign up</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignupForm
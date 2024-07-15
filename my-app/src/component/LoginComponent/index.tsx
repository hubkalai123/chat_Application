'use client';
import Image from 'next/image';
import {  useRef, useState } from 'react';
import { useGsapEffect } from '@/hooks/gsap';
import gsap from 'gsap';
import LoginForm from './LoginForm';
import '../../style/login.scss'
import Authentication from './Authentication';

export default function LoginPage() {
  //Image hider
  const [isFormShow,issetFormShow] = useState(false);
  //GSAP Container Change
  const containerRef = useRef(null);
  //GSAP Effect
  useGsapEffect();
  
  //based GSAP Functionality it will move the conatainer open the Form.
  const handleLogin = () => {
    const timeline = gsap.timeline();
    timeline.to(containerRef.current, { opacity: 0, duration: 5, onComplete: () => {
    }});
    gsap.effects.fade(containerRef.current);
    
    setTimeout(() => {
      issetFormShow(true);
      gsap.effects.fade(containerRef.current);
    }, 2000); 
  };

  return (
  <div className='login_base_container'>
    <div className='container_default' ref={containerRef}>
      <div className='Login_container'>
          <div className='pepole_communication'>
            <div className='whiteperson'>
            <Image src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people1_e915aa3772.png&w=1920&q=90' alt='pepole_yellow'  id='white_man_speak' data-aos="fade-right" width={1024} height={881}/>
            </div>
            <div className='blue_person'>
            <Image src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people2_f1e2f3d807.png&w=1920&q=90' alt='pepole_yellow' data-aos="fade-left" width={1024} height={881}/>
            </div>
          </div>
          <div className='login_button'>
              <button className='login_btn' onClick={handleLogin}>Login</button>
          </div>
      </div>
    </div>
    {isFormShow && <Authentication />}
  </div>
  );
}

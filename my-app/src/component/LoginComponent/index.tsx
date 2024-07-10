'use client';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/store/reducers/Authreducers';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { useGsapEffect } from '@/hooks/gsap';
import gsap from 'gsap';
import LoginForm from './LoginForm';
import '../../style/login.scss'

export default function LoginPage() {

  const [isFormShow,issetFormShow] = useState(false);

  const containerRef = useRef(null);

  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);

  useGsapEffect();
  
  
  
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
            <img src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people1_e915aa3772.png&w=1920&q=90' alt='pepole_yellow'  id='white_man_speak' data-aos="fade-right"/>
            </div>
            <div className='blue_person'>
            <img src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people2_f1e2f3d807.png&w=1920&q=90' alt='pepole_yellow' data-aos="fade-left" />
            </div>
          </div>
          <div className='login_button'>
              <button className='login_btn' onClick={handleLogin}>Login</button>
          </div>
      </div>
    </div>
    {isFormShow && <LoginForm />}
  </div>
  );
}

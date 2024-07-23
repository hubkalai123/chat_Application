'use client';
import React, { useEffect } from 'react';
import { ROUTESPATH } from '@/utils/constant';
import { useAppSelector } from '@/store/hook';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { escape } from 'querystring';

interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { istoken } = useAppSelector((state:RootState) => state.auth);

  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);

  if (istoken) {
    router.push(ROUTESPATH.CHATAPP);
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PublicLayout;
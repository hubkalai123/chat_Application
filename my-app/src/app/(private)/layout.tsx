'use client';
import React from 'react';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { ROUTESPATH } from '@/utils/constant';
import { useAppSelector } from '@/store/hook';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    const { istoken } = useAppSelector((state:RootState) => state.auth)
    const router = useRouter();


  if (!istoken) {
    router.push(ROUTESPATH.LOGIN)
  }else{
    router.push(ROUTESPATH.CHATAPP)
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivateLayout;
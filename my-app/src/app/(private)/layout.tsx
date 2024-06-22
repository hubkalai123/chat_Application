'use client';
import React from 'react';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { ROUTESPATH } from '@/utils/constant';
import { useAppSelector } from '@/store/hook';
import { RootState } from '@/store/store';
interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    const { isAuthenticated } = useAppSelector((state:RootState) => state.auth)


  if (!isAuthenticated) {
    redirect(ROUTESPATH.LOGIN)
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivateLayout;
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

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state:RootState) => state.auth)
  console.log("isssAuth", isAuthenticated);
  if (isAuthenticated) {
    router.push(ROUTESPATH.CHATAPP);
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PublicLayout;
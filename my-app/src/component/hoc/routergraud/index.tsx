'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/store/hook";

export const RouterGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const searchParams = useSearchParams();
  const activation_key = searchParams.get('activation_key');

  useEffect(() => {
    authCheck(pathname);
    window.scrollTo(0, 0);
  }, [isAuthenticated, pathname]);

  async function authCheck(url: string) {
   
    setAuthorized(true);
  }

  return authorized ? children : <></>;
};
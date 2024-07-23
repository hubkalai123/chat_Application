/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { use, useEffect } from 'react'
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import { db,auth } from '@/hooks/firebase';
import { useAppSelector } from '@/store/hook';
import { RootState } from '@/store/store';
import { onAuthStateChanged } from 'firebase/auth';

const CHATAPP_COMPONENTS = () => {
  const {user} = useAppSelector((state:RootState ) => state.auth)

  useEffect(() => {
    const uploadUserData = async () => {
      if (user) {
        const userRef = collection(db, 'users');
        const q = query(userRef, where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          await addDoc(collection(db, "users"), {
            email: user.email,
            uid: user.uid,
            providerData: user.providerData,
          });
          console.log('User data added to Firestore');
        } else {
          console.log('User already exists');
        }
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        uploadUserData();
      }
    });

    return () => unsubscribe();
  }, [db, auth]);
  return (
    <div>CHATAPP_COMPONENTS</div>
  )
}

export default CHATAPP_COMPONENTS
'use client';
import Image from 'next/image';
import '../../style/login.scss'
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../hooks/firebase';
import { useAppDispatch } from '@/store/hook';
import * as Authreducer from '@/store/reducers/Authreducers';
import { toast } from 'react-toastify'

export default function LoginPage() {
  const dispatch = useAppDispatch();
  //Real Time Database Firebase Functionality. For the Data in DB.

  //Handle Functionality For the Google Login using the Firebase.

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      if(result)
      {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential)
        {
          const token = credential.accessToken;
          dispatch(Authreducer.login({token}));
          dispatch(Authreducer.setCurrentuser(result.user));
          toast.success('Login Successfully',{ position: 'top-right', autoClose: 5000 })
        } 
      }
    }).catch((error) => {
      console.log("Error", error);
    })
  }; 

  return (
  <div className='login_base_container'>
    <div className='container_default'>
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
    {/* {isFormShow && <Authentication />} */}
  </div>
  );
}

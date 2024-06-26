'use client';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/store/reducers/Authreducers';
import { ROUTESPATH } from '@/utils/constant';
import Image from 'next/image';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login(true));
    router.push(ROUTESPATH.CHATAPP);
  };

  return (
  <div className='login_base_container'>
    <div className='container_default'>
      <div className='Login_container'>
          <div className='pepole_communication'>
            <div className='whiteperson'>
            <img src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people1_e915aa3772.png&w=1920&q=90' alt='pepole_yellow'  id='white_man_speak'/>
            </div>
            <div className='blue_person'>
            <img src='https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2Fmockup_people2_f1e2f3d807.png&w=1920&q=90' alt='pepole_yellow'  />
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}

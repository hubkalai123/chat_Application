'use client';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/store/reducers/Authreducers';
import { ROUTESPATH } from '@/utils/constant';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {debugger;
    dispatch(login(true));
    router.push(ROUTESPATH.CHATAPP);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

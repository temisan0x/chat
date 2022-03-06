import '../styles/globals.css'
import type { AppProps } from 'next/app';
//check if there's a login using firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from './login'
import Loading from '../components/Loading'


function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);
  if (true) return <Loading/>
  if (!user) return <Login />; //no user logged in return login screen
  
  return <Component {...pageProps} />//update & give access to user if logged in
}

export default MyApp

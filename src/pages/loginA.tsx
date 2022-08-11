import { NextPage } from 'next'
import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginWithGoogleButton from '../features/Auth/LoginWithGoogle'
import AppAuth from '../features/Auth/Auth'

const LoginWithGoogle: NextPage = () => {
  return <AppAuth />
}
export default LoginWithGoogle

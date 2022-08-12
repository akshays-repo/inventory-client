import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginWithGoogleButton from './LoginWithGoogle'

const AppAuth = () => {
  return (
    <GoogleOAuthProvider clientId='331290056902-i949kh9as7vvpd7ahgh9rv43f6ok3pra.apps.googleusercontent.com'>
      <LoginWithGoogleButton />
    </GoogleOAuthProvider>
  )
}
export default AppAuth

import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton/LoginWithGoogle'
const AppAuth = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="331290056902-i949kh9as7vvpd7ahgh9rv43f6ok3pra.apps.googleusercontent.com">
        <div>LoginWithGoogle</div>
        <LoginWithGoogleButton />
      </GoogleOAuthProvider>
    </div>
  )
}
export default AppAuth
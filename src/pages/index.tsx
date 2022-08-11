import type { NextPage } from 'next'
// import GoogleLogin from 'react-google-login'
import { googleApi } from '../lib/googleApi'
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from '@react-oauth/google'

import styles from '../styles/Home.module.css'

const CustomButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse)
      if (tokenResponse.access_token) {
        const tokens = await googleApi(tokenResponse.access_token.toString())
        if (!tokens) {
          alert('Error while logging in w/Google 1 ')
        } else {
          alert(tokens)
        }
      }
    },
  })
  return <button onClick={() => login()}>Login button</button>
}

const Home: NextPage = () => {
  // const googleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     console.log(tokenResponse)
  //     // const tokens = await googleApi(credentialResponse)
  //     // if (!tokens) {
  //     //   alert('Error while logging in w/Google 1 ')
  //     // } else {
  //     //   alert(tokens)
  //     // }
  //   },
  //   onError: (errorResponse) => console.log(errorResponse),
  // })
  return (
    <div className={styles.container}>
      <GoogleOAuthProvider clientId="331290056902-i949kh9as7vvpd7ahgh9rv43f6ok3pra.apps.googleusercontent.com">
        <div className="">
          <h1>Login With Google</h1>

          <CustomButton />
          {/* <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(credentialResponse)
              const tokens = await googleApi(credentialResponse)
              if (!tokens) {
                alert('Error while logging in w/Google 1 ')
              } else {
                alert(tokens)
              }
            }}
            onError={() => {
              console.log('Login Failed')
            }}
          /> */}
          {/* <GoogleLogin
            clientId={
              '331290056902-i949kh9as7vvpd7ahgh9rv43f6ok3pra.apps.googleusercontent.com'
            }
            buttonText="Login with Google"
            onSuccess={async (response) => {
              console.log('google response', { response })
              const tokens = await googleApi(response)
              if (!tokens) {
                alert('Error while logging in w/Google 1 ')
              } else {
                // put login logic (i.e. navigating to dashboard page, fetching user from backend
                // using the new access token, etc
              }
            }}
            onFailure={(response) => {
              console.log('failur', response)
              alert(response)
            }}
            cookiePolicy={'single_host_origin'}
          /> */}
        </div>
      </GoogleOAuthProvider>
    </div>
  )
}

export default Home

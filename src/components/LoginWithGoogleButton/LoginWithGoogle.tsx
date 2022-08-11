import React from 'react'
import { googleApi } from '../lib/googleApi'
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from '@react-oauth/google'

const LoginWithGoogleButton = () => {
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
  return (
    <button onClick={() => login()}>Login button</button>
  )
}

export default LoginWithGoogleButton
import { CredentialResponse } from '@react-oauth/google'

export const googleApi = async (token: string) => {
  try {
    const result = await fetch('http://localhost:3000/auths/google/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    const json = await result.json()

    return json
  } catch (e) {
    return undefined
  }
}

import { LOCAL_STORE } from '../constants/localstore.constant'
import jwt_decode from 'jwt-decode'

interface UserInfo {
  id: number
  name: string
  email: string
}
interface JwtPayload {
  userInfo: UserInfo
}

export class AppAuthentication {
  private decodeJwt = (): JwtPayload => {
    const decoded: JwtPayload = jwt_decode(this.getUserToken())
    return decoded
  }
  getUserToken = (): string => {
    const token = localStorage.getItem(LOCAL_STORE.TOKEN) || ''
    return token
  }
  setUserToken = (newToken: string): string => {
    localStorage.setItem(LOCAL_STORE.TOKEN, newToken)
    return newToken
  }

  getInfo = (): UserInfo => {
    return this.decodeJwt().userInfo
  }

  isUserLogined = (): boolean => {
    if (this.getUserToken().length > 0) {
      return true
    } else {
      return false
    }
  }

  logout = () => {
    localStorage.clear()
    window.location.href = '/loginA'
  }
}

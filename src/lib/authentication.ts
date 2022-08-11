import { LOCAL_STORE } from '../constants/localstore.constant'

export class AppAuthentication {
  getUserToken = (): string => {
    const token = localStorage.getItem(LOCAL_STORE.TOKEN) || ''
    return token
  }

  setUserToken = (newToken: string): string => {
    localStorage.setItem(LOCAL_STORE.TOKEN, newToken)
    return newToken
  }
  isUserLogined = (): boolean => {
    if (this.getUserToken().length > 0) {
      return true
    } else {
      return false
    }
  }
}

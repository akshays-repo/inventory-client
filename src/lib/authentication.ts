import { LOCAL_STORE } from '../constants/localstore.constant'

export class AppAuthentication {
  private static instance: AppAuthentication

  public static getInstance(): AppAuthentication {
    if (!this.instance) {
      this.instance = new AppAuthentication()
    }

    return this.instance
  }

  getUserToken = (): string => {
    const token = localStorage.getItem(LOCAL_STORE.TOKEN) || ''
    return token
  }

  setUserToken = (): string => {
    const token = localStorage.getItem(LOCAL_STORE.TOKEN) || ''
    return token
  }
  isUserLogined = (): boolean => {
    if (this.getUserToken().length > 0) {
      return true
    } else {
      return false
    }
  }
}

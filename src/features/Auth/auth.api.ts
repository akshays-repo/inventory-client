import { axiosInstance } from '../../lib/axiosInstance'

export const authApi = async (token: string) => {
  const axio = axiosInstance.getInstance()

  try {
    const response = await axio.postData({
      api: 'auths/google/login',
      data: { token },
      id: '',
    })
    console.log({ response })
    return response.data as { accessToken: string }
  } catch (error) {
    return undefined
  }
}

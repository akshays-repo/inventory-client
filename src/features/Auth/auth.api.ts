import { HttpInstance } from 'src/@core/utils/axiosInstance'

export const authApi = async (token: string) => {
  const axio = HttpInstance.getInstance()

  try {
    const response = await axio.postData({
      api: 'auths/google/login',
      data: { token },
      id: ''
    })
    console.log({ response })

    return response.data as { accessToken: string }
  } catch (error) {
    return undefined
  }
}

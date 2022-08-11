import axios, { AxiosInstance } from 'axios'
import { AppAuthentication } from './authentication'
import {
  Delete,
  Get,
  Patch,
  Post,
  PostFormData,
  Put,
  PutFormData,
} from './http.type'

// An singleton axio instance to fetch the api calls

export class axiosInstance {
  private static instance: axiosInstance
  private appAuth = new AppAuthentication()

  public static getInstance(): axiosInstance {
    if (!this.instance) {
      this.instance = new axiosInstance()
    }
    return this.instance
  }

  private axioInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY,
    headers: {
      'content-type': 'application/json',
      Authorization: this.appAuth.getUserToken()
        ? `Bearer ${this.appAuth.getUserToken()}`
        : '',
    },
  })

  getData({ api, params, id }: Get) {
    return this.axioInstance({
      method: 'GET',
      url: id ? `${api}/${id}` : api,
      params,
    })
  }

  postData({ api, data, id }: Post) {
    return this.axioInstance({
      method: 'POST',
      url: id ? `${api}/${id}/` : api,
      data,
      transformResponse: [
        (res: string) => {
          const json: unknown = JSON.parse(res)
          return json
        },
      ],
    })
  }

  putData({ api, data, id }: Put) {
    return this.axioInstance({
      method: 'PUT',
      url: id ? `${api}/${id}/` : api,
      data,
      transformResponse: [
        (res: string) => {
          const json: unknown = JSON.parse(res)
          return json
        },
      ],
    })
  }

  patchData({ api, data, id }: Patch) {
    return this.axioInstance({
      method: 'PATCH',
      url: id ? `${api}/${id}/` : api,
      data,
      transformResponse: [
        (res: string) => {
          const json: unknown = JSON.parse(res)
          return json
        },
      ],
    })
  }

  deleteData({ api, id, data }: Delete) {
    return this.axioInstance({
      method: 'DELETE',
      url: `${api}/${id}/`,
      data,
      // transformResponse: [
      //   (res: string) => {
      //     const json: unknown = JSON.parse(res)
      //     return json
      //   },
      // ],
    })
  }

  postFormData({ api, data, id }: PostFormData) {
    return this.axioInstance({
      method: 'POST',
      url: id ? `${api}/${id}/` : api,
      data,
      headers: { 'content-type': 'multipart/form-data' },
    })
  }

  putFormData({ api, data, id }: PutFormData) {
    return this.axioInstance({
      method: 'PUT',
      url: id ? `${api}/${id}/` : api,
      data,
      headers: { 'content-type': 'multipart/form-data' },
    })
  }
}
